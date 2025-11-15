const form = document.querySelector("form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const age = document.querySelector("#age");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const country = document.querySelector("#country");
const terms = document.querySelector("#terms");

const errorPara = document.createElement("p");
errorPara.classList.add("error");
// email.parentElement.prepend(errorPara)

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let errorText = "";
  username.addEventListener('input', () => {
      errorText = ''
      console.log('fksjfkjkj')
  });
  
  if (username.value == "") {
      errorText = "Username cannot be empty";
    errorPara.innerText = errorText
    username.parentElement.prepend(errorPara);
  }
});


// Change 'change' to 'input'

// The console.log will now run for every keypress.