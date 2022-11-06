<template>
    <div class="m-5" >
        <div class="row justify-content-center d-flex">
            
        <div class="col-md-4" style="background: rgb(2,0,36);
background: linear-gradient(31deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);;border-radius: 10px;color:white">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="m-3" >
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        
        
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your password:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          placeholder="Enter password"
          type="password"
          required
        ></b-form-input>
      </b-form-group>

      

      

      <b-button type="submit" variant="primary" class="m-2">Log in</b-button>
      <b-button type="reset" variant="danger" class="m-2">Reset</b-button>
    </b-form>
    <p>you're a new user? create your account <a href="/register">here</a></p>
</div>
</div>

    <!--b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card-->
  </div>
</template>
<script>
export default {
    Name:'signIn',
    data(){ return{
        form: {
          email: '',
          password: '',
          
        },
        
        show: true
      


    }},
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.password = ''
        
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })}
    }
}
</script>