<template>
  <div class="container">
    <NavigationBar />
    <!-- <p class="test-text">
      loggedIn {{ data }}
    </p> -->
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans">
    <section class="contact-section">
      <!--Begining of Flex Container -->
      <div class="section-container">
        <!-- Heading Section -->
        <p class="section-text" />
        <!-- Begining of Contact form -->
        <div class="contact-form">
          <p class="section-description">
            Join Us
          </p>
          <!--Submit Button-->
          <div class="div-button">
            <nuxt-link to="/signup" class="text-link">
              <input type="submit" value="Sign Up with Email" class="blue-button">
            </nuxt-link>
          </div>

          <!-- Google Sign In Button -->
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
          <p class="middle-text">
            You can get started by signing in
          </p>
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
    }
  },
  methods: {
    signInWithGoogle () {
      this.$auth.loginWith('google')
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
    margin-top: 7vh;
    margin-bottom: 30px ;
    padding: 15px 40px 20px;
    /* Add shadows to create the "card" effect */
    /* box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); */
    transition: 0.3s;
    background-color: white;
    /* border-color: #E1DADA ;
    border-radius: 4px;
    border-width: 0.1px;
    border-style: solid; */
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
  margin: 20px auto 40px auto;
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
  margin: 50px auto 10px auto;
}

.middle-text{
    margin-top: 50px;
    text-align: center;
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
