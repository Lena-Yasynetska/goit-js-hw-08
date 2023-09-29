import { throttle } from "lodash";

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

form.addEventListener('input', throttle(saveFormData, 500));
form.addEventListener('submit', onSubmit);

const LS_KEY = "feedback-form-state";
function saveFormData(){
    //const LS_KEY = "feedback-form-state";
    const formData = {
        email: emailInput.value,
        message: messageInput.value,
    }
    localStorage.setItem(LS_KEY, JSON.stringify(formData));
}
function onSubmit(event){
    event.preventDefault();
    emailInput.value = '';
    messageInput.value = '';
    localStorage.removeItem(LS_KEY);
}

function dataLokalStorage(){
    const storedData = localStorage.getItem(LS_KEY);
    
     if (storedData !== null) {
        const formData = JSON.parse(storedData);
        emailInput.value = formData.email;
        messageInput.value = formData.message;
    }
    console.log(storedData);
}