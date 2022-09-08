<template>
  <div class="flex-1 bg-white h-full flex flex-col">
    <div class="w-full h-14 flex justify-end items-center border-current border-b">
       <input type="text" v-model="text" id="input" placeholder="Search..." class="block p-2 w-80 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 mr-2">
    </div>

    <div class="w-full flex flex-1 overflow-scroll flex-col items-center p-5">
      <p class="text-2xl" v-if="rows.length==0"> Please test using the CSV files in assets folder </p>
      <vue-good-table
      :columns="columns"
      :rows="rows"
      :search-options="{
        enabled: true,
        externalQuery: text
      }"
      />
    </div>
  </div>
</template>

<script>
  import 'vue-good-table/dist/vue-good-table.css'
  import { VueGoodTable } from 'vue-good-table';
  import { mapState } from 'vuex';
  
export default {
  props: {
    filePath: String,
  },

  watch: {
    filePath: 'handleData'
  },
  
  computed: {
    ...mapState(["dataMap"]),
  },

  methods:{
    handleData(){

      if(this.filePath === ''){
        this.columns = []
        this.rows = []
        return
      }

      let objList = []
      Object.keys(this.dataMap[this.filePath][0]).forEach(item => {
        objList.push({label: String(item), field: String(item)}) 
      })
      
      this.columns = [...objList]
      this.rows = this.dataMap[this.filePath]
    },
  },

  data: function () {
            return {         
              columns: [],
              rows: [],
              text: '',
            }
        },
  components: {
    VueGoodTable
  }
}
</script>
<style scoped>

</style>
