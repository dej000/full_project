<template>
    <!-- <nav class="navbar d-flex fixed-top border-bottom bg-white p-0">
        <div class="container">
            <div>
                <img class="p-2" src="../assets/Logo.svg" alt="">
                <img class="p-2" src="../assets/Love in Planning.svg" alt="">
            </div>
      
            <p class="m-0 ">Return to  <a  class="text-decoration-none " href="">HOME</a></p>
          
        </div>
      </nav> -->
      <NavbarViewVue :links="links" />
      <div class="hero d-flex justify-content-center align-items-center container1  mt-5">
        <div  class="containe1 m-0 ">
          <div>
            {{ message }}
            <Form
              @submit="onSubmit"
              :validation-schema="schema"
              @invalid-submit="onInvalidSubmit"
            >
            <h2 class="text-center"><strong>Log in</strong></h2>
            <p class="text-center text-muted">Welcome back!</p>
               
            <div class="form-group mb-3 ">
            
              <div class="" >
                <TextInput
                class="" 
                id="floatingInput"
                 name="email"
                 type="email"
                 label for="floatingInput"
                 placeholder="name@example.com"
                 v-model="email" 
       
               />
              </div>
            </div>

            <div class="form-group ">
        
              <div class="">
                <TextInput
                class="  " 
                id="floatingPassword"
                  name="password"
                  type="password"
                  label for="floatingPassword"
                  placeholder="Password"
                  v-model="password"
         
                />
                </div>
          
                
             
          </div>
             
             
             
        
           

               <div class="form-group d-flex flex-column justify-content-center align-items-center  ">
                    <router-link  class="text-decoration-none mb-3" to="/forgetpassword"><a class="text-decoration-none " href="">FORGOT PASSWORD?</a></router-link>  

                    <button class="btn submit-btn  m-0 btn-light " type="submit">LOGIN</button>
                    <p  class="text-center m-1 text-muted">New user? </p>
                   <div>
                    <p  class="text-center m-0">Sign up as a client <router-link class="text-decoration-none" to="/signup"><a  class="text-decoration-none " href="">Here</a></router-link> </p>
                    <p  class="text-center m-0">Sign up as a wedding vendor <a  class="text-decoration-none " href="">Here</a></p>
                    
                   </div>
                </div>
            </Form>
          </div>
            
            <!-- <Form @submit="onSubmit" :validation-schema="simpleSchema"   @invalid-submit="onInvalidSubmit">
                <h2 class="text-center"><strong>Log in</strong></h2>
                <p class="text-center text-muted">Welcome back!</p>

                <div class="form-group  mb-3 ">
            
                <div class="form-floating mb-3" >
                        <Field name="email" class="form-control TextInput" id="floatingInput" placeholder="name@example.com" v-model="email" :rules="validateEmail"/>
                        <label for="floatingInput">EMAIL ADDRESS</label>
                       
                      </div>
                      <ErrorMessage class="text-danger" name="email" />
                   
                </div>

                <div class="form-group   mb-3 gap-3">
                  
        
                    <div class="form-floating">
                        <Field name="password" type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="password"  :rules="isRequired" />
                        <label for="floatingPassword">PASSWORD</label>
                      </div>
                      <ErrorMessage class="text-danger" name="password" />
                      
                   
                </div>
                 
           
                
               
            </Form> -->
        </div>
      
        
        <div class="fixed-bottom bg">
            <img src="../assets/BG Flowers purple 2.svg" alt="">
         </div>
      </div>
</template>

<script>
import NavbarViewVue from '../components/NavbarView.vue';
import { ref } from '@vue/reactivity'
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
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
  
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
 
    // data () {
    //       const email = ref('')
    //       const password = ref('')
           

    //         return{ email, password,
    //             links: [
    //         {
    //             url: '/home',
    //             name: 'Home',
               
    //         },
         
    //     ]
    //   }

   
    // },
 

}
    

</script>
  
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
*{
  font-family: 'Lato', sans-serif;
}



nav a{
    font-size: 12px;
}

p,a{
    color: rgba(106, 112, 164, 1)!important;
    font-size: 14px;
   
   }
label{
 color: rgba(106, 112, 164, 1)!important;
 font-size: 12px;

}
h2{
    color: rgba(106, 112, 164, 1);
    font-size: 28px;   
}
.border-bottom{
    border-bottom: 1px solid #9FA6DF;

}

.bg{
    z-index: -2;
}

.container1{
    padding: 20px 100px;
}

.form-control {
    display: block;
    /* width: 100%; */
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    background-color: #fff;
   border-radius: 0;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

form{
   width: 400px;
    height: 0%;
    padding: 10px;
    background-color: #FFFFFF;
}

.btn{
    background: rgba(61, 66, 106, 1);
    color: white;
    padding: 12px;
    width: 100%;
    border-radius: 0;
}


.form-group input{
    background-color:#eff0ff;
    border: 0;
    border-bottom:2px solid rgba(18, 183, 106, 1);
    display: block;
    width: 100%;
    font-size: 12px;
 
}




.submit-btn {
   
    outline: none;
    border: none;
    color: #fff;
    font-size: 12px;
    padding: 10px 15px;
    display: block;
    width: 100%;
    transition: transform 0.3s ease-in-out;
    cursor: pointer;
  }
  
  .submit-btn.invalid {
    animation: shake 0.5s;
    /* When the animation is finished, start again */
    animation-iteration-count: infinite;
  }
  
  @keyframes shake {
    0% {
      transform: translate(1px, 1px);
    }
    10% {
      transform: translate(-1px, -2px);
    }
    20% {
      transform: translate(-3px, 0px);
    }
    30% {
      transform: translate(3px, 2px);
    }
    40% {
      transform: translate(1px, -1px);
    }
    50% {
      transform: translate(-1px, 2px);
    }
    60% {
      transform: translate(-3px, 1px);
    }
    70% {
      transform: translate(3px, 1px);
    }
    80% {
      transform: translate(-1px, -1px);
    }
    90% {
      transform: translate(1px, 2px);
    }
    100% {
      transform: translate(1px, -2px);
    }
  }
  
  .form-group.invalid input {
    background-color: var(--error-bg-color);
    color: var(--error-color);
  }
  
  .TextInput.has-error input:focus {
    border-color: var(--error-color);
  }
  
  .TextInput.has-error .help-message {
    color: var(--error-color);
  }
  
  .TextInput.success input {
    background-color: var(--success-bg-color);
    color: var(--success-color);
  }
  
  .TextInput.success input:focus {
    border-color: var(--success-color);
  }
  
  .TextInput.success .help-message {
    color: var(--success-color);
}
</style>