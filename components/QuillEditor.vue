<template>
  <div id="contain" class="container">
    <!-- Create the editor container -->
    <link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
    <div
      id="editor"
    />
  </div>
</template>

<script>
/* eslint-disable no-console */
import _ from 'lodash'
let Quill = ''
if (process.client) {
  Quill = require('quill')
}
export default {
  data () {
    return {
      notes_group: {
        notes_id: '',
        notes_title: '',
        notes_contents: '',
        notes_delta: ''
      },
      pageName: ' ',
      saved_status: true
    }
  },
  mounted () {
    this.getNotesId()
    this.createQuillEditor()
  },
  methods: {
    getNotesId () {
      // eslint-disable-next-line prefer-const
      let path = this.$route.path
      path = path.substring(1)
      // eslint-disable-next-line no-unused-vars
      const [pageName, notesId] = path.split('/')
      this.notes_group.notes_id = notesId
      // console.log('this is the path ' + path)
      // console.log('this is the notes_id ' + notesId +
      //  ' this is the pagename  ' + pageName)
    },
    // Set the toolbar Options
    setToolbarOptions () {
      const toolbarOptions = ['bold', 'italic', 'underline', 'strike']
      return {
        debug: 'false',
        placeholder: 'hello',
        readOnly: false,
        modules: {
          toolbar: toolbarOptions
        },
        theme: 'snow'
      }
    },
    // Create Quill Editor
    createQuillEditor () {
      const container = document.getElementById('editor')
      const options = this.setToolbarOptions()
      // eslint-disable-next-line no-unused-vars
      const quill = new Quill(container, options)
      this.getText(quill)
      this.onQuillTextChange(this, quill)
    },
    // Listener for the Text Editor Section.
    onQuillTextChange (thiss, quill) {
      quill.on('text-change', function (delta, oldDelta, source) {
        if (source === 'api') {
          console.log('An API call triggered this change.')
        } else if (source === 'user') {
          console.log('A user action triggered this change.')
          thiss.notes_group.notes_delta = JSON.stringify(quill.getContents())
          thiss.notes_group.notes_contents = quill.getText()
          console.log(thiss.notes_group.notes_delta)
          // eslint-disable-next-line no-unused-expressions
          thiss.saveText()
        }
      })
    },
    // Get the notes of the user.
    getText (quill) {
      this.$axios.get('/apis/notes/usernotes/' + this.notes_group.notes_id)
        .then((response) => {
          this.notes_group = response.data
          console.log(response.data.notes_delta)
          quill.setContents(JSON.parse(response.data.notes_delta))
        }).catch((err) => {
          console.log(err)
        })
    },
    // Update the user notes.
    updateText () {
      this.$axios.put('/apis/notes/' + this.notes_group.notes_id, {
        notes_title: this.notes_group.notes_title,
        notes_contents: this.notes_group.notes_contents,
        notes_delta: this.notes_group.notes_delta
      })
        .then((response) => {
          console.log(response)
          // console.log('Here is quill contents')
          // console.log(this.quillContents)
          this.savedStatus = response.status
        })
        .catch((error) => {
          console.log(error)
        })
    },

    // Save text in the user database.
    saveText:
      _.debounce(function () {
        console.log('inside the debounce')
        // if (this.$auth.user.roles === 'guest') {
        //   this.showLogin()
        //   return
        // }
        this.sendText()
        // console.log('sent')
      }, 1000, { maxWait: 3000 }),
    sendText () {
      if (this.saved_status) {
        this.updateText()
      }
    }
  }
}
</script>

<style scoped>
.container{
  margin: 0px 10px 0px 0px;
}

.ql-container.ql-snow {
    border: 0px solid #ccc;
}
.ql-container {
  font-size: 16px;
}

.ql-snow .ql-stroke {
    fill: none;
    stroke: #09244C;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
}

.ql-toolbar {
    border: 0px solid #ccc;
    box-sizing: border-box;
    font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    padding: 8px;
}
.theme--light.v-application {
    background: #FFFFFF;
    color: #103C7E;
}
</style>
