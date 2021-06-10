import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      project_title: '',
      project_text: '',
      saved_status: ''
    },
    mutations: {
      SET_SAVE_STATUS (state, newSaveStatus) {
        state.saveStatus = newSaveStatus
      },
      UPDATE_CONTENT (state, newContent) {
        state.content = newContent
      }
    }

  })
}

export default createStore
