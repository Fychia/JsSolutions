const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", palindrome);

function palindrome() {
  const word = document.querySelector(".input-text").value;
  // separate the part of the worlds -> InputString lenght divided by two
  //firstChar give me 2 first worlds 
  //lastChar give me 2 last worlds
  let len = word.length;
  let firstChar = word.substring(0, Math.floor(len / 2)).toLowerCase();
  let lastChar = word.substring(len - Math.floor(len / 2)).toLowerCase();
  
  // let flipChar = lastChar.split("").reverse().join("");
  let flipChar = [...lastChar].reverse().join("");
  if(firstChar == flipChar){
    result.innerHTML = `Is a palindrome`;
  } else{
    result.innerHTML = `Is NOT a palindrome`;
  }
}
