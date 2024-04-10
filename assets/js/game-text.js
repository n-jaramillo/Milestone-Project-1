export const welcomeDialogue = `Welcome to the game`

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