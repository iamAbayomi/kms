<template>
  <v-app id="inspire">
    <!-- Side Navigation Bar -->
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <!-- Header Logo -->
      <nuxt-link to="/">
        <img class="header-logo" src="~/assets/images/spiinge-web-logo.svg">
      </nuxt-link>
      <!-- Begining of menu -->
      <div class="menu">
        <!-- Group of Notes Title -->
        <div class="link-group">
          <nuxt-link
            v-for="item in notes_group"
            :key="item.notes_id"
            class="menu-item"
            :to="item.notes_title.toLowerCase()"
            exact-active-class="menu-active"
          >
            <p
              id="menu_item_title"
              class="menu-text"
              @click="removeMenuItem"
            >
              {{ item.notes_title }}
            </p>
            <input
              id="edit-input"
              v-model="edit_field"
              class="name-text hide"
              placeholder="Edit notes title"
              @keyup.enter="editNotes"
            >
          </nuxt-link>
        </div>
        <!-- End of Notes Title -->
        <input
          id="add-input"
          v-model="input_field"
          class="name-text hide"
          placeholder="Add notes title"
          @keyup.enter="createNotes"
        >
        <!-- End of link -->
        <!-- Button to add new Notes -->
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
      <v-app-bar-nav-icon @click="drawer = !drawer" />

      <v-toolbar-title
        class="toolbar-title"
      >
        {{ routePath }}
      </v-toolbar-title>
      <v-spacer />

      <v-tooltip bottom>
        <template #activator="{ on, attrs }">
          <nuxt-link
            class="make-link"
            to="/onboarding/product"
          >
            <v-btn icon>
              <v-icon
                v-bind="attrs"
                v-on="on"
              >
                mdi-circle-slice-1
              </v-icon>
            </v-btn>
          </nuxt-link>
        </template>
        <span>Onboarding</span>
      </v-tooltip>
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
export default {
  data () {
    return {
      drawer: null,
      routePath: '',
      notes_group: [
      ],
      notes_group_1: [
        {
          notes_id: 1,
          notes_title: 'Hello',
          notes_content: 'This is a content'
        }
      ],
      input_field: '',
      edit_field: '',
      tempData: []
    }
  },
  // eslint-disable-next-line require-await
  async fetch () {
    // this.notes_group = await fetch(
    //   'http://localhost:3000/apis/notes/1'
    // ).then(res => res.data)
    // this.$axios.get('/apis/notes/' + 1)
    //   .then((response) => {
    //     this.notes_group = response.data
    //     // this.textId = response.data.text_id
    //     this.savedStatus = response.status
    //     console.log(response)
    //   }).catch((err) => {
    //     console.log(err)
    //   })
  },
  watch: {
    $route (to, from) {
      this.getRoutePath()
    }
  },
  created () {
    this.getText()
  },
  mounted () {
    this.getRoutePath()
  },
  methods: {
    getRoutePath () {
      console.log('notes group ' + this.notes_group)
      let path = this.$route.path
      path = path.substring(1)
      const newPath = path.charAt(0).toUpperCase() + path.slice(1)
      this.routePath = newPath
      // this.routePath = document.title
      // console.log(document.title)
    },
    logOut () {
      this.$auth.logout()
    },
    createNotes () {
      this.tempData = {
        notes_id: 2,
        notes_title: this.input_field,
        notes_content: this.input_field
      }
      // this.$set(this.categoriesCard, iterate, this.tempData)
      this.notes_group.push(this.tempData)
      this.removeInputField()
    },
    getText () {
      this.$axios.get('/apis/notes/' + 1)
        .then((response) => {
          this.notes_group = response.data
          // this.textId = response.data.text_id
          this.savedStatus = response.status
          console.log(response)
        }).catch((err) => {
          console.log(err)
        })
    },
    showMenuItem () {
      const element = document.getElementById('menu_item_title')
      element.classList.remove('hide')
    },
    removeMenuItem () {
      this.showEditField()
      const element = document.getElementById('menu_item_title')
      element.classList.add('hide')
    },
    showEditField () {
      const element = document.getElementById('edit-input')
      element.classList.remove('hide')
      this.showMenuItem()
    },
    removeEditField () {
      const element = document.getElementById('edit-input')
      element.classList.add('hide')
      this.showMenuItem()
    },
    editNotes () {
      console.log(this.notes_group[0].notes_title)
      this.notes_group[0].notes_title = this.edit_field
      this.removeEditField()
    },
    showInputField () {
      const element = document.getElementById('add-input')
      element.classList.remove('hide')
    },
    removeInputField () {
      const element = document.getElementById('add-input')
      element.classList.add('hide')
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
    color: #032E6E;

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
    height: 40px;
    position: fixed;
    bottom: 20px;
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
