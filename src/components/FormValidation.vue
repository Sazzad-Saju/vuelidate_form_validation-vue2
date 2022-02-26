<template>
    <div class="card">
        <h3 class="card-header text-center">
            Register Area
        </h3>
        <div class="card-body">
            <form>
                <div class="form-row">
                    <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
                        <label>First Name</label>
                        <input type="text" class="form-control" 
                        v-model.trim="name" 
                        @input="setName($event.target.value)" >
                        <div class="valid-feedback">
                            Your first name is valid!
                        </div>
                        <div class="error text-danger mt-3" role="alert" v-if="!$v.name.required">
                        <small  v-if="!$v.name.required">Field is required</small>
                        </div>
                        <div class="error text-danger mt-3" role="alert" v-if="!$v.name.minLength">
                        <small  v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</small>
                        </div>
                        

                        <!-- <div class="invalid-feedback">
                            <span v-if="!$v.firstname.required">
                                First name is required
                            </span>
                            <span v-if="!$v.firstname.minLength">
                                First name must have at least {{$v.firstname.$params.minLength.min}} letters.
                            </span>
                            <span v-if="!$v.firstname.maxLength">First name must have at most {{$v.firstname.$params.maxLength.max}} letters</span>
                        </div> -->
                    </div>

                    <!-- <div>{{firstname}}</div> -->

                    <!-- <div class="form-group">
                        <label>Last Name</label>
                        <input type="text" class="form-control" 
                        v-model.trim="$v.lastname.$model"
                        :class="{'is-invalid':$v.lastname.$error, 
                        'is-valid':!$v.lastname.$invalid}">
                        <div class="valid-feedback">Your last name is valid!</div>
                        <div class="invalid-feedback">
                            <span v-if="!$v.lastname.required">
                                last name is required
                            </span>
                            <span v-if="!$v.lastname.minLength">
                                Last name must have at least {{$v.lastname.$params.minLength.min}} letters.
                            </span>
                            <span v-if="!$v.lastname.maxLength">Last name must have at most {{$v.lastname.$params.maxLength.max}} letters</span>
                        </div>
                    </div> -->
                </div>
                <!-- <div class="form-group">
                    <label>Age</label>
                    <input type="number" 
                    class="form-control" 
                    v-model.number.lazy="$v.age.$model"
                    :class="{'is-invalid':$v.age.$error, 
                    'is-valid':!$v.age.$invalid}">
                    <div class="valid-feedback">Your age is valid!</div>
                    <div class="invalid-feedback">
                        <span v-if="!$v.age.between">Must be between {{$v.age.$params.between.min}} and {{$v.age.$params.between.max}} 
                        </span>
                    </div>
                </div> -->
            </form>
        </div>
    </div>
</template>

<script>
import { required, minLength, between } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      name: '',
      age: 0
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    age: {
      between: between(20, 30)
    }
  },

  methods: {
    setName(value) {
      this.name = value
      this.$v.name.$touch()
    },
    setAge(value) {
      this.age = value
      this.$v.age.$touch()
    }
  }
}
</script>

<style scoped>

</style>