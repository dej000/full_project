<template>
    <nav class="navbar d-flex fixed-top border-bottom bg-white p-0">
        <div class="container">
            <div>
                <img class="p-2" src="../assets/Logo.svg" alt="">
                <img class="p-2" src="../assets/Love in Planning.svg" alt="">
            </div>
      
            <p class="m-0 ">Return to  <a  class="text-decoration-none " href=""> <strong>HOME</strong> </a></p>
          
        </div>
      </nav>

      <div class="hero d-flex justify-content-center align-items-center container1  ">
        <form @submit.prevent="handleSubmit" class="bg-light container1  ">
            <h1 class="text-center"><strong>Forgot Your Password</strong></h1>
            <p class="text-center text-muted">No worries, we will send you instructions to reset your password</p>
            
            <div class="  d-flex justify-content-center  flex-column  ">
                <div class="form-grou  p-3">
                    <label class="pt-1" for="">EMAIL ADDRESS</label>
                    <input class="form-control pt-3 " type="email" name="email" required placeholder="" v-model="email">
                </div> 
            
                <div class="form-group d-flex flex-column justify-content-center align-items-center gap-3 p-3 ">
                   
                    <button class="btn  btn-light ">RESET PASSWORD</button>
                    
                   <div>
                    <p  class="text-center m-0">Back to <router-link to="/login"><a  class="text-decoration-none " href=""> <strong>LOGIN</strong> </a></router-link></p>
                   </div>
                </div> 
            </div>
          

           
        </form>
          <div class="fixed-bottom bg">
                <img src="../assets/BG Flowers purple 2.svg" alt="">
             </div>
      </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>
  
<style scoped>
*{font-family: 'lato';
}
nav a{
    font-size: 16px;
}
p,a{
 color: rgba(106, 112, 164, 1)!important;
 font-size: 16px;

}

label{
    font-size: 10px;
    color: rgba(106, 112, 164, 1);  
}
h1{
    color: rgba(106, 112, 164, 1);   
    font-size: 30px;
}
.border-bottom{
    border-bottom: 1px solid #9FA6DF;

}

.bg{
    z-index: -2;
} 

.container1{
    padding: 55px 100px;
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
    margin-top: 60px;
    height: 100%;
    padding: 30px;
}



.btn{
    background: rgba(61, 66, 106, 1);
    color: white;
    padding: 12px;
    width: 100%;
    border-radius: 0;
}

.form-grou{
    position: relative;
    
}

.form-grou input{
    background-color:#eff0ff;
    border: 0;
    border-bottom:2px solid rgba(18, 183, 106, 1);
    display: block;
    width: 100%;
    
}

.form-grou label{
    position: absolute;
    top: 16px;
    left: 28px;

}
 
.form-control input:focus, .form-control input:valid{
outline: 0;
}
</style>