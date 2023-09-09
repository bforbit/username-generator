const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","_","-"];
let passwordOne = document.getElementById("name-box")
let usernameLength = 1
let characterLength1 = 1
let characterLength2 = 2
let characterLength3 = 3
let characterLength4 = 4
let characterLength5 = 5
let button1 = document.getElementById("1")
let button2 = document.getElementById("2")
let button3 = document.getElementById("3")
let button4 = document.getElementById("4")
let button5 = document.getElementById("5")
let radioSecondWord = document.getElementById("secondWord")


// GET RANDOM WORD FROM DICTIONARY
function getRandomWord() {
    let randomIndexWord = Math.floor( Math.random() * dictionary.length )
    return dictionary[randomIndexWord]
}

// GENERATE RANDOM USERNAME - DEFAULT
function getRandomUsername() {
    let randomWord = ""
    for (let i = 0; i < usernameLength; i++) {
        randomWord += getRandomWord()         
    }
    return randomWord
}

// GENERATE RANDOM USERNAME - 2 WORDS
function getRandomUsername2() {
    let randomWord = ""
    let randomWord2 = ""
    for (let i = 0; i < usernameLength; i++) {
        randomWord += getRandomWord()         
    }
    for (let i = 0; i < usernameLength; i++) {
        randomWord2 += getRandomWord()         
    }
    return randomWord + randomWord2
}

// GET RANDOM CHARACTER
function getRandomCharacter() {
    let randomIndexChar = Math.floor( Math.random() * characters.length )
    return characters[randomIndexChar]
}



// CLICK BUTTON FOR USERNAME

function buttonNewUsername() {
    let radioSecondWord = document.getElementById("secondWord")
    let selectedCharacterLength = getSelectedCharacterLength()
    let generateUsername = ""

    if (radioSecondWord.checked) {
        generateUsername = getRandomUsername2()
    } else {
        generateUsername = getRandomUsername()
    }

    if (selectedCharacterLength > 0 && selectedCharacterLength <= 5) {
        let randomCharacters = ""
        for (let i = 0; i < selectedCharacterLength; i++) {
            randomCharacters += getRandomCharacter()
        }
        generateUsername += randomCharacters
    }

    passwordOne.textContent = generateUsername
}

function getSelectedCharacterLength() {
    if (button1.checked) {
        return characterLength1
    } else if (button2.checked) {
        return characterLength2
    } else if (button3.checked) {
        return characterLength3
    } else if (button4.checked) {
        return characterLength4
    } else if (button5.checked) {
        return characterLength5
    } else {
        return 0 // Default value when no character length is selected
    }
}

function buttonClear() {
    radioSecondWord.checked = false
    button1.checked = false
    button2.checked = false
    button3.checked = false
    button4.checked = false
    button5.checked = false
    passwordOne.textContent = ""
    
}

