<template>
  <div class="fixed top-0 h-16 w-full bg-white border-current border-b p-2">
    <div class="flex flex-row justify-between">
      <div class="flex flex-row">
        <img class="mr-3" :src="logoIcon" />
        <p class="flex flex-col font-bold"> 
          Tables & Stuff
          <span class="font-medium text-xs">Import, Investigate, Repeat.</span>
        </p>
      </div>      
      <img class="mr-4 mt-3 w-8 h-8" src="../assets/user.png" />
    </div>
  </div>
</template>

<script>
  import logoIcon from '../assets/logo.png'

export default {
  data: function () {
            return {
                logoIcon: logoIcon
            }
        }
}
</script>
<style scoped>
</style>
