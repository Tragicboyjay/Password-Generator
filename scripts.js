// Arrays containing the types of characters.

// initializing the different type of characters.

const upperCase =  [
'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

const lowerCase = [
'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const special = [
'!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+',
'=', '{', '}', '[', ']', '|', ':', ';', '<', '>', ',', '.', '?',
'/', '\\', '~', '`', "'", '"'
];

// initializing the checkbox variables.

let upperCaseCheckbox = document.getElementById('uppercase');
let lowerCaseCheckbox = document.getElementById('lowercase');
let numbersCheckbox = document.getElementById('numbers');
let specialCheckbox = document.getElementById('special');

// functon run button.

let generateBtn = document.getElementById('button');

// password length input value.

let passwordLength = document.getElementById('passwordLength').value;

// password display

let textinput = document.getElementById('password');

// generator function.

generateBtn.onclick = generatePassword = () => {

    let passwordChars = [];

    if (upperCaseCheckbox.checked){
        passwordChars = passwordChars.concat(upperCase);
    }
    if (lowerCaseCheckbox.checked){
        passwordChars = passwordChars.concat(lowerCase);
    }
    if (numbersCheckbox.checked){
        passwordChars = passwordChars.concat(numbers);
    }
    if (specialCheckbox.checked){
        passwordChars = passwordChars.concat(special);
    }

    let passwordLength = document.getElementById('passwordLength').value;

    let password = ''

    for (let i = 0; i < passwordLength; i++){
        let randomIndex = Math.floor(Math.random() * passwordChars.length);
        password += passwordChars[randomIndex];
    }
    textinput.value = password

    passwordChars.length = 0;
}

