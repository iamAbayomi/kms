<template>
  <div class="main-section">
    <!-- All user products -->
    <div class="all-products">
      <div
        v-for="item in product_group"
        :key="item.product_id"
        class="single-product"
      >
        <nuxt-link
          class="text-link"
          :to="'/productstage/' + item.product_id.toString()"
        >
          <div class="product-details">
            <p>
              {{ item.product_name }}
            </p>
            <p>
              {{
                new Date(item.updatedAt)
                  .toString('YYYY-MM-dd')
              }}
            </p>
          </div>
        </nuxt-link>
        <div class="product-options hide">
          <v-tooltip bottom>
            <template #activator="{ on, attrs }">
              <v-btn icon>
                <v-icon
                  v-bind="attrs"
                  v-on="on"
                  @click="deleteSingleProduct"
                >
                  mdi-trash-can
                </v-icon>
              </v-btn>
            </template>
            <span>Delete</span>
          </v-tooltip>
        </div>
        <div class="horizontal-line" />
      </div>

      <div />
      <!-- End of user products declaration -->
      <!-- Button to add new Notes -->
      <div class="add-newbutton">
        <img class="button-logo" src="~/assets/vectors/blue_plus.svg" @click="createProduct">
      </div>
    <!-- End of button declaration -->
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */
export default {
  layout: 'pagewithtoolbar',
  middleware: 'auth',
  data () {
    return {
      product_group: [

      ],
      product_group1: [
        {
          product_id: 1,
          product_name: 'Spiinge',
          product_date: '22-08-21'
        },
        {
          product_id: 2,
          product_name: 'Padi Save',
          product_date: '22-08-21'
        },
        {
          product_id: 3,
          product_name: 'Spiinge Web App',
          product_date: '22-08-21'
        },
        {
          product_id: 4,
          product_name: 'Spiinge',
          product_date: '22-08-21'
        }
      ]
    }
  },
  mounted () {
    this.getAllProducts()
  },
  methods: {
    createProduct () {
      this.$router.push('/newproduct')
    },
    getAllProducts () {
      this.$axios.get('/apis/product/' + this.$auth.user.id)
        .then((response) => {
          this.product_group = response.data
          // this.textId = response.data.text_id
          this.savedStatus = response.status
          console.log(response)
        }).catch((err) => {
          console.log(err)
        })
    },
    deleteSingleProduct () {
      this.$axios.delete('/apis/product/' + this.product_group.product_id)
        .then((response) => {
          this.getNotesId()
          console.log(response)
          this.getText()
        }).catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
.all-products{
  margin: 20px 40px 20px 40px;
}

.single-product{
   margin: 20px 40px 0px 40px;
}

.product-options{
    float: right;
    /* margin: 20px 0px 20px 0px; */
    /* position: relative;
    bottom: 20px;
    right: 30px; */
}

.v-btn > .v-btn__content .v-icon {
    color: #032E6E;

}

.horizontal-line{
  clear: both;
  margin: 20px 0px;
  border: rgba(0, 0, 0, 0.145);
  border-style: solid;
  border-width: 0px 0px 1px 0px;
}

</style>
