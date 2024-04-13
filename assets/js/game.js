// Game Text Import
import { gamePrompts, newLine } from "./game-text.js"

// Choices Element
const choicesElement = document.getElementById("choicesMenu")

// Typing Speed
const TYPE_SPEED = 50

// TypeIt Prompt Message
const typedMessage = new TypeIt("#gameMessage", {
    speed: TYPE_SPEED,
    lifeLike: true,
}).go()

// Start Game Function
function startGame() {
    showMessage(1)
}

// Show Message using Game Prompt Id and TypeIt
// Add Choices Using Helper Function 
// Listen for Game Controls Keypress
function showMessage(gamePromptIndex) {
    const gamePrompt = gamePrompts.find(gamePrompt => gamePrompt.id === gamePromptIndex)

    const messages = gamePrompt.message.split(newLine)

    messages.forEach(
        m => {
            typedMessage.type(m).pause(500).break().break()
        }
    )

    addChoices(gamePrompt.choices)

    typedMessage
        .exec(async () => {
            setTimeout(() => {
                setVisibility()
            }, 1000)
        })
        .go()

    typedMessage.flush()
}

// Choices Menu Helper Function
function addChoices(choices) {
    while (choicesElement.firstChild) {
        choicesElement.removeChild(choicesElement.firstChild)
    }

    choices.forEach(choice => {
        const optionPrompt = document.createElement('li')
        optionPrompt.innerText = choice.option
        optionPrompt.classList.add('option')
        optionPrompt.addEventListener('click', () => refreshScreen())
        optionPrompt.addEventListener('click', () => selectOption(choice))
        choicesElement.appendChild(optionPrompt)
    })
}

// Select Options and Set NextId
function selectOption(option) {
    const nextGamePromptId = option.nextId
    if (nextGamePromptId <= 0) {
        typedMessage.reset().go()
        return startGame()
    }
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
}

startGame()