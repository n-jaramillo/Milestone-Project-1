// Game Prompts Import
import { welcomeDialogue, gameAlerts, gamePrompts } from "./game-text.js"

// State Tracking
let state = {}

// Messages and Choices Element
const messageElement = document.getElementById("message")
const choicesElement = document.getElementById("choicesMenu")

// Controls Event Listener
document.addEventListener("keydown", listenForKeyPress, false)

// Start Game Function
function startGame() {
    state = {}
    showMessage(1)
}

// TODO: update event listener to delete first message prompt and write new one
// Show Message using Game Prompt Id
function showMessage(gamePromptIndex) {
    const gamePrompt = gamePrompts.find(gamePrompt => gamePrompt.id === gamePromptIndex)
    messageElement.innerText = gamePrompt.message
    while (choicesElement.firstChild) {
        choicesElement.removeChild(choicesElement.firstChild)
    }

    gamePrompt.choices.forEach(choice => {
        if (showOption(choice)) {
            const optionPrompt = document.createElement('li')
            optionPrompt.innerText = choice.option
            optionPrompt.classList.add('option')
            optionPrompt.addEventListener('click', () => refreshScreen())
            optionPrompt.addEventListener('click', () => selectOption(choice))
            choicesElement.appendChild(optionPrompt)
        }
    })
    listenForKeyPress()
}

// Set Options Visibility to Visible on Enter Keypress or "Continue"
function setVisibility() {
    choicesElement.style.visibility = 'visible'
    choicesElement.style.maxHeight = choicesElement.scrollHeight + "px"
}

// Event Listener to Continue When Enter Key is Pressed -- Enter keycode "13"
function listenForKeyPress(e) {
    let keyPress = e.keyCode
    // alert(`${keyPress}`)
    if (keyPress == 13) {
        setVisibility()
    }
}

// Show Options 
function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

// Select Options and Set NextId
function selectOption(option) {
    const nextGamePromptId = option.nextId
    if (nextGamePromptId <= 0) {
        return startGame()
    }
    state = Object.assign(state, option.setState)
    showMessage(nextGamePromptId)
}

// Refresh Animation for Typing Message on Screen and Refresh Options Visibility
function refreshScreen() {
    messageElement.setAttribute('id', '')
    void messageElement.offsetWidth;
    messageElement.setAttribute('id', 'message')
    choicesElement.style.visibility = 'hidden'
    choicesElement.style.maxHeight = null
}

startGame()