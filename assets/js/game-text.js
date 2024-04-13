export const newLine = `<br /><br />`

export const gamePrompts = [
    {
        id: 1,
        message:
            `It's Friday morning and your friend texts you asking if you're still coming over for game night. You still have a lot of activities to catch up on for your bootcamp.${newLine}
            You figure that you could get it done after you've gotten a few wins under your belt. You text back saying you'll be over at the usual time, six o'clock and they better be prepared to lose some rounds.${newLine}
            You start to work on your activities but quickly realize you have no understanding of callback functions and promises. You decide to take a break to get your backpack ready for game night.${newLine}
            You thought to yourself, there's Saturday to work on your comprehension of why you don't have to pay for a hamburger today when you can spare $3.50 on Tuesday. You might as well bring the heat to game night.${newLine}
            You look around your room thinking of what you can bring. You pack your bag quickly with some essentials - that resin casted die set, those well-worn game tokens, and your lucky deck of cards.${newLine}
            It's only four o'clock, so you have plenty of time before you have to leave.${newLine}
            You decide to take a quick nap.`,
        choices: [
            {
                option: `Get ready for a nap`,
                nextId: 2
            }
        ]
    },
    {
        id: 2,
        message:
            `You open your window and feel that the weather is nice and warm so you decide to take a quick nap. 
            You set your alarm for an hour and get comfy before dozing off into a slumber . . . ${newLine}
            The comfort didn't last long as you're startled awake by a loud noise outside.${newLine}
            You look out and see it's just some road rage incident. You shut the window and notice the time. It's 4:45.${newLine}
            You feel rested enough and decide to take your dog Otis on a quick walk before heading over to your friend's house.${newLine}
            Otis notices a feral cat walking by and starts tugging you along. You try to hold him back but the leash wasn't clipped on all the way and he manages to free himself.${newLine}
            Otis starts to run off and you are panting trying to keep up but he gets further and further out of sight within minutes.${newLine}
            You arrive at an unfamiliar intersection, one way leads to a dead end with a broken chain-link fence, the other leads to a dark alley way.${newLine}
            Do you go towards the dead end or the alley way?`,
        choices: [
            {
                option: `Go towards the dead end`,
                nextId: 3
            },
            {
                option: `Go towards the alley`,
                nextId: 6
            }
        ]
    },
    {
        id: 3,
        message:
            `You decide to go towards the dead end in hopes that Otis is on the other side.${newLine}
            You squeeze through the opening of the fence. As you go through you feel resistance and see your jeans have gotten caught on the fence.${newLine}
            You tug trying to free your leg, but instead tear your jeans which results in you falling over, scraping your arms and hands in the process.${newLine}
            As you're dusting yourself off and checking the rip, you notice a large, sticky puddle on the ground underneath a substantial yew tree and in the distance, a set of footprints leading down a hill.${newLine}
            Do you investigate the strange puddle or the set of footprints?`,
        choices: [
            {
                option: `Investigate the puddle`,
                nextId: 4
            },
            {
                option: `Follow the footprints`,
                nextId: 7
            }
        ]
    },
    {
        id: 4,
        message:
            `You pull out your phone flashlight to investigate the puddle. You notice the puddle is swirling slowly and looks eerily like blood. You lean in to take a closer look.${newLine}
            A crow perched on the yew squawks, startling you and making you lose your balance, you drop your phone in the sanguine pool.${newLine}
            As your phone gets sucked into the vortex you nervously wonder if the puddle is swirling because the wind is picking up or because it really isn't a puddle.${newLine}
            Do you try to reaching into the mass to get your phone out or do you go back towards the fence?`,
        choices: [
            {
                option: `Retrieve your phone`,
                nextId: 5
            },
            {
                option: `Go back towards the fence`,
                nextId: 8
            }
        ]
    },
    {
        id: 5,
        message:
            `You decide that your phone has too much on it to let it go so you quickly.${newLine}
            You thrust your hand into the puddle and feel that it's not only sticky but it's also burning hot and not as shallow as you thought.${newLine}
            You try to pull your hand out, but the more you resist the hotter it burns. You relax and the heat dissipates.${newLine}
            You slowly move your hand around trying to locate your phone. You brush up against something. Thinking it could be your phone you grit your teeth and start moving your hand fast towards the object. ${newLine}
            The burning becomes so hot that you feel a stabbing pain in your scraped hand.${newLine}
            You quickly realize it's not the pain that's stabbing you, but something is clenching down on your palm and you get wrenched into the mass further.${newLine}
            You jolt upright, startled awake by a loud noise outside, you take a look through your window and see that it's just some careless drivers with road rage.${newLine}
            You shut the window and notice the clock reads 4:45 and your phone lit up on the bed with an opened text from your friend.${newLine}
            Curious you check and it's a video of the feral cat Otis was chasing in your dream. You figure staring at a screen before naps might not be the best idea.${newLine}
            Deciding not to chance fate, you cancel on going to game night and instead decide to continue working on your asynchronous coding activities.${newLine}
            However, the procrastinator in you takes over and you spend most of the night playing online card games with an AI.`,
        choices: [
            {
                option: `Try again next Friday?`,
                nextId: -1
            }
        ]
    },
    {
        id: 6,
        message:
            `It's getting dark, you decide to go through the alley way using your phone as a flashlight.${newLine}
            You start hearing a strange noise, thinking it's Otis making the noise you walk towards the source.${newLine}
            As you get closer, the noise starts turning into a growl and you become engulfed in blackness.${newLine}
            Your throat gets dry the further into the alley you go, and soon you find the source of the guttural noise. Hearing someone speak you call out as it's too dark to see their face.${newLine}
            All of a sudden your phone light shines through the blackness onto a goat.${newLine}
            Confused you wonder where the person that previously spoke was.${newLine}
            The goat starts growling with the same voice you hear before and you black out.${newLine}
            You jolt upright, startled awake by a loud noise outside, you take a look through your window and see that it's just some careless drivers with road rage.${newLine}
            You shut the window and notice the clock reads 4:45 and your phone lit up on the bed with an opened text from your friend.${newLine}
            Curious you check and it's a video of the feral cat Otis was chasing in your dream. You figure staring at a screen before naps might not be the best idea.${newLine}
            Deciding not to chance fate, you cancel on going to game night and instead decide to continue working on your asynchronous coding activities.${newLine}
            However, the procrastinator in you takes over and you spend most of the night playing online card games with an AI.`,
        choices: [
            {
                option: `Try again next Friday?`,
                nextId: -1
            }
        ]
    },
    {
        id: 7,
        message:
            `You decide that the footprints are fresh enough that you might find someone who saw Otis run by.${newLine}
        As your following the set of footprints you notice that the boot pattern is changing.${newLine}
        With each step, the boot imprint seems to gradually split down the middle and gets more pointed towards the toe.${newLine}
        You look back and to your surprise, you see that you haven't been following footprints but have been following what looks to be like hoof prints.${newLine}
        Confused, you turn back towards the fence.`,
        choices: [
            {
                option: `Continue back to the fence`,
                nextId: 8
            }
        ]
    },
    {
        id: 8,
        message:
            `You head back towards the broken fence and you find Otis excitedly panting and wagging his tail at you.${newLine}
        Relieved you found Otis, you decide to finish your walk with Otis at the park.${newLine}
        You take Otis home and double check your bag and make sure everything is packed and you enjoy a lovely walk to your friend's house.${newLine}
        Hopeful that you'll win some rounds and be motivated enough to finish up your coding later, you take a deep breath in and all is well.${newLine}
        Thank you for playing . . . `,
        choices: [
            {
                option: `Come back next Friday`,
                nextId: -1
            }
        ]
    }
]