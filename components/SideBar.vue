<template>
  <div class="flex flex-col bg-gray-100 h-full border-current border-r">
    <div class="w-full h-14 flex justify-center items-center border-current border-b">
      <label class="button">
        <input @change="onFileChange" class="hidden" type="file" accept=".csv"/>
          Import CSV 
      </label>
    </div>

    <div class="w-full flex flex-col justify-center items-center p-3">
      <file-item v-for="(item, index) in this.fileList" :onClick="handleClick" :handleDelete="handleDelete" :key="index" :path="item.path">
        {{item.name}}
      </file-item>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions} from "vuex";

export default{
  props:{
    onCurrentChange:{
      type: Function
    },
  },

  computed: {
    ...mapState(["dataMap"]),
  },

  data(){
    return{
      fileList: [],
      selectedFile: {},
    }
  },

  methods: {
    ...mapActions(["addCSV"]),
    ...mapActions(["deleteCSV"]),

    handleClick(path){
      this.onCurrentChange(path)
    },

    handleDelete(path){
      this.deleteCSV({path: path})
      this.fileList = this.fileList.filter(item => item.path !== path)
      if(this.fileList.length !== 0){
        this.onCurrentChange(this.fileList[0].path)
      } else {
        this.onCurrentChange('')
      }
    },

    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.fileList.unshift({name: files[0].name, path: e.target.value})
      this.createInput(files[0],  e.target.value);
    },

    createInput(file, path) {
      let promise = new Promise((resolve, reject) => {
        var reader = new FileReader();
        var vm = this;
        reader.onload = e => {
          resolve((vm.fileinput = reader.result));
        };
        reader.readAsText(file);
      });

      promise.then(
        result => {
          /* handle a successful result */
          let lines = result.split('\n')
          lines = lines.slice(0, -1)
          const header = lines[0].split(',')
          const output = lines.slice(1).map(line => {
            const fields = line.split(',')     
            return Object.fromEntries(header.map((h, i) => [h, fields[i]]))
          })

          this.onCurrentChange(path)
          this.addCSV({path: path, data: output})
        },
        error => {
          /* handle an error */ 
          console.log(error);
        }
      );
    }
  }
} 
</script>
<style scoped>
.button{
  background-color: #2196F3;
  color: white; 
  padding: 2px 100px;
  margin: 0px 10px;
  display: inline-block;
  cursor: pointer;
}
.button:hover {background: #0b7dda;}

</style>
