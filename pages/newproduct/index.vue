<template>
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
          v-model="product_name"
          type="email"
          class="name-text"
          placeholder="Savings app"
          required
        >
        <button
          class="hire-me"
          @click="createProduct"
        >
          Next
        </button>
      </div>
    </div>
  </div>
  <!-- </v-main> -->
</template>

<script>
/* eslint-disable no-console */
export default {
  layout: 'pagewithtoolbar',
  data () {
    return {
      product_name: '',
      product_id: ''
    }
  },
  methods: {
    createProduct () {
      this.$axios.post('/apis/product/', {
        product_name: this.product_name,
        user_id: this.$auth.user.id
      })
        .then((response) => {
          console.log(response)
          this.product_id = response.data.product_id
          this.$router.push(`/productstage/${this.product_id}`)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}

</script>

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
