const signup = document.querySelector("#signup");
const signin = document.querySelector("#signin");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const usernameSU = document.querySelector("#username-signup");
const emailSU = document.querySelector("#email-signup");
const passwordSU = document.querySelector("#password-signup");
const wrapper = document.querySelector(".wrapper");
const submitSi = document.querySelector("#submit-si");
const submitSu = document.querySelector("#submit-su");
const bars = document.querySelector(".bars");
const times = document.querySelector(".times");
const search = document.querySelector(".searchbtn");
const searchtimes = document.querySelector(".search-times");

//CAUTION! VARIABLES ARE BENEATH
let emailvalue;
let passwordvalue;
let emailSUValue;
let passwordSUValue;
let usernameSUValue;

//CAUTION FUNCTIONS ARE BENEATH

//this is the signin function for validation
const getEmailInput = (choice, choicetwo, choicethree) => {
  if (choice.value === "") {
    choicetwo.disabled = true;
    choicethree.disabled = true;
  } else {
    choicetwo.disabled = false;
    if (choicetwo.value !== "") {
      choicethree.disabled = false;
    } else {
      choicethree.disabled = true;
    }
  }
};
const submitFormSi = (e) => {
  e.preventDefault();
  emailvalue = email.value;
  passwordvalue = password.value;
  console.log(
    `Your email is ${emailvalue} and your password is ${passwordvalue}`
  );
};
getEmailInput(email, password, submitSi);
//this is the signup function for validation
const getEmailInputSu = (choice, choicetwo, choicethree, choicefour) => {
  if (choice.value === "") {
    choicetwo.disabled = true;
    choicethree.disabled = true;
    choicefour.disabled = true;
  } else {
    choicetwo.disabled = false;
    if (choicetwo.value !== "") {
      choicethree.disabled = false;
      if (choicethree.value !== "") {
        choicefour.disabled = false;
      } else {
        choicefour.disabled = true;
      }
    } else {
      choicethree.disabled = true;
      choicefour.disabled = true;
    }
  }
};
const submitFormSu = (e) => {
  e.preventDefault();
  usernameSUValue = usernameSU.value;
  emailSUValue = emailSU.value;
  passwordSUValue = passwordSU.value;
  console.log(
    `Your username is ${usernameSUValue} and email is ${emailSUValue} while your password is ${passwordSUValue}`
  );
};
getEmailInputSu(usernameSU, emailSU, passwordSU, submitSu);

//this function is to switch form
const formSwitch = (choice) => {
  if (choice === 1) {
    wrapper.classList.add("wrapper-signin");
  } else if (choice === 2) {
    wrapper.classList.remove("wrapper-signin");
  }
};

//cAUTION! I ADDED EVENT LISTENERS BELOW

signup.addEventListener("click", () => formSwitch(1));
signin.addEventListener("click", () => formSwitch(2));

//CAUTION! FOR THE SIGN IN
email.addEventListener("input", () => getEmailInput(email, password, submitSi));
password.addEventListener("input", () =>
  getEmailInput(email, password, submitSi)
);
submitSi.addEventListener("click", submitFormSi);

//Caution! for the sign up
usernameSU.addEventListener("input", () =>
  getEmailInputSu(usernameSU, emailSU, passwordSU, submitSu)
);
emailSU.addEventListener("input", () =>
  getEmailInputSu(usernameSU, emailSU, passwordSU, submitSu)
);
passwordSU.addEventListener("input", () =>
  getEmailInputSu(usernameSU, emailSU, passwordSU, submitSu)
);
submitSu.addEventListener("click", submitFormSu);
bars.addEventListener("click", () => {
  document.querySelector(".nav-holder").style.display = "block";
  document.querySelector(".search-holder").style.display = "none";
});
times.addEventListener("click", () => {
  document.querySelector(".nav-holder").style.display = "none";
});
search.addEventListener("click", () => {
  document.querySelector(".nav-holder").style.display = "none";
  document.querySelector(".search-holder").style.display = "block";
});
searchtimes.addEventListener("click", () => {
  document.querySelector(".search-holder").style.display = "none";
});
