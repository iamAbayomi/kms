/* eslint-disable no-console */
/* eslint-disable vue/no-use-v-if-with-v-for */
/* eslint-disable no-undef */

function myFunction () {
  const x = document.getElementById('top-bar')
  console.log('I am here')
  if (x.className === 'nav-id') {
    x.className += ' responsive'
  } else {
    x.className = 'nav-id'
  }
}
