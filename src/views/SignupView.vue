<template>
 
      <NavbarViewVue :links="links" />

      <div class="hero d-flex justify-content-center align-items-center  "> 
         <div class="">
    {{ message }}
    <Form
      @submit="onSubmit"
      :validation-schema="schema"
      @invalid-submit="onInvalidSubmit"
    >
    <h2 class="text-center"><strong>Sign Up</strong></h2>
    <p class="text-center text-muted">Your wedding planning journey starts here.</p>
    <div class="container ">
      
    </div>


    <div class="row ">
      <div class="col-6">
        <TextInput
        class=""
        name="firstname"
        type="text"
        label=""
        placeholder="FIRST NAME"
        id="floatingInput"
        v-model="firstName"
  
      />
      </div>

      <div class="col-6">
        <TextInput
          name="lastname"
          type="text"
          label=""
          placeholder="LAST NAME"
          id="floatingInput"
          v-model="lastname"
    
        />
      </div> 
    </div>

    
    
    <div class="row">
      <div class="col-12">
        <TextInput
        name="email"
        type="email"
        label=""
        placeholder="EMAIL ADDRESS"
        id="floatingInput"
        class=""
        v-model="email"
      />
      
      </div> 
      </div>

      <div class="row ">
        <div class="col-6">
          <TextInput
          name="password"
          type="password"
          label=""
          placeholder="PASSWORD"
          id="floatingPassword"
          v-model="password"

        
        />
        </div>

        <div class="col-6">
          <TextInput
          name="confirm_password"
          type="password"
          label=""
          placeholder="CONFIRM PASSWORD"
          id="floatingPassword"
          v-model="confirmpassword"
        
        />
        </div> 
      </div>

   
    
     
   
   

      <!-- <TextInput
      name=""
      type="checkbox"
      label=""
      placeholder=""
      success-message="Glad you remembered it!"
    /> -->


      <div class="d-flex justify-content-center mt-4 mb-4 gap-3">
        <input class="" type="checkbox"  v-model="acceptTerms">
        <label for="">Yes, I understand and agree to Love in Planning's  Terms and Conditions</label>
    </div>
    
    <div class="form-group d-flex flex-column justify-content-center align-items-center gap-3 "><button type="submit" class="btn submit-btn  btn-light " >Sign Up</button>
        <p  class="text-center">You already have an account?  <router-link to="/login"><a  class="text-decoration-none " href="">LOG IN</a></router-link></p>
    </div>

    </Form>
  </div>
  
         
        <div class="fixed-bottom bg">
            <img src="../assets/BG Flowers purple 2.svg" alt="">
         </div>
       
      </div>
</template>

<script >
import NavbarViewVue from '../components/NavbarView.vue';
import * as Yup from 'yup';
import { Form } from 'vee-validate';
import TextInput from '../components/TextInput.vue';



export default {
    components :{NavbarViewVue,
      Form,
      TextInput},
      data(){
    return{
     schema : Yup.object().shape({
  firstname: Yup.string().required(),
  lastname: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref('password')], 'Passwords do not match'),
})
    }

   },
   methods:{
 onSubmit(values) {
  alert(JSON.stringify(values, null, 2));
},

onInvalidSubmit() {
  const submitBtn = document.querySelector('.submit-btn');
  submitBtn.classList.add('invalid');
  setTimeout(() => {
    submitBtn.classList.remove('invalid');
  }, 1000);
}
   }

    // setup () {
    //     const formData = reactive ({
    //         firstName : '',
    //         lastname : '',
    //         email : '',
    //         password : '',
    //         confirmpassword : '',
    //         acceptTerms : ""
    //         });       
  //   data: () => ({
  //       firstname : '',
  //       lastname : '',
  //       email : '',
  //       password : '',
  //       confirmpassword : '',
  //       acceptTerms: ""
  // }),
  // validations: {
  //   firstname: {
  //     required,
  //     alpha
  //   },

  //   lastname: {
  //     required,
  //     alpha
  //   },
  //   email: {
  //     required,
  //     email
  //   },
  //   password: {
  //     required,
  //     maxLength: maxLength(12),
  //     minLength: minLength(6)
  //   },
  //   //  confirmpassword:{ 
  //   //      required, sameAs: sameAs(this.password),
  //   // },
  //   acceptTerms: {
  //     required
  //   }
  // },
  // methods: {
  //   submitForm() {
  //     this.$v.$touch();

  //     if (!this.$v.$invalid) {
  //       console.log(
  //         `firstname: ${this.firstname},lastname:${this.lastname} Email: ${this.email}, Password: ${this.password},, Accept Terms: ${this.acceptTerms}`
  //       );
  //     }
  //   }
//    }
 
    
}
        
 
</script>
  
<style scoped>
*{font-family: 'Lato';
}

:root {
    --primary-color: #0071fe;
    --error-color: #f23648;
    --error-bg-color: #fddfe2;
    --success-color: #21a67a;
    --success-bg-color: #e0eee4;
  }
  
nav a{
    font-size: 12px;
}
label,p,a{
 color: rgba(106, 112, 164, 1);
 font-size: 12px;

}
#floatingInput{
    width: 100%;
}
h2{
    color: rgba(106, 112, 164, 1);   
}
.border-bottom{
    border-bottom: 1px solid #9FA6DF;

}

.bg{
    z-index: -2;
}

.form-control {
    display: block;
   
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    background-color: #fff;
   border-radius: 0;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

form{
    width: 100%;
    height: 0%;
    padding: 30px;
    background-color: #FFFFFF;
}

.btn{
    background: rgba(61, 66, 106, 1);
    color: white;
    padding: 12px;
    width: 217px;
    border-radius: 0;
}


.form-group input{
    background-color:#eff0ff;
    border: 0;
    border-bottom:2px solid rgba(18, 183, 106, 1);
    display: block;
    width: 300px;
    font-size: 14px;
    height: 40px;
}
.form-grou input{
    background-color:#eff0ff;
    border: 0;
    border-bottom:2px solid rgb(18, 183, 106, 1);
    height: 40px;
    font-size: 14px;
    
}
  
 

</style>