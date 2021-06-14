<template>
  <div class="main-section">
    <!-- All user products -->
    <div class="all-products">
      <nuxt-link
        class="single-product text-link"
        to="/notes"
      >
        <p>
          Spiinge
        </p>
        <p>22-08-21</p>
        <div class="horizontal-line" />
      </nuxt-link>
      <nuxt-link
        class="single-product text-link"
        to="/notes"
      >
        <p>
          Spiinge Webapp
        </p>
        <p>22-08-21</p>
        <div class="horizontal-line" />
      </nuxt-link>
      <nuxt-link
        class="single-product text-link"
        to="/notes"
      >
        <p>
          Spiinge
        </p>
        <p>22-08-21</p>
        <div class="horizontal-line" />
      </nuxt-link>
      <nuxt-link
        class="single-product text-link"
        to="/notes"
      >
        <p>
          Fola
        </p>
        <p>22-08-21</p>
        <div class="horizontal-line" />
      </nuxt-link>
      <nuxt-link
        class="single-product text-link"
        to="/notes"
      >
        <p>
          Confactories
        </p>
        <p>22-08-21</p>
        <div class="horizontal-line" />
      </nuxt-link>
    </div>
    <!-- End of user products declaration -->
    <!-- Button to add new Notes -->
    <div class="add-newbutton">
      <img class="button-logo" src="~/assets/vectors/blue_plus.svg">
    </div>
    <!-- End of button declaration -->
  </div>
</template>

<script>
export default {
  layout: 'pagewithtoolbar'
}
</script>

<style >

.all-products{
  margin: 20px 40px 20px 40px;
}

.single-product{
   margin: 20px 40px 20px 40px;
}

.horizontal-line{
  margin: 20px 0px;
  border: rgba(0, 0, 0, 0.145);
  border-style: solid;
  border-width: 0px 0px 1px 0px;
}

</style>
