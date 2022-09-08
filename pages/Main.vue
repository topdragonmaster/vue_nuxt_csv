<template>
  <div class="w-full">
    <top-bar />
    <div class="mt-16 flex flex-row w-full body">
      <side-bar :onCurrentChange="setCurrentFile" />
      <context :filePath="currentFile"/>
    </div>
  </div> 
</template>

<script>

import TopBar from '../components/TopBar.vue'
import SideBar from '../components/SideBar.vue'
import Context from '../components/Context.vue'
export default {
  components: { SideBar, Context, TopBar },

  data(){
    return{
      currentFile: "",
    }
  },

  methods: {
    setCurrentFile(filePath) {
      this.currentFile = filePath
    }
  }
}
</script>
<style scoped>
.body {
  height: calc(100vh - 4rem);
}
</style>
