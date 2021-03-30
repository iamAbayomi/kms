<template>
  <div class="container">
    <v-main>
      <div class="board">
        <QuillEditor
          page-name="value-prop"
          placeholder-title="Value Proposition"
          placeholder-body="What are we offering this customer"
        />
      </div>
    </v-main>
    <!-- <Modals id="modal" /> -->
  </div>
</template>

<script>
/* eslint-disable no-console */

export default {
  layout: 'dashboard',
  head () {
    return {
      title: 'Marketing - Spiinge'
    }
  }

}
</script>

<style scoped>
body{
  background: #FFFFFF;
}
.container{
  display: block;
  background: #FFFFFF;
  width: 100%;
}

.board{
  /* margin-top: 40px; */
}

.add-form{
    /* max-width: 630px; */
    height: 100%;
    margin: 20px auto 10px auto;
    background-color: white;
    padding: 30px 30px 30px 30px;
    /* Add shadows to create the "card" effect */
}

.row-container{
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: space-between;
    margin: 10px 20px 20px 0px;
}

.status-message{
  font-size: 14px;
  color: darkgrey;
  margin: 0px 10px;
}

.text-button{
  font-size: 14px;
  color: blue;

}

.section-description{
    text-align: center;
    font-size: 18px;
    padding-top: 0px;
    font-weight: 550;
    color: rgba(0, 0, 0, 0.514);
}

.success-notify{
    font-size: 14px;
    max-width: 310px;
    margin: 10px auto 5px auto;
    text-align: center;
    font-weight: 600;
    color: rgb(92, 216, 92);
    line-height: 20px;
}
.name-text{
    width: 100%;
    height: 30px;
    margin-top: 10px;
    display: block;
    font-size: 20px;
    padding-left: 10px;
    margin-bottom: 20px ;
    border-color:#c7d3e6;
    border-radius: 0px;
    border-style: solid;
    border-width: 0px;
    /* background-color: #F4F8FC; */
}
/* Large text fields styles */
.large-text-field {
  width: 100%;
  height: 800px;
  padding: 10px 12px;
  margin: 10px 0px 10px 0px;
  border-color:#c7d3e6;
  border-radius: 0px;
  border-style: solid;
  border-width: 0px;
}

/* Text Fields Style*/
input:focus, textarea:focus, select:focus, button:focus{
    outline: #2762BC;
    border: 0px;
    box-shadow: 0 0 0px #719ECE;
}
.small-text{
    font-size: 13px;
    margin-right: 18px;
    opacity: 0.4;
    text-align: center;
}

.blue-button{
    width: 100%;
    height: 30px;
    background-color:#2762BC;
    color: white;
    font-size: 18px;
    margin-top: 20px;

    border-color:#2762BC;
    border-radius: 4px;
    border-style: solid;

    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
}

.float-button{
    position: fixed;
    right: 40px;
    bottom:40px;
}

</style>
