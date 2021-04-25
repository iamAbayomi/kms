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

    }
  },
  mounted () {
    this.createQuillEditor()
  },
  methods: {
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
    createQuillEditor () {
      const container = document.getElementById('editor')
      const options = this.setToolbarOptions()
      // eslint-disable-next-line no-unused-vars
      const quill = new Quill(container, options)
      //   this.getText(quill)
      this.onQuillTextChange(this, quill)
    },
    onQuillTextChange (thiss, quill) {
      quill.on('text-change', function (delta, oldDelta, source) {
        if (source === 'api') {
          console.log('An API call triggered this change.')
        } else if (source === 'user') {
          console.log('A user action triggered this change.')
          thiss.quillContents = JSON.stringify(quill.getContents())
          thiss.quillText = quill.getText()
          console.log(thiss.quillContents)
          // eslint-disable-next-line no-unused-expressions
          thiss.saveText()
        }
      })
    },
    createText () {
      this.$axios.post('/apis/' + this.pageName, {
        text_title: this.quillText,
        text_body: this.quillContents,
        user_id: this.$auth.user.id
      })
        .then((response) => {
          console.log(response)
          this.savedStatus = response.status
          this.textId = response.data.text_id

          console.log(this.textId)
        })
        .catch((error) => {
          console.log(error)
        })
    },
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
      if (this.savedStatus) {
        this.updateText()
      } else {
        this.createText()
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
