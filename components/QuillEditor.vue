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
    // this.createQuillEditor()

    const container = document.getElementById('editor')
    // const toolbarOptions = this.toolBarOptions()
    const toolbarOptions = ['bold', 'italic', 'underline', 'strike']

    const options = {
      debug: 'false',
      placeholder: 'hello',
      readOnly: false,
      modules: {
        toolbar: toolbarOptions
      },
      // bounds: '#contain',
      theme: 'snow'
    }
    // eslint-disable-next-line no-unused-vars
    const quill = new Quill(container, options)
  },
  nethods: {
    createQuillEditor () {
      const container = document.getElementById('editor')
      // const toolbarOptions = this.toolBarOptions()
      const toolbarOptions = ['bold', 'italic', 'underline', 'strike']

      const options = {
        debug: 'false',
        placeholder: 'hello',
        readOnly: false,
        modules: {
          toolbar: toolbarOptions
        },
        // bounds: '#contain',
        theme: 'snow'
      }
      // eslint-disable-next-line no-unused-vars
      const quill = new Quill(container, options)
    //   this.getText(quill)
    //   this.onQuillTextChange(this, quill)
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
