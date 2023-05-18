const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement=document.getElementById('error')

form.addEventListener('submit',(e)=>{
    let messages= []
    if(name.value ==='' || name.value==null) { messages.push('Name is requierd')}
    
    if (password.value.length<=2) {
        messages.push('Password must be longer then 2 symbols')
    }
     
    if(password.value==="123") {
        messages.push('Password Cannot be 123')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText=messages.join(',')

    }
    
    
      

})

function myFunction() {
    window.location.href="https://www.twinklingstarschicago.com/enrollment";  
  }
