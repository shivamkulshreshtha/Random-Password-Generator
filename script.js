const passwordBox = document.getElementById("password");
const submitBtn = document.getElementById("submit");
const copyBtn = document.getElementById('copy');
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const splChars = "!@#$%^&*()-=_+{}[]<>?/;";

const generatePassword = () => {
  let password = "";
  for (let i = 0; i < length / 4; i++) {
    password +=
      upperCase[Math.floor((Math.random()*100)%26)] +
      number[Math.floor((Math.random()*100)%10)] +
      lowerCase[Math.floor((Math.random()*100)%26)] +
      splChars[Math.floor((Math.random()*100)%23)];
  }
  return password;
};

submitBtn.addEventListener('click',()=>{
    passwordBox.value = generatePassword();
})

copyBtn.addEventListener('click',()=>{
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
})