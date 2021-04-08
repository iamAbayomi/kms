<template>
  <div class="container">
    <NavigationBar />
    <!-- <p class="test-text">
      loggedIn {{ data }}
    </p> -->
    <section class="contact-section">
      <!--Begining of Flex Container -->
      <div class="section-container">
        <!-- Heading Section -->
        <p class="section-text" />
        <!-- Begining of Contact form -->
        <div class="contact-form">
          <p class="section-description">
            Welcome Back
          </p>
          <form id="form" @submit.prevent="signIn">
            <!-- Input Field for Email -->
            <label for="name-label" class="name-label">Email</label>
            <input
              v-model="email"
              type="email"
              class="name-text"
              placeholder=" "
              required
            >
            <!-- Input Field for Password -->
            <label for="name-label" class="name-label">Password</label>
            <input
              v-model="password"
              type="password"
              class="name-text bottom-bar"
              placeholder=" "
              required
            >
            <!-- Error Message for email or password -->
            <p
              v-if="status == 500"
              class="error-notify"
            >
              {{ loginError }}
            </p>
            <!--
            <input
              type="checkbox"
              class="message-text"
              placeholder=" "
            >
            <p class="inline small-text">
              Remember Password
            </p> -->
            <div class="text-section">
              <nuxt-link to="/forgot-password" class="text-link">
                <p class="inline blue-text lighter-blue">
                  Forget password?
                </p>
              </nuxt-link>
              <nuxt-link to="/signup" class="text-link">
                <p class="inline blue-text lighter-blue">
                  Create account
                </p>
              </nuxt-link>
            </div>
            <!--Submit Button-->
            <div class="div-button">
              <input type="submit" value="Login" class="blue-button">
            </div>
          </form>
          <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans">

          <div
            class="google-signin-btn-section"
            @click="signInWithGoogle"
          >
            <div class="middle-div">
              <img class="google-signin-btn" src="~/assets/vectors/btn_google_icon.svg">
              <p class="google-signin-text">
                Sign Up with Google
              </p>
            </div>
          </div>

        <!-- End of Contact form -->
        </div>
        <!-- End of flex Container -->
      </div>
    </section>
  </div>
</template>

<script>
/* eslint-disable no-console */
// const axios = require('axios')
export default {
  data () {
    return {
      // email: 'oladinifolawiyo@gmail.com',
      // password: 'qwerty',
      // data: ''
      email: '',
      password: '',
      loginError: '',
      status: ''
    }
  },
  beforeCreate () {
    // this.data = this.$auth.loggedIn
    // if (this.$auth.loggedIn) {
    //   // this.$router.push('/ideas')
    // }
  },
  methods: {
    signIn () {
      this.$auth.loginWith('local', {
        data: {
          email: this.email,
          password: this.password
        }
      }).then((response) => {
        console.log('success')
        console.log(response)
        this.$router.push('/hello')
        // this.$router.push('/newcategories')
      }).catch((error) => {
        console.log(error.response)
        this.loginError = error.response.data.message
        this.status = error.response.status
      })
    },
    signInWithGoogle () {
      // this.$auth.loginWith('google')
    }
  }
}
</script>

<style scoped>
html {
    font-size: 100%;
  }

body{
    background-color: #F4F8FC;
    height: 100%;
    width: 100%;
    margin: 0px;
    padding: 0px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color:  #F4F8FC;
    /* background-color: #ffffff; */

}

.top-bar{
  /* margin-top: 7vh; */
  height: 18vh;
  background-color: #F4F8FC;
  color: #F4F8FC;
}

.test-text{
  margin: auto;
}

.container{
  background-color: white;
  width: 100%;
}

.header-logo{
    width: 100px;
    margin: 20px;
}

.contact-section{
    margin: auto;
    max-width: 380px;
    /* margin-top: 7vh; */
    margin-bottom: 30px ;
    padding: 15px 40px 20px;
    /* Add shadows to create the "card" effect */
    /* box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); */
    transition: 0.3s;
    background-color: white;
    border-color: #E1DADA ;
    border-radius: 4px;
    border-width: 0.1px;
    border-style: solid;
}

.section-description{
    text-align: center;
    font-size: 32px;
    padding-top: 0px;
    font-weight: 550;
    color: #1C6CE3;
    margin-bottom: 30px;
}

.name-label{
  /* border-color: #0f0d0d ; */
  border-radius: 4px;
  border-width: 0.1px;
  /* border-style: solid; */
  padding: 20px 0px 20px 0px;
  margin-top:30px;
  margin-bottom:40px ;
}

.name-text{
    width: 100%;
    height: 44px;
    display: block;
    background-color: #F4F8FC;
    padding-left: 10px;
    margin-top: 8px;
    margin-bottom: 22px ;
    /* background-color: #F4F8FC; */
}
.text-section{
  display: flex;
    justify-content: space-between;
}

.inline{
    display: inline;
}

.small-text{
    font-size: 13px;
    margin-right: 18px;
    opacity: 0.4;
}

.error-notify{
  text-align: center;
}

.bottom-bar{
  margin-bottom: 20px ;
}
.blue-text{
    color: #1C6CE3;
    text-align: center;
    margin-top: 18px;
    margin-bottom: 3px;
    font-weight: 500;
}

.lighter-blue{
  opacity: 0.9;
  font-size: 14px;
}

.div-button{
  width: 100%;
  height: 40px;
  margin: 16px auto 20px auto;
}
.blue-text{
    color: #1C6CE3;
    text-align: center;
    margin-top: 18px;
    margin-bottom: 3px;
    font-weight: 500;
}

.div-button{
  width: 100%;
  height: 40px;
  margin: 16px auto 20px auto;
}

.blue-button{
    width: 100%;
    height: 44px;
    background-color: #1C6CE3;
    color: white;
    font-size: 18px;
    margin: 0px auto 10px auto;
    border-color:#2762BC;
    border-radius: 4px;
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
}

.google-signin-btn-section{
  width: 100%;
  height: 46px;
  border-width: 0.2px;
  border-color:#313741;
  border-radius: 4px;
  border-style: solid;
  margin: 20px auto 10px auto;
}

.middle-div{
  display: flex;
  width: 200px;
  margin: 9px auto 0px auto;
}

.google-signin-btn {
  width: 30px;
  height: 30px;
  margin: -2px 10px 0px 0px;
}

.google-signin-text{
  color: #032E6E;
  font-size: 16px;
  margin: 2px 0px 0px;
}

.google-signin-btn-section{
  width: 100%;
  height: 46px;
  border-width: 0.2px;
  border-color:#313741;
  border-radius: 4px;
  border-style: solid;
  margin: 20px auto 10px auto;
}

.middle-div{
  display: flex;
  width: 200px;
  margin: 9px auto 0px auto;
}

.google-signin-btn {
  width: 30px;
  height: 30px;
  margin: -2px 10px 0px 0px;
}

.google-signin-text{
  color: #032E6E;
  font-size: 16px;
  margin: 2px 0px 0px;
}

@media screen and (max-width: 450px){
   .contact-section{
        margin-left: 20px ;
        margin-right: 20px;
    }

    .blue-text{
        font-size: 16px;
        display: block;
        text-align: center;
        margin-top: 20px;
    }
/*
    .inline{
        display: block;
    } */

    .section-description{
        text-align: center;
        font-size: 22px;
        padding-top: 0px;
        font-weight: 550;
    }

    .blue-button{
        margin-top: 10px;
        border-color:#2762BC;
        border-radius: 4px;
        border-style: solid;
        /* Add shadows to create the "card" effect */
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
    }
}
</style>
