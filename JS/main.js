const alphabets = "abcdefghijklmnopqrstuvwxwzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const includeCharacters =
  "!#$%^&*(){}[]:;/*-_<>?+abcdefghijklmnopqrstuvwxwzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const both =
  "!#$%^&*(){}[]:;/*-_<>?+0123456789abcdefghijklmnopqrstuvwxwzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const includeNumbers =
  "abcdefghijklmnopqrstuvwxwz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let characterBox = document.getElementById("specialCharacter");
  let numberBox = document.getElementById("numbers");
  let outputBox = document.getElementById("output")
  
  const generatePassword = () => {
      outputBox.innerHTML = "";
      if (characterBox.checked) {
      let length = document.getElementById("length").value;
      length = Number(length)
      for (let i = 1; i <= length; i++) {
          var res = Number(res);
          res = Math.random() * 75;
          let idx = Math.floor(res);
          outputBox.innerHTML += `${includeCharacters[idx]}`;
        }
    }
    else if(numberBox.checked){
        
        let length = document.getElementById("length").value;
        length = Number(length)
        for (let i = 1; i <= length; i++) {
            var res = Number(res);
            res = Math.random() * 63;
            let idx = Math.floor(res);
            outputBox.innerHTML += `${includeNumbers[idx]}`;
        }
    }
    else if(numberBox.checked && characterBox.checked){
        
        let length = document.getElementById("length").value;
        length = Number(length)
        for (let i = 1; i <= length; i++) {
            var res = Number(res);
            res = Math.random() * 80;
            let idx = Math.floor(res);
            outputBox.innerHTML += `${both[idx]}`;
        }
    }
    else{
        
        let length = document.getElementById("length").value;
        length = Number(length)
        for (let i = 1; i <= length; i++) {
          var res = Number(res);
          res = Math.random() * 52;
          let idx = Math.floor(res);
          outputBox.innerHTML += `${alphabets[idx]}`;
        }
      }
};