
const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    const email = formElements.email.value;
    const password = formElements.password.value;

    const dataForm = {
        email,
        password,
    };

    if (email === '' || password === '') {
       return alert('Please, fill out empty fields');
    }
    
    console.log(dataForm);

    loginForm.reset();

};
