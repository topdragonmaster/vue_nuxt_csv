export const state = () => ({
  dataMap: {}
})

// contains your actions
export const actions = {
  addCSV(context, fileInfo){
    context.commit('addCSV', fileInfo)
  },

  deleteCSV(context, filePath){
    context.commit('deleteCSV', filePath)
  },

}
// contains your mutations
export const mutations = {
  addCSV: (state, fileInfo) => {
    state.dataMap[fileInfo.path] = fileInfo.data
  },

  deleteCSV: (state, fileInfo) => {
    delete state.dataMap[fileInfo.path]
    console.log(state)
  },
}
// your root getters
export const getters = {
  getCSV(state){ return state.dataMap}
}