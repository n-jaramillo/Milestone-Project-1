// Game Text Import
import { welcomeDialogue, gameAlerts, gamePrompts } from "./game-text.js"

// State Tracking
let state = {}

// Messages and Choices Element
const messageElement = document.getElementById("message")
const choicesElement = document.getElementById("choicesMenu")

// Typing Speed
const TYPE_SPEED = 50

// TypeIt Prompt Message
const typedMessage = new TypeIt("#gameMessage", {
    speed: TYPE_SPEED,
    lifeLike: true
}).go()

// Document Event Listener for Game Controls
document.addEventListener("keydown", listenForKeyPress, false)

// Start Game Function
function startGame() {
    state = {}
    showMessage(1)
}

// Show Message using Game Prompt Id and TypeIt
// Add Choices Using Helper Function 
// Listen for Game Controls Keypress
function showMessage(gamePromptIndex) {
    const gamePrompt = gamePrompts.find(gamePrompt => gamePrompt.id === gamePromptIndex)

    typedMessage.type(gamePrompt.message).flush()

    addChoices(gamePrompt.choices)
    
    listenForKeyPress()
}

// Choices Menu Helper Function
function addChoices(choices) {
    while (choicesElement.firstChild) {
        choicesElement.removeChild(choicesElement.firstChild)
    }

    choices.forEach(choice => {
        if (showOption(choice)) {
            const optionPrompt = document.createElement('li')
            optionPrompt.innerText = choice.option
            optionPrompt.classList.add('option')
            optionPrompt.addEventListener('click', () => refreshScreen())
            optionPrompt.addEventListener('click', () => selectOption(choice))
            choicesElement.appendChild(optionPrompt)
        }
    })
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

// Event Listener to Continue When Key is Pressed
function listenForKeyPress(e) {
    let keyPress = e.keyCode
    // alert(`${keyPress}`)
    // Enter Key
    if (keyPress == 13) {
        setVisibility()
    }
}

// Set Options Visibility to Visible
function setVisibility() {
    choicesElement.style.visibility = 'visible'
    choicesElement.style.maxHeight = choicesElement.scrollHeight + "px"
}

// Refresh Animation for Typing Message on Screen and Refresh Options Visibility
function refreshScreen() {
    typedMessage.reset().go()
    choicesElement.style.visibility = 'hidden'
    choicesElement.style.maxHeight = null
}

startGame()