// TODO: update welcome dialogue
export const welcomeDialogue = `Welcome to the game`

// TODO: add game tutorial dialogue

// TODO: add more game alerts for "win" / "lose" and items acquired
export const gameAlerts = [
    {
        id: 1,
        message: `Press Enter to Continue`
    },
    {
        id: 2,
        message: `Select an Option`
    }
]

// TODO: update game prompts
export const gamePrompts = [
    {
        id: 1,
        message: `message prompt 1`,
        choices: [
            {
                option: `choice 1`,
                setState: { hasAmulet: true },
                nextId: 2
            },
            {
                option: `choice 2`,
                nextId: 3
            }
        ]
    },
    {
        id: 2,
        message: `message prompt 2`,
        choices: [
            {
                option: `choice prompt 2 1`,
                setState: { hasAmulet: true },
                nextId: 2
            },
            {
                option: `choice prompt 2`,
                nextId: 3
            }
        ]
    },
    {
        id: 3,
        message: `message prompt 3`,
        choices: [
            {
                option: `choice 1`,
                setState: { hasAmulet: true },
                nextId: 2
            },
            {
                option: `choice 2`,
                nextId: 3
            }
        ]
    }
]