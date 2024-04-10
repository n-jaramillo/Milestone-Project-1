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

const newLine = `<br /><br />`

// TODO: update game prompts
export const gamePrompts = [
    {
        id: 1,
        message: `You've hiked through Snake Canyon once before while visiting your Uncle Howard at Red Creek Ranch, but you never noticed any cave entrance. It looks as though a recent rock slide has uncovered it.${newLine}`,

        // message: `You've hiked through Snake Canyon once before while visiting your Uncle Howard at Red Creek Ranch, but you never noticed any cave entrance. It looks as though a recent rock slide has uncovered it.${newLine}
        // Though the late afternoon sun is striking the opening of the cave, the interior remains in total darkness. You step inside a few few, trying to get an idea of how big it is. As our eyes become used to the dark, you see what looks like a tunnel ahead, dimly lit by some kind of phosphorescent material on its walls. The tunnel walls are smooth, as if they were shaped by running water. After twenty feet or so, the tunnel curves. You wander where it leads. You venture in a bit further, but you feel nervous being alone in such a strange place. You turn and hurry out.${newLine}
        // A thunderstorm may be coming, judging by how dark it looks outside. Suddenly you realize the sun has long since set, and the landscape is lit only by the palest light of the full moon. You must have fallen asleep and woken up hours later. But then you remember something even more strange. Just last evening, the moon was only a slim crescent in the sky.${newLine}
        // You wonder how long you've been in the cave. You are not hungry. You don't feel you have been sleeping. You wonder whether to try to walk back home by moonlight or whether to wait for dawn, rather than risk losing our footing on the steep and rocky trail.`,
        choices: [
            {
                option: `Turn back home.`,
                // setState: { hasAmulet: true },
                nextId: 2
            },
            {
                option: `Wait for dawn.`,
                nextId: 3
            }
        ]
    },
    {
        id: 2,
        message: `As you start walking back toward the ranch, you notice the trail seems very different than you remember it, though of course moonlight can play tricks on your eyes. But you suddenly realize you are not walking on the trail at all, but on what seems to be a dried-up river bed. You hurry back to the cave entrance. You look around you and realize the whole landscape has changed. While you were in the cave, torrents of water have washed out the trail; yet there is not so much as a puddle left. You shiver. It is cold, much colder than it should be at this time of year. You take a jacket out of your backpack and put it on, but you are still freezing.${newLine}
        At least the world about you seems brighter. It's getting light in the east. The sun will soon be up. You look at your watch. It has run down, though you would it only a few hours ago. Nothing seems to make sense anymore.${newLine}
        You know you should get back to the ranch as quickly as possible; et somehow you feel the only way to change things back to the way they were is to re-enter the cave.`,
        choices: [
            {
                option: `Continue toward the ranch.`,
                nextId: 2
            },
            {
                option: `Turn back and head to the cave.`,
                nextId: 3
            }
        ]
    },
    {
        id: 3,
        message: `You wait until morning, but as the rosy wisps of dawn begin to light the eastern sky, a chill and forbidding wind begins to blow.`,
        choices: [
            {
                option: `Seek shelter`,
                nextId: 2
            },
            {
                option: `Brave the freezing wind to see more of the world around you.`,
                nextId: 3
            }
        ]
    }
]