<template>
    <div class="card">
        <h3 class="card-header text-center">
            Register Area
        </h3>
        <div class="card-body">
            <form>
                <!-- <div class="form-row"> -->
                    <!-- name -->
                    <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
                      <label>First Name</label>
                      <input type="text" class="form-control" 
                        v-model.trim="name" 
                        @input="setName($event.target.value)" >
                      <div class="valid-feedback">
                            Your first name is valid!
                      </div>
                      <div v-if="$v.name.$dirty">
                        <div class="error text-danger mt-3" role="alert" v-if="!$v.name.required">
                          <small  v-if="!$v.name.required">Field is required</small>
                        </div>
                        <div class="error text-danger mt-3" role="alert" v-if="!$v.name.minLength">
                          <small  v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</small>
                        </div>
                      </div>
                    </div>
                    <!-- email -->
                    <div class="form-group" :class="{ 'form-group--error': $v.email.$error }">
                      <label>Email</label>
                      <input type="text" class="form-control" 
                        v-model.trim="email" 
                        @input="setEmail($event.target.value)" >
                      <div class="valid-feedback">
                            Your email is valid!
                      </div>
                      <div v-if="$v.email.$dirty">
                        <div class="error text-danger mt-3" role="alert" v-if="!$v.email.  required">
                        <small  v-if="!$v.email.required">Field is required</small>
                        </div>
                        <div class="error text-danger mt-3" role="alert" v-if="!$v.email.email">
                          <small>Invalid Email Address </small>
                        </div>
                      </div>
                    </div>
                    <!-- phone -->
                    <div class="form-group" :class="{ 'form-group--error': $v.phone.$error }">
                      <label>Phone</label>
                      <input type="text" class="form-control" 
                        v-model.trim="phone" 
                        @input="setPhone($event.target.value)" >
                      <div class="valid-feedback">
                        Your phone number is valid!
                      </div>
                      <div v-if="$v.phone.$dirty">
                        <div class="error text-danger mt-3" role="alert" v-if="!$v.phone.phoneNumber">
                          <small>Phone number is invalid</small>
                        </div>
                      </div>
                    </div>
            </form>
        </div>
    </div>
</template>

<script>
import { required, minLength, between, email,helpers } from 'vuelidate/lib/validators'

const phoneNumber = helpers.withParams(
  { type: 'phoneNumber' },
  (value) => /^(\+)?(88)?01[0-9]{9}$/.test(value)
)

export default {
  data() {
    return {
      name: '',
      age: 0,
      email: '',
      phone: '',
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    age: {
      between: between(20, 30)
    },
    email:{
      required,
      email,
    },
    phone: {
      required,
      phoneNumber,
    },

  },

  methods: {
    setName(value) {
      this.name = value
      this.$v.name.$touch()
    },
    setAge(value) {
      this.age = value
      this.$v.age.$touch()
    },
    setEmail(value) {
      this.email = value
      this.$v.email.$touch()
    },
    setPhone(value) {
      this.phone = value
      this.$v.phone.$touch()
    }
  }
}
</script>

<style scoped>

</style>