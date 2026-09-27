const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
                    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
                    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-",
                    "+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
let generateEl = document.getElementById("generate-el")
let passwordElOne = document.getElementById("password-el-one")
let passwordElTwo = document.getElementById("password-el-two")
 
function randomPassword() {

    passwordElOne.textContent = ""
    passwordElTwo.textContent = ""
    
    for (let i = 0; i < 15; i++){
    let passwordOne = Math.floor(Math.random() * characters.length)
    let passwordTwo = Math.floor(Math.random() * characters.length)
    
    passwordElOne.textContent += (characters[passwordOne])
    passwordElTwo.textContent += (characters[passwordTwo])
    
    }
   
} 
passwordElOne.addEventListener("click", function(){

    navigator.clipboard.writeText(passwordElOne.textContent)
        let originalOne = passwordElOne.textContent
        passwordElOne.textContent = "Saved!"
        setTimeout(function(){
            passwordElOne.textContent = originalOne
        }, 1200)
})
                   
passwordElTwo.addEventListener("click", function(){

    navigator.clipboard.writeText(passwordElTwo.textContent)
    let originalTwo = passwordElTwo.textContent
    passwordElTwo.textContent = "Saved!"
    setTimeout(function(){
        passwordElTwo.textContent = originalTwo
    },1200)
})                   