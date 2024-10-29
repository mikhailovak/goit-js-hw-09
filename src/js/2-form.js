const formData = {
  email: "",
  message: ""
};

const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector("input");
const messageInput = form.querySelector("textarea");

const STORAGE_KEY = "feedback-form-state";

form.addEventListener('input', onInput);
form.addEventListener('submit', onSubmit);

function onInput(event) {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateFormData() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || "";
    formData.message = parsedData.message || "";
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
}

populateFormData();

function onSubmit(event) {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }

    console.log("Form Data:", formData);

  formData.email = "";
  formData.message = "";
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
}

