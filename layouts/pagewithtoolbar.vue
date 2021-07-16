<template>
  <section
    class="main-section"
  >
    <v-card
      color="grey lighten-4"
      class="header-section"
      flat
      tile
    >
      <v-toolbar
        dense
        class="header-section"
      >
        <v-toolbar-title class="toolbar-title">
          Product
        </v-toolbar-title>
        <v-spacer />
      </v-toolbar>
    </v-card>
    <!-- <v-main> -->
    <nuxt />
    <!-- </v-main> -->
  </section>
</template>

<style >
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
.product-section{
    display: flex;
    width: 100%;
    max-width: 800px;
    margin: 20vh auto 0px auto;
    border-color: white;
    border-width: 1px;
    border-style: solid;
}

.header-section{
  /* background-color: white; */
  background-color: #ffffff;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

}

.v-sheet.v-toolbar:not(.v-sheet--outlined) {
    /* box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); */
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
}

.v-sheet.v-card:not(.v-sheet--outlined) {
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
}

.section-title{
    font-size: 40px;
    font-weight: 400;
    margin: 90px 0px;
    color:#103C7E;
}

.form{
    width: 100%;
    max-width: 300px;
    margin: 30px 0px 0px 0px;
    border-color: white;
    border-width: 1px;
    border-style: solid;
}

.ql-container {
  font-size: 16px;
}
.ql-editor {
    padding: 0px 0px;
}
.skip-button{
    float: right;
    font: 500;
    color: #1C6CE3;
}

.header-text{
    color:#103C7E;
}

.content{
    margin: 60px 0px 0px 0px;
}

.name-text{
    width: 100%;
    height: 44px;
    margin: 20px 0px 0px 0px;
}

.hire-me{
    width: 110px;
    background-color: #1C6CE3;
    height: 38px;
    border: none;
    border-radius: 3px;
    margin: 30px 0px 0px 0px;
}

.light-button{
    width: 110px;
    height: 38px;
    border-radius: 3px;
    margin: 30px 10px 0px 0px;
}

</style>
