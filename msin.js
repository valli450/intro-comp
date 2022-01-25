const update = () => {
    let firstName = document.getElementById('first-name');
    const firstNameBlock = document.querySelector('.firts-name');
    let lastName = document.getElementById('last-name');
    const lastNameBlock = document.querySelector('.last-name');
    let eMail = document.getElementById('email-address');
    const eMailBlock = document.querySelector('.email');
    let custPassword = document.getElementById('password');
    const passwordBlock = document.querySelector('.password');
    const re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    const valid = re.test(eMail);

    firstName.placeholder = '';
    lastName.placeholder = '';
    password.placeholder = '';
    
    //First name error message
    if (firstName.value.length === 0){
        firstNameBlock.classList.add('missing');
    } else{
        firstNameBlock.classList.remove('missing');
    }

    //Last name error message
    if (lastName.value.length === 0){
        lastNameBlock.classList.add('missing');
    } else{
        lastNameBlock.classList.remove('missing');
    }

    //Email error message
    if (!valid){
        eMailBlock.classList.add('missing');
        eMail.placeholder = 'email@example/com';
    } else{
        eMailBlock.classList.remove('missing');
    }

    //Password error message
    if(custPassword.value.length === 0){
        passwordBlock.classList.add('missing');
    } else{
        passwordBlock.classList.remove('missing');
    }
    
}