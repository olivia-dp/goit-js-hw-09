const formData = {
    email: "",
    message: ""
}
const STORAGE_KEY = "feedback-form-state"
const registerForm = document.querySelector(".feedback-form");
const textArea = document.querySelector("textarea");

registerForm.addEventListener("input", handleInput);
registerForm.addEventListener("submit", submitClick)


function handleInput (event) {
    // event.preventDefault();
    const form = event.currentTarget;
    const email = form.elements.email.value;
    const text = form.elements.message.value;

    formData.email = email.trim();
    formData.message = text.trim();

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}

populateForm () 
function populateForm () {
    const savedLocal = JSON.parse(localStorage.getItem(STORAGE_KEY));
    
    if(savedLocal) {
        registerForm.elements.email.value = savedLocal.email;
        registerForm.elements.message.value = savedLocal.message;
        formData.email = savedLocal.email;
        formData.message = savedLocal.message;
    }
  
}
function submitClick (event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const text = form.elements.message.value;
    
    if (email === "" || text === "") {
        return alert("All form fields must be filled in");
    }
    
    console.log(formData);
    form.reset();
    localStorage.removeItem(STORAGE_KEY);
}