<template>
  <section
    class="main-section"
  >
    <v-card
      color="grey lighten-4"
      dense
      tile
    >
      <v-toolbar
        dense
      >
        <v-toolbar-title class="toolbar-title">
          Product
        </v-toolbar-title>
        <v-spacer />
      </v-toolbar>
    </v-card>
    <!-- <v-main> -->
    <div class="product-section">
      <p class="section-title">
        What's the name of your product
      </p>
      <div class="form">
        <div class="content">
          <p class="header-text heading">
            Product Name
          </p>
          <input
            type="email"
            class="name-text"
            placeholder="Savings app"
            required
          >
          <button
            class="hire-me"
          >
            Next
          </button>
        </div>
      </div>
    </div>
    <!-- </v-main> -->
  </section>
</template>

<style scoped>
.product-section{
    display: flex;
    width: 100%;
    max-width: 800px;
    margin: 20vh auto 0px auto;
    border-color: white;
    border-width: 1px;
    border-style: solid;
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
