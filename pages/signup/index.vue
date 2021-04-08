<template>
  <div class="contain">
    <NavigationBar />
    <!-- <div class="top-bar" /> -->
    <section class="contact-section">
      <!--Begining of Flex Container -->
      <div class="section-container">
        <!-- Heading Section -->
        <p class="section-text" />
        <!-- Begining of Contact form -->
        <div class="contact-form">
          <p class="section-description">
            Sign Up
          </p>
          <form id="form" @submit.prevent="sendUser">
            <!-- Input Field for Username -->
            <label for="name-label" class="name-label">Fullname</label>
            <input
              v-model="user.data.fullname"
              type="name"
              class="name-text"
              placeholder=" "
              required
            >
            <!-- Error Message -->
            <p
              v-if="status == 422"
              class="error-notify"
            >
              {{ usernameError }}
            </p>
            <!-- Input Field for Email -->
            <label for="name-label" class="name-label">Email</label>
            <input
              v-model="user.data.email"
              type="name"
              class="name-text"
              placeholder=" "
              required
            >
            <!-- Error Message for email -->
            <p
              v-if="status == 422"
              class="error-notify"
            >
              {{ invite }}
            </p>
            <!-- Input Field for Password -->
            <label for="name-label" class="name-label">Password</label>
            <input
              v-model="user.data.password"
              type="password"
              class="name-text"
              placeholder=" "
              required
            >
            <!-- Input Field for Confirm Password -->
            <!-- <label for="name-label" class="name-label">Confirm Password</label>
            <input
              v-model="confirmPassword"
              type="password"
              class="name-text"
              placeholder=" "
              required
            > -->
            <!-- Error Message for Password -->
            <p
              v-if="status == 422"
              class="error-notify"
            >
              {{ passwordError }}
            </p>
            <nuxt-link class="blue-text text-link" to="/login">
              <p class="blue-text text-link">
                Have an account?
              </p>
            </nuxt-link>
            <!--Submit Button-->
            <div class="div-button">
              <input type="submit" value="Create Account" class="blue-button">
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

          <!-- <button
            class="blue-button"
            @click="signInWithGoogle"
          >
            Sign in with Google
          </button> -->
          <p
            v-if="status == 200"
            class="success-notify"
          >
            {{ invite }}
          </p>
          <!-- <p
            v-else-if="status == 422"
            class="error-notify"
          >
            {{ invite }}
          </p> -->
        </div>
        <!-- End of Contact form -->
      </div>
      <!-- End of flex Container -->
    </section>
    <!-- <div class="top-bar" /> -->
  </div>
</template>

<script>
/* eslint-disable no-console */
// const axios = require('axios')
// const firebase = require('firebase')
// const uibase = new firebaseui.auth.AuthUI(firebase.auth())
// const mixpanel = require('mixpanel-browser')
// mixpanel.init('f1bfb2d709c3953cd1d5b45713ddc979')

export default {
  data () {
    return {
      invite: '',
      status: '',
      usernameError: '',
      passwordError: '',
      user: {
        loggedIn: false,
        token: null,
        data: {
          // username: 'iamAbayomi',
          // firstname: 'AOlad',
          // surname: 'Sdaad',
          // password: 'qwerty',
          // provider: 'email',
          // email: 'oladinifolawiyo@gmail.com'
          fullname: '',
          firstname: '',
          surname: '',
          password: '',
          provider: 'emailSignUp',
          email: ''
        }
      },
      // confirmPassword: 'qwerty'
      confirmPassword: ''
    }
  },
  head () {
    return {
      title: 'Spiinge | Sign Up'
    }
  },
  mounted () {
  },
  beforeCreate () {
    // this.data = this.$auth.loggedIn
    // if (this.$auth.loggedIn) {
    //   this.$router.push('/onboarding/product')
    // }
  },
  methods: {
    sendUser () {
      this.clearStatus()
      // if (this.user.data.password !== this.confirmPassword) {
      //   this.passwordError = "Password don't match please change password"
      //   this.status = 422
      //   console.log('error')
      //   return
      // }
      this.$axios.post('/apis/user', this.user.data)
        .then((response) => {
          console.log(response.data)
          // this.user.token = response.headers.authorization
          // this.user.loggedIn = true
          this.$auth.loginWith('local', {
            data: {
              email: this.user.data.email,
              password: this.user.data.password
            }
          }).then(() => {
            console.log('success')
            //  mixpanel.track('signUp', { provider: 'google' })
            this.$router.push('/onboarding/product')
          })
            .catch((error) => {
              console.log(error.response)
            })
          // this.$store.dispatch('setUser', { user: this.user })
        })
        .catch((error) => {
          console.log(error.response)
          this.invite = error.response.data.errors.email.msg
          if (error.response.data.errors.username.msg !== undefined) {
            this.usernameError = error.response.data.errors.username.msg
          }

          this.status = error.response.status
          console.log('This is the' + this.invite.toString())
        })
    },
    clearStatus () {
      this.usernameError = ''
      this.passwordError = ''
      this.invite = ''
    },
    signUpWithFirebase (ui) {
      ui.start('#firebaseui-auth-container', {
        signInOptions: [
          // List of OAuth providers supported.
          this.$fire.auth.GoogleAuthProvider.PROVIDER_ID,
          this.$fire.auth.FacebookAuthProvider.PROVIDER_ID,
          this.$fire.auth.TwitterAuthProvider.PROVIDER_ID,
          this.$fire.auth.GithubAuthProvider.PROVIDER_ID
        ]
        // Other config options...
      })
    },
    signInWithGoogle () {
      this.trackSignUp()
      this.$auth.loginWith('google')
    },
    trackSignUp () {
      // mixpanel.track('signUp', { provider: 'google' })
    }
  }

}
</script>

<style lang="scss" scoped>
html {
    font-size: 100%;
  }

body{
    // background: #F4F8FC;
    // height: 100%;
    width: 100%;
    margin: 0px;
    padding: 0px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color:  #F4F8FC;
    /* background-color: #ffffff; */

}

.contain{
  // background: #F4F8FC;
  // width: 100%;
  height: 100%;
}
.top-bar{
  /* margin-top: 7vh; */
  height: 50px;
  background-color: #F4F8FC;
  color: #F4F8FC;
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
    // box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
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
  margin-top: 40px;
}
.name-text{
    width: 100%;
    height: 44px;
    /* border-color:#E1DADA ;
    border-width: 0.1px 1px 1px 0.1px;
    border-radius: 3px; */
    display: block;
    background-color: #F4F8FC;
    padding-left: 10px;
    margin-top: 8px;
    margin-bottom: 18px ;
    /* background-color: #F4F8FC; */
}

.inline{
    display: inline;

}

.small-text{
    font-size: 13px;
    margin-right: 18px;
    opacity: 0.4;
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
    // border-style: solid;
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

@import url(https://fonts.googleapis.com/css?family=Roboto:500);

.top-bar{
  /* margin-top: 7vh; */
  height: 50px;
  background-color: #F4F8FC;
  color: #F4F8FC;
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
        border-color:#2762BC;
        border-radius: 4px;
        border-style: solid;
        /* Add shadows to create the "card" effect */
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
    }
}
</style>
