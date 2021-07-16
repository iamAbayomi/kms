<template>
  <div>
    <!-- Body of the webpage -->
    <body>
      <!-- The main container for the whole website -->
      <div id="container">
        <!-- Begining div for above fold of the webpage -->
        <div class="above-fold">
          <!-- Begining of navbar -->
          <NavigationBar />
          <!--End of navbar-->
          <!-- Main Section -->

          <!-- Value Proposition -->
          <div class="value-prop">
            <!-- Value Proposition for text -->
            <div class="value-prop-text">
              <p class="main-text">
                Spiinge helps you manage products
              </p>
              <p class="main-description">
                With Spiinge you can create many products and track the product development stage.
              </p>
              <div class="home-button-container">
                <a href="/home">
                  <button class="hire-me">
                    Get Started
                  </button>
                </a>
              </div>
            </div>
            <!-- Value Proposition for image -->
            <div class="value-prop-image">
              <img class="illustration" src="~/assets/images/illustration.svg">
            </div>
            <!--End of value proposition-->
          </div>

        <!--End div for above fold of the webpage -->
        </div>
      </div>
    </body>
  </div>
</template>

<script>

export default {
  mounted () {
  }
}
</script>

<style scoped>
html {
    font-size: 100%;
    margin: 0px;
    padding: 0px;
    overflow-y: hidden;
  }

body{
    background-color: white;
    height: 100%;
    overflow-y: hidden;
    margin: 0px;
    padding: 0px;
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #ffffff;
}

.top-navbar{
  display: flex;
}

.header-logo{
    width: 120px;
    margin: 20px 20px 20px 30px;
}
/* .nav-id{
  display: none;
    display: flex;
    margin: 30px 0px 0px 80px;
} */

.header-link {
  margin: 0px 50px 0px 0px;
  text-decoration: none;
  font-size: 20px;
  color: #357ee44f;
}

.active{
  color: #2762BC;
}

.above-fold{
    border-radius: 4px;
    /* border-style: solid;   */
    height: 100vh;
}

.value-prop{
    color: #1C6CE3;
    margin: auto;
    max-width: 280px;
    border-color:#2663beab;
    border-radius: 4px;
    margin-top: 20vh;
    /* border-style: solid;   */
}

.main-text {
    font-size: 38px;
    font-weight: 610;
    margin: 10px auto 10px auto;
    width: 100%;
    text-align: left;
    /* text-align: center; */
}

.main-description {
    font-size: 16px;
    width: 100%;
    margin: 30px auto 30px auto;
    /* text-align: center; */
    text-align: left;
    color: #032E6E;
    line-height: 30px;
}

.home-button-container{
    /* margin: auto; */
    width: 180px;
    border-color:#2762BC;
    border-radius: 4px;
    /* border-style: solid; */
}

.hire-me{
    width: 100%;
    height: 38px;
    background-color: #1C6CE3;
    color: white;
    font-size: 18px;
    margin: 10px auto 10px auto;
    border-color: #1C6CE3;
    border-radius: 4px;
    /* border-style: solid; */
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
}

.value-prop-image{
    display: none;
}

.work-section{
    /* display: none ; */
    margin: auto;

    background-color: #2762BC;
    color: #ffffff;
    padding: 20px 0px 40px 0px;
}

.work-item{
    max-width: 280px;
    margin: auto;
}

.work-image{
    /* display: none; */
    margin: 0px auto 40px auto;
    padding-top: 80px;
    width: 280px;
}

.work-text{
    /* max-width: 280px; */
    margin: 0px auto 40px auto;
}

.large-button-container{
    margin: auto;
    width: 200px;
    border-color:#2762BC;
    border-radius: 4px;
    /* border-style: solid; */
}

.white-button{
    width: 100%;
    height: 38px;
    color:#2762BC;
    background-color: white;
    font-size: 18px;
    font-weight: 550;
    margin: 10px auto 10px auto;
    padding: 10px 0px 30px 0px;
    border-color:#2762BC;
    border-radius: 4px;
    border-style: solid;
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(32, 29, 29, 0.2);
    transition: 0.3s;
}

.extension{
    width: 100%;

}

.work-title{
    font-size: 42px;
    text-align: center;
    font-weight: 600;
}

.features-section{
    background-color: #F4F8FC;
    padding: 20px 0px 60px;
}

.features-grid{
    margin: auto;
    max-width: 300px;
}

.section-description{
    color: #2762BC;
    font-size: 28px;
    font-weight: 600;
    margin: 30px auto 40px auto;
    text-align: center;
    max-width: 280px;
}

.features-card{
    height: 200px;
    margin: 10px 5px 15px 5px;
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    padding: 20px;
    background-color: white;
}

.card-text{
    font-size: 24px;
    font-weight: 600;
    color: #2762BC;
}

.card-description{
    padding-top: 20px;
    font-size: 16px;
    max-width: 380px;
    color: #032E6E;
}

.footer{
    margin-top: 80px;
    /* justify-content: space-between;    */
}

/*
.footer p{
    color: #2762BC;
} */

.first-grid{
    margin: 20px 50px;
}

.footer-subheading{
    opacity: 0.8;
    color: #032E6E;
}

.footer-heading{
    color: rgb(5, 39, 90);
    font-weight: 600;
}

.second-grid{
    margin: 20px 50px;
}

.second-grid p{
    font-size: 14px;
    padding-top: 40px;
    color: #032E6E;
    opacity: 0.9;
}

/* Screen Sizes greater than 500px */

@media screen and (min-width: 499px){
    .value-prop {
        margin: 15vh auto 10px auto;
        max-width: 380px;
    }

    .main-text{
        font-size: 52px;
        width: 100%;
    }

    .main-description {
        font-size: 16px;
        max-width: 100%;
        margin: 30px auto 30px auto;
        /* text-align: center; */
        color: #032E6E;
    }

    .work-item{
        width: 480px;
        margin: auto;
    }

    .work-title{
        font-size: 32px;
        text-align: center;
        font-weight: 600;
    }

    .features-grid{
        margin: auto;
        max-width: 480px;

    }
    .card-description{
        padding-top: 20px;
        font-size: 18px;
        max-width: 380px;
        color: #032E6E;
        font-kerning: 20px;
        line-height: 30px;
    }

    .features-card{
        height: 200px;
        margin: 10px 5px 40px 5px;

    }

}

/* Screen Sizes greater than 699px */

@media screen and (min-width: 699px){

    .value-prop{
        margin: 15vh auto 10px auto;
        max-width: 600px;
    }

    .main-text {
        /* text-align: center; */
        text-align: left;
    }

    .main-description {
        /* text-align: center; */
        text-align: left;
    }

    .home-button-container{
        /* margin: 20px auto 10px auto; */
    }

    .section-description{
        color: #2762BC;
        font-size: 28px;
        font-weight: 600;
        margin: 30px auto 40px auto;
        text-align: center;
        max-width: 400px;
    }

    .features-grid {
        margin: auto;
        max-width: 680px;
        display: flex;
    }

    .features-card{
        height: 300px;

        margin: 10px 15px 15px 5px;
        /* Add shadows to create the "card" effect */
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        padding: 20px;
        background-color: white;
    }

}

/* Screen Sizes greater than 1000px */

@media screen and (min-width: 999px){

.container{
    width:100%;
    max-width: 1200px;
}
    .above-fold{
        border-radius: 4px;
        /* border-style: solid;   */
        height: auto;
    }

    .value-prop{
        margin: 13vh auto 10px auto;
        width: 100%;
        max-width: 1200px;
        /* height: 90vh; */
        display: flex;
        justify-content: space-between;
        border-color: #032E6E;
        border-radius: 4px;
        /* border-style: solid; */
    }

    .value-prop-text {
        margin: 0px 10px 10px 10px;
        border-color: #032E6E;
        border-radius: 4px;
        width: 450px;
        /* border-style: solid; */
    }

    .main-text{
        text-align: left;
        margin: 0px 5px 20px 5px;
    }

    .main-description{
        text-align: left;
        margin: 0px 5px 10px 5px;
    }

    .home-button-container{
        margin: 20px 5px 10px 5px;
        }

    .value-prop-image{
        display: block;
        width: 600px;
        margin: -30px 5px 10px 35px;

    }

    .illustration{
        /* height: 100%; */
        /* margin-top: -60px; */
        width: 100%;
    }

    .work-item{
        display: flex;
        width: 100%;
        max-width: 1260px;
        flex-direction: row-reverse;
        margin: auto;
        justify-content: space-between;
        border-color: wheat;
        border-radius: 4px;
        /* border-style: solid; */
    }

    .work-text{
        /* max-width: 280px; */
        margin: 5% 10px auto 190px;
        max-width: 350px;
        border-color: wheat;
        border-radius: 4px;
        /* border-style: solid; */
    }

    .work-title{
        font-size: 52px;
        text-align: left;
        font-weight: 600;
    }

    .large-button-container{
        margin: 40px 10px auto 0px;
        width: 200px;
        border-color:#2762BC;
        border-radius: 4px;
        /* border-style: solid; */
    }
    .work-image{
        /* display: none; */
        margin: 0px 190px 40px 0px;
        padding-top: 40px;
        width: 310px;
    }
    .features-grid{
        margin: auto;
        max-width: 1000px;
    }

    .section-description{
        color: #2762BC;
        font-size: 38px;
        font-weight: 600;
        margin: 30px auto 40px auto;
        text-align: center;
        max-width: 550px;
    }

    .features-card{
        height: 250px;
        margin: 10px 20px 40px 5px;

    }

    .footer{
        margin-top: 10px;
        display: flex;
        justify-content: space-between;

    }

    .first-grid{
        margin: 10px 50px;
    }

    .second-grid{
        margin: 10px 50px;
    }

}
</style>
