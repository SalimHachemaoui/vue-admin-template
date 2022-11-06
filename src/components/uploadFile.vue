<template class="fileupload">
    <div>
      <hr  style="border-top:6px solid red;max-width: 50%;margin:auto; margin-top: 10px;margin-bottom: 10px"/>
                <h5> You can test the service just bellow</h5>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show"  enctype="multipart/form-data">
        <b-form-file
        accept=".mp4, .MOV, .AVI, .3GP"
      v-model="form.file1"
      :state="Boolean(form.file1)"
      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."
    ></b-form-file>
    <div class="mt-3">Selected file: {{ form.file1 ? form.file1.name : '' }}</div>
    <b-button type="submit" variant="primary">Submit</b-button>
  </b-form>
  <!--p>{{this.response}}</p-->
  <video v-if="this.src" :src="this.src">

  </video>
    </div>
    
</template>
<script>
import axios from 'axios'
 export default {
    Name : "fileupload",
    data() {
      return {
        form: {
        file1: null},
        show: true,
        response: null,
        src:null,
        
      }
    },
    methods: {
      onSubmit(evt) {
        var reader = new FileReader()
        reader.readAsDataURL(this.form.file1)
        evt.preventDefault()
        let x = JSON.stringify(this.form)

        this.src=this.form.file1
        console.log(this.form.file1)
        axios.post("https://reqres.in/api/articles", x)
    .then(response => {this.response = response.data.id
    console.log(response)});
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.file1 = null
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }

</script>
<style>


</style>