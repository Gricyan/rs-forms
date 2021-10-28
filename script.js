const FORM = document.getElementById("telegram-register");

const PSWD_INPUT = document.getElementById("password-input");
const CONF_PSWD_INPUT = document.getElementById("confirm-password-input");
const RESULT =  document.getElementById("result");

const checkPasswordParametrs = () => {
  if(PSWD_INPUT.value !== CONF_PSWD_INPUT.value) {
    RESULT.innerHTML = "Wrong password";
    return false;
  }

  const PSWD_INPUT_VALUE = PSWD_INPUT.value;
  const hasUpperCase = /[A-Z]/.test(PSWD_INPUT_VALUE);
  const hasLowerCase = /[a-z]/.test(PSWD_INPUT_VALUE);
  const hasDigital = /\d/.test(PSWD_INPUT_VALUE);
  
  if(PSWD_INPUT_VALUE.length < 8 ||  !hasUpperCase || !hasLowerCase || !hasDigital) return false;

  return true;
}

FORM.addEventListener("submit", (event) => {
  event.preventDefault();

  const isValid = checkPasswordParametrs();

  if (!isValid) {
    RESULT.innerHTML = "Password input is incorrect";
    return;
  }

  const SURVEY = `<p>Name: ${document.getElementById("name-input").value}</p>
                  <p>Email: ${document.getElementById("email-input").value}</p>
                  <p>Country: ${document.getElementById("country-select").value}</p>
                  <p>Language: ${document.getElementById("language-select").value}</p>
                  <p>Chat background: <span style="height: 14px;width: 14px;background: ${document.getElementById("color-input").value};display: inline-block;"></span></p>`
  RESULT.innerHTML = "Success!" + SURVEY;
});

PSWD_INPUT.addEventListener("change", (event) => {
  const PSWD_INPUT_VALUE = PSWD_INPUT.value;
  const hasUpperCase = /[A-Z]/.test(PSWD_INPUT_VALUE);
  const hasLowerCase = /[a-z]/.test(PSWD_INPUT_VALUE);
  const hasDigital = /\d/.test(PSWD_INPUT_VALUE);
  
  if(PSWD_INPUT_VALUE.length < 8 ||  !hasUpperCase || !hasLowerCase || !hasDigital) {
    event.target.classList.add("invalid");
  } else {
    event.target.classList.remove("invalid");
  }
});

PSWD_INPUT.addEventListener("focus", (event) => {
  event.target.classList.add("focused");
});

PSWD_INPUT.addEventListener("blur", (event) => {
  event.target.classList.remove("focused");
});


/* for one eye

const PSWD_EYE_BTN = document.getElementById("eye");
const PSWD_EYE_SLASH_BTN = document.getElementById("eye-slash");

PSWD_EYE_SLASH_BTN.addEventListener("click", (event) => {
  const BTN = event.target;
  BTN.classList.add("hidden");
  PSWD_EYE_BTN.classList.remove("hidden");
  PSWD_INPUT.type = "text";
});

PSWD_EYE_BTN.addEventListener("click", (event) => {
  const BTN = event.target;
  BTN.classList.add("hidden");
  PSWD_EYE_SLASH_BTN.classList.remove("hidden");
  PSWD_INPUT.type = "password";
});

*/

const PSWD_EYE_BTNS = document.querySelectorAll(".eye");
const PSWD_EYE_SLASH_BTNS = document.querySelectorAll(".eye-slash");

PSWD_EYE_SLASH_BTNS.forEach((button) => {
  button.addEventListener("click", (event) => {
    const BTN = event.target;
    BTN.classList.add("hidden");
    BTN.parentElement.querySelector(".eye").classList.remove("hidden");
    BTN.parentElement.querySelector(".password").type = "text";
  });
});

PSWD_EYE_BTNS.forEach((button) => {
  button.addEventListener("click", (event) => {
    const BTN = event.target;
    BTN.classList.add("hidden");
    BTN.parentElement.querySelector(".eye-slash").classList.remove("hidden");
    BTN.parentElement.querySelector(".password").type = "password";
  });
});