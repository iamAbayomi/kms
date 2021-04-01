<template>
  <div class="nav-container">
    <nav id="myTopnav" class="top-navbar">
      <nuxt-link to="/">
        <img class="header-logo" src="~/assets/images/spiinge-web-logo.svg">
      </nuxt-link>
      <!-- <div class="nav-id">
          <nuxt-link to="/" class="header-link" exact-active-class="header-active">
            <p>
              Home
            </p>
          </nuxt-link>

          <nuxt-link to="/pricing" class="header-link" exact-active-class="header-active">
            <p>
              Pricing
            </p>
          </nuxt-link>

          <a href="/blog" class="header-link" exact-active-class="header-active">
            <p>
              Blog
            </p>
          </a>
        </div> -->
    </nav>
  </div>
</template>
<style scoped>
.nav-container{
  width:100%;
  max-width: 1270px;
  margin: 20px auto 0px auto;
}
.theme--light.v-app-bar.v-toolbar.v-sheet {
  background-color: #ffffff;
}
.top-navbar{
  display: flex;
  margin: 0px 10px 0px 20px;
}

.header-logo{
    width: 100px;
    margin: 10px 20px 20px 0px;
}

.nav-id{
    display: flex;
    margin: 20px 0px 0px 50px;
}
.header-bar{
  /* background-color: white; */
  width:100%;
  max-width: 1260px;
  margin: 20px auto 0px auto;
  background-color: #ffffff;
}

.header-link {
  margin: 0px 50px 0px 0px;
  text-decoration: none;
  font-size: 15px;
  color: #103C7E;
  opacity: 0.65;
}

.header-active{
    opacity: 1;
    font-weight: 500;
    color:#2762BC;
}

a:active{
  opacity: 1;
    font-weight: 500;
    color:#2762BC;
}

</style>
