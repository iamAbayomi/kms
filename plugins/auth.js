/* eslint-disable no-console */
/* eslint-disable require-await */
export default async function ({ app }) {
  console.log('auth executed')
  if (process.client) {
    console.log('This is the user', app.$auth.user)
    try {
      if (!app.$auth) {
        console.log(app.$auth)
        console.log('it worked')
        return
      }

      const auth = app.$auth

      const authStrategy = auth.strategy.name
      if (authStrategy === 'facebook' || authStrategy === 'google') {
        const token = auth.getToken(authStrategy).substr(7)
        app.$auth.user.provider = 'google'
        // const authStrategyConverted = authStrategy === 'facebook' ? 'fb' : 'google'

        // const url = `/apis/user/googletoken/${token}`
        const url = '/apis/user/googlesignin'
        console.log(token)
        try {
          const { data, token } = await app.$axios.$post(url, app.$auth.user)
          auth.setToken('local', 'Bearer ' + token)
          console.log(data)
          console.log(token)
          console.log('I am here')
          setTimeout(async () => {
            auth.setStrategy('local')
            setTimeout(async () => {
              await auth.fetchUser()
            })
          })
        } catch (e) {
          console.log(e)
        }
      }
    } catch (e) {
      console.log(e)
    }
  }
}
