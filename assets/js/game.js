// Game Text Import
import { welcomeDialogue, gameAlerts, gamePrompts } from "./game-text.js"

// State Tracking
let state = {}

// Messages and Choices Element
const messageElement = document.getElementById("message")
const choicesElement = document.getElementById("choicesMenu")

// Typing Speed
const TYPE_SPEED = 1

// TypeIt Prompt Message
const typedMessage = new TypeIt("#gameMessage", {
    speed: TYPE_SPEED,
    lifeLike: true,
    // afterStep: function (instance) { instance.pause(500) },
}).go()

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

    const messages = gamePrompt.message.split('<br /><br />')

    messages.forEach(
        m => {
            typedMessage.type(m).pause(500).break().break()
        }
    )

    addChoices(gamePrompt.choices)
    
    typedMessage
        .type(`> ${choicePrompt[0]} or ${choicePrompt[1].toLowerCase()}?`)
        .exec(async () => {
            setTimeout(() => {
                setVisibility()
            }, 500)
        })
        .go()

    typedMessage.flush()
}

let choicePrompt = []

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
            choicePrompt.push(choice.option)
        }
    })

    return choicePrompt
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

// Set Options Visibility to Visible
function setVisibility() {
    choicesElement.style.visibility = 'visible'
    choicesElement.style.maxHeight = choicesElement.scrollHeight + "px"
}

// Refresh Animation for Typing Message on Screen and Refresh Options Visibility
function refreshScreen() {
    choicesElement.style.visibility = 'hidden'
    choicesElement.style.maxHeight = null
    typedMessage.reset().go()
}

startGame()