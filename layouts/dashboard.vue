<template>
  <v-app id="inspire">
    <!-- Side Navigation Bar -->
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap" rel="stylesheet">
      <!-- Header Logo -->
      <nuxt-link to="/">
        <img class="header-logo" src="~/assets/images/spiinge-web-logo.svg">
      </nuxt-link>
      <!-- Begining of menu -->
      <div class="menu">
        <!-- Group of Stage Title -->
        <div class="link-group">
          <nuxt-link
            v-for="item in stage_group"
            :key="item.stage_id"
            class="menu-item"
            :to="'/productstage/' + product_id + '/' +item.stage_id.toString()"
            exact-active-class="menu-active"
            @dblclick.native="removeMenuItem(item.stage_id)"
          >
            <p
              :id="'menu_item_title ' + item.stage_id"
              class="menu-text"
            >
              {{ item.stage_title }}
            </p>
            <input
              :id="'edit-input ' + item.stage_id"
              v-model="edit_field"
              class="name-text hide"
              placeholder="Edit stage title"
              @blur="removeEditField(item.stage_id)"
              @keyup.enter="editStage(item.stage_id, item)"
            >
          </nuxt-link>
        </div>
        <!-- End of Stage Title -->
        <input
          id="add-input"
          v-model="input_field"
          class="name-text hide"
          placeholder="Add stage title"
          @keyup.enter="createStage"
        >
        <!-- End of link -->
        <!-- Button to add new Stage -->
        <div
          @click="showInputField"
        >
          <img class="button-logo" src="~/assets/vectors/blue_plus.svg">
        </div>
        <!-- End of menu -->
      </div>
    </v-navigation-drawer>
    <!-- App Bar -->
    <v-app-bar
      class="header-bar"
      dense
      app
    >
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
      />

      <v-toolbar-title
        class="toolbar-title"
      >
        {{ routePath }}
      </v-toolbar-title>
      <v-spacer />

      <v-tooltip bottom>
        <template #activator="{ on, attrs }">
          <v-btn icon>
            <v-icon
              v-bind="attrs"
              v-on="on"
              @click="goHome"
            >
              mdi-home
            </v-icon>
          </v-btn>
        </template>
        <span>Home</span>
      </v-tooltip>

      <!-- <v-tooltip bottom>
        <template #activator="{ on, attrs }">
          <v-btn icon>
            <v-icon
              v-bind="attrs"
              v-on="on"
              @click="deleteStage"
            >
              mdi-trash-can
            </v-icon>
          </v-btn>
        </template>
        <span>Delete</span>
      </v-tooltip> -->

      <v-tooltip bottom>
        <template #activator="{ on, attrs }">
          <v-btn icon>
            <v-icon
              v-bind="attrs"
              v-on="on"
              @click="logOut"
            >
              mdi-power
            </v-icon>
          </v-btn>
        </template>
        <span>Sign Out</span>
      </v-tooltip>
    </v-app-bar>

    <nuxt />
  </v-app>
</template>

<script>
/* eslint-disable no-console */
/* eslint-disable camelcase */
export default {
  middleware: 'auth',
  data () {
    return {
      drawer: null,
      routePath: 'Product Stage',
      stage_group: [
      ],
      stage_group_1: [
        {
          stage_id: 1,
          stage_title: 'Hello',
          stage_content: 'This is a content'
        }
      ],
      product_id: '',
      input_field: '',
      edit_field: '',
      tempData: []
    }
  },
  head () {
    return {
      title: 'Spiinge | Product Stage'
    }
  },
  watch: {
    $route (to, from) {
      this.getRoutePath()
    }
  },
  created () {
    this.getStageId()
  },
  mounted () {
    this.getRoutePath()
  },
  methods: {
    getStageId () {
      // eslint-disable-next-line prefer-const
      let path = this.$route.path
      path = path.substring(1)
      // eslint-disable-next-line no-unused-vars
      const [pageName, stageId] = path.split('/')
      this.product_id = stageId
      console.log('this is the stage_id ' + this.product_id +
       ' this is the pagename  ' + pageName)
      // Get The user stages
      this.getText('0', 'firstpage')
    },
    getRoutePath () {
      console.log('stage group ' + this.stage_group)
    },
    logOut () {
      this.$auth.logout()
      this.$router.push('/')
    },
    createStage () {
      this.createText()
      this.removeInputField()
    },
    // Method to create text
    createText () {
      // send the request to apis to create the text
      this.$axios.post('/apis/stage/', {
        stage_title: this.input_field,
        stage_contents: '',
        stage_delta: '',
        product_id: this.product_id,
        user_id: this.$auth.user.id
      })
        .then((response) => {
          console.log(response)
          this.savedStatus = response.status
          this.getText('0', 'firstpage')
          // console.log(this.textId)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    goHome () {
      this.$router.push('/home')
    },
    getText (stage_id, direction) {
      this.$axios.get('/apis/stage/' + this.$auth.user.id + '/' + this.product_id)
        .then((response) => {
          this.stage_group = response.data
          if (this.stage_group.length > 0 && direction === 'firstpage') {
            this.goToFirstStage(this.stage_group)
          } else {
            this.goToCurrentStage(stage_id)
          }
          this.savedStatus = response.status

          console.log(response)
        }).catch((err) => {
          console.log(err)
        })
    },
    deleteStage () {
      this.$axios.delete('/apis/stage/' + this.stage_id)
        .then((response) => {
          this.getStageId()
          console.log(response)
          this.getText('0', 'firststage')
        }).catch((err) => {
          console.log(err)
        })
    },
    goToFirstStage (stage_group) {
      this.$router.push(`/productstage/${this.product_id}/${stage_group[0].stage_id}`)
    },
    goToCurrentStage (stage_id) {
      this.$router.push(`/productstage/${this.product_id}/${stage_id}`)
    },
    showMenuItem (stage_id) {
      const element = document.getElementById('menu_item_title ' + stage_id)
      element.classList.remove('hide')
    },
    removeMenuItem (stage_id) {
      console.log('removeMenuItem')
      this.showEditField(stage_id)
      const element = document.getElementById('menu_item_title ' + stage_id)
      element.classList.add('hide')
    },
    showEditField (stage_id) {
      this.edit_field = ''
      const element = document.getElementById('edit-input ' + stage_id)
      element.classList.remove('hide')
      this.showMenuItem(stage_id)
    },
    removeEditField (stage_id) {
      const element = document.getElementById('edit-input ' + stage_id)
      element.classList.add('hide')
      this.showMenuItem(stage_id)
    },
    editStage (stage_id, item) {
      console.log(this.stage_group[0].stage_title)
      // this.stage_group[0].stage_title = this.edit_field
      this.updateText(stage_id)
      this.removeEditField(stage_id)
    },
    showInputField () {
      const element = document.getElementById('add-input')
      element.classList.remove('hide')
    },
    removeInputField () {
      const element = document.getElementById('add-input')
      element.classList.add('hide')
    },
    showMenuLinkId (product_id) {
      console.log('Hello I am here ' + product_id)
    },
    updateText (stage_id) {
      console.log(stage_id)
      this.$axios.put('/apis/stage/' + stage_id, {
        stage_title: this.edit_field
      })
        .then((response) => {
          console.log(response)
          // this.getText()
          this.getText(stage_id, 'currentStage')
          this.savedStatus = response.status
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

}
</script>

<style scoped>
html {
    font-size: 100%;
    width:100%;
    height: 100%;
  }

body{
    /* background-color: #F4F8FC; */
    height: 100%;
    width:100%;
    margin: 0px;
    padding: 0px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}

.container{
    display: flex;
    flex-direction: row;
    background-color: #ffffff;
    /* justify-content: space-between; */
    /* border-color: orangered;
    border-right-width: 0.1px;
    border-radius: 4px;
    border-style: solid; */
}
.theme--light.v-app-bar.v-toolbar.v-sheet {
    background-color: #ffffff;
}
.header-bar{
  /* background-color: white; */
  background-color: #ffffff;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

}

.v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined) {
    /* box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); */
     box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
}

/* Position and style the close button (top right corner) */
.closebtn {
    text-decoration: none;
    position: absolute;
    top: 0%;
    right: 10%;
    font-size: 36px;
    margin-left: 50px;
    display: none;
    color: white;
    /* border-color: orangered;
    border-right-width: 0.1px;
    border-radius: 4px;
    border-style: solid; */
  }

.header-logo{
    width: 100px;
    margin: 30px 20px 20px 20px;
    /* border-color: orangered;
    border-right-width: 0.1px;
    border-radius: 4px;
    border-style: solid; */
}

.overlay-sidebar{
   width: 250px;
    max-width: 250px;
    height: 100vh;
    position: fixed;
    background-color: #ffffff;
    /* display: none; */
    /* background-color: orange; */
    /* border-color: rgba(26, 24, 24, 0.137);
    border-right-style: solid; */
    margin: 0px 0px 40px 0px;
    box-shadow: 8px 0px 6px -6px rgb(214, 208, 208);
    /* border-right-width: 0.1px;
    border-radius: 11px; */
}

.v-btn > .v-btn__content .v-icon {
    color: #1654B0;

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

.toolbar-title{
  font-family: Helvetica;
}

.theme--light.v-sheet {
    background-color: #FFFFFF;
    border-color: #FFFFFF;
    color: #032E6E;
}

.theme--light.v-application {
    background: #FFFFFF;
    color: #09244C;
}
.side-navbar{
    width: 250px;
    max-width: 250px;
    height: 100vh;
    position: fixed;
    display: none;
    background-color: #ffffff;
    /* background-color: black; */
    /* border-color: rgba(26, 24, 24, 0.137);
    border-right-style: solid; */
    margin: 0px 0px 40px 0px;
    /* border-right-width: 0.1px;
    border-radius: 11px; */
}

.menu{
    margin: 40px 10px 40px 40px;
    /* border-right-width: 0.1px;
    border-radius: 1px;
    border-style: solid; */
}

.menu-item{
    text-decoration: none;
    margin: 0px 10px 30px 0px;
    font-weight: 500;
    display: flex;
    color:#103C7E;
}

.menu-active{
    background-color: #E6EFFC;
    border-width: 0.1px;
    margin: 0px 30px 30px -10px;
    border-radius: 4px;
    color: #1C6CE3;
    border-style: solid;
    border-color: #E6EFFC;
    padding: 15px 5px 0px 15px;
}

.menu-icon{
    margin-right: 20px;
}

.topbar{
  display: none;
}

.icon{
  display: none;
}

.button-logo{
    height: 35px;
    position: fixed;
    bottom: 30px;
    right: 30px;
}

.main-board{
    margin-left: 250px;
    width: 100%;
    height:  100vh;
    background-color: #F4F8FC;
}

.main-section{
    margin-top: 5vh ;
    /* margin-left: 350px; */
}

.small-text{
    font-size: 13px;
    margin-right: 18px;
    opacity: 0.4;
}

.blue-text{
    color: #032E6E;
    font-weight: 500;
}

.blue-button{
    width: 180px;
    height: 34px;
    background-color:#2762BC;
    color: white;
    font-size: 18px;
    margin: 1px 0px 20px;
    border-color:#2762BC;
    border-radius: 4px;
    border-style: solid;
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
}

.heading{
    font-size: 38px;
    color: rgb(8, 44, 99);
    padding-top: 40px;
}

.sub-heading{
    font-size: 16px ;
    color: grey;
    max-width: 450px;
    margin-top: -20px;
}

.hide{
    display: none;
}

</style>
