<template>
  <div class="main-section">
    <!-- All user products -->
    <div class="all-products">
      <nuxt-link
        v-for="item in product_group"
        :key="item.product_id"
        class="product-item"
        to="/notes"
      >
        <p>
          Spiinge
        </p>
        <p>22-08-21</p>
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

</style>
