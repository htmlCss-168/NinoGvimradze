const form = document.getElementById('form');
const firstname = document.getElementById ('firstname');
const  lastname=document.getElementById('lastname');
const date=document.getElementById('date');
// const parent = document.getElementById('parent');
// const email = document.getElementById('email');
// const phone = document.getElementById('phone');
// const address = document.getElementById('address');
// const check = document.getElementById('check');
// const submit = document.getElementById('submit');

form.addEventListener('submit',e => {
      e.preventDefault()
      validateInputs();
});

const setError =(element,message) => {
    const inputControl=element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    
    errorDisplay.innerText = nin;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')

}

const validateInputs = () => {
    const firstnameValue = firstname.Value.trim();
    const lastnameValue = lastname.Value.trim()
    const dateValue = date.Value.trim()

    if(firstnameValue === '') {
        setError(firstname, 'Username is required');

    } else  {
        setSuccess (username);
    }

    if(lastnameVaue ==='') {
        setError(email, 'lastname  is requered')
    }
};





