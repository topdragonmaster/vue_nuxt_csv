<template>
   <div @click="onClick(path)" class="w-full h-10 flex flex-row justify-between items-center fileItem cursor-pointer px-1">
    <div class="flex flex-row justify-between items-center">
      <img class="mr-2 h-5" src="../assets/file.png" />
      <p class="flex flex-col pt-1 font-bold pb-1"> 
        <slot></slot>
      </p>
    </div>      
      <img @click="handleDelete(path)"  :src="pictureHover" @mouseenter="hover = true" @mouseleave="hover = false" />
  </div>
</template>

<script>
import trashIcon from "../assets/trash.png"
import trashHoverIcon from "../assets/trashhover.png"

export default {
  props: {
    onClick: {
        type: Function
      },
    handleDelete: {
      type: Function,
    },
    path: String,
  },

  computed: {
    pictureHover () {
      if (this.hover == true) {
        return this.trashHoverIcon
      } else {
        return this.trashIcon
      }
    }
  },

  data(){
    return{
      hover: false,
      trashIcon: trashIcon,
      trashHoverIcon: trashHoverIcon,
    }
  }
}
</script>
<style scoped>
.fileItem:hover{
  background: rgb(191 219 254);
}

</style>
