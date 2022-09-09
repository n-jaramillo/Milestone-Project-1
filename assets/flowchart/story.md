# Gameplay: Beginning Narrative

It's Friday morning and your friend texts you asking if you're still coming over for casino night. You have a lot of activities to catch up on for your bootcamp, but figure that you could get it done after you've made a little cash. You text back saying you'll be over at the usual time, six o'clock and they better be prepared to lose some money. 

You start to work on your activities but quickly realize you have no understanding of callback functions and promises. You decide to take a break to get your backpack ready for game night. You thought to yourself, there's Saturday to work on your comprehension of why you don't have to pay for a hamburger today when you can spare $3.50 on Tuesday; you might as well bring the heat to game night.

You look around your room thinking of what you can bring. You pack your bag quickly with some essentials - that resin casted die set, those well-worn game tokens, and your lucky deck of cards. It's only four o'clock, so you have plenty of time before you have to leave. Do you take a quick nap or head over to your friend's house early?

### 🔶 Gameplay Decision: [Quick Nap](#quick-nap-narrative-adventure-mode-gameplay) (Adventure Mode) or [Go Early](#head-over-early-narrative-zen-mode-gameplay) (Zen Mode) ?

Do you take a quick nap or head over to your friend's house early?

---
## Head Over Early Narrative (Zen Mode Gameplay)

###### ⚪ *Neutral Ending* 

You decide to drive your dog Otis to the park for a quick outdoor play before heading over to your friend's house. You double check your bag and make sure your lucky cards packed and you enjoy a lovely walk to your friend's house, hopeful that you'll make some extra cash for the holiday weekend.

---
## Quick Nap Narrative (Adventure Mode Gameplay)
The weather seems nice today, but you decide to catch up on some sleep. You set your alarm for five o'clock, open your window, and get comfy while scrolling on your phone before dozing off into a slumber. However, the comfort didn't last long and you are startled awake by a loud noise outside. You take a look through your window and see it's just some careless drivers with road rage. You shut the window and notice the clock reads 4:45. You feel rested enough and decide to take your dog Otis on a quick walk before heading over to your friend's house.

Otis notices a feral cat walking by and starts tugging you along. You try to hold him back but the leash wasn't clipped on all the way and he manages to free himself. Otis starts to run off and you are panting trying to keep up but he gets further and further out of sight within minutes. You arrive at an unfamiliar intersection, one way leads to a dead end with a broken chainlink fence, the other leads to a dark alley way.

### 🔶 1.1 Decision: [Dead End](#dead-end-narrative) or [Alley Way](#alley-way-narrative) ?

Do you go towards the dead end or the alley way?

---
## Dead End Narrative
You decide to go towards the dead end in hopes that Otis is on the other side. You squeeze through the opening of the fence. As you go through you feel resistance and see your jeans have gotten caught on the fence. You tug trying to free your leg but instead tear your jeans which results in you falling over, scraping your arms and hands in the process. As you're dusting yourself off and checking the rip, you notice a large, sticky puddle on the ground underneath a substantial yew tree and in the distance, a set of footprints leading down a hill. Do you investigate the strange puddle or the set of footprints?

### 🔶 Dead End Decision: [Strange Puddle](#strange-puddle-narrative) or [Set of Footprints](#set-of-footprints-narrative) ?

Do you investigate the strange puddle or the set of footprints?

You consider reaching in the puddle for your phone but you become uneasy of the hypnotic swirling and decide to go back towards the fence.

After losing your phone and perhaps blindly following a goat, you decide to trace back the footprints that you know - your footprints.

---
### Strange Puddle Narrative 
[~ Lost Phone State Tracking](#state-tracking)

You pull out your phone flashlight to investigate the puddle. You notice the puddle is swirling slowly and looks eerily like blood. You lean in to take a closer look. A crow perched on the yew squawks, startling you and making you lose your balance, you drop your phone in the sanguine pool. As your phone gets sucked into the vortex you nervously wonder if the puddle is swirling because the wind is picking up or because it really isn't a puddle. Do you try to reaching into the mass to get your phone out or do you go back towards the fence?

### 🔶 Strange Puddle Decision: [Retrieve Your Phone](#🔴-retrieve-phone-ending-negative) or [Go Back](#go-back-towards-fence-narrative) ?

Do you try to reaching into the mass to get your phone out or do you go back towards the fence?

###### 🔴 *Retrieve Phone Ending (Negative)*  
You decide that your phone has too much on it to let it go so you quickly. You thrust your hand into the puddle and feel that it's not only sticky but it's also burning hot and not as shallow as you thought. You try to pull your hand out but the more you resist the hotter it burns. You relax and the heat dissipates. You slowly move your hand around trying to locate your phone. You brush up against something. Thinking it could be your phone you grit your teeth and start moving your hand fast towards the object. The burning becomes so hot that you feel a stabbing pain on your scraped hand. You quickly realize it's not the pain that's stabbing you but something is clenching down on your palm and you get wrenched into the mass further.

You jolt upright, startled awake by a loud noise outside, you take a look through your window and see that it's just some careless drivers with road rage. You shut the window and notice the clock reads 4:45 and your phone lit up on the bed with an opened text from your friend. Curious you check and it's a video of the feral cat Otis was chasing in your dream. You figure staring at a screen before cat naps might not be the best idea. Deciding not to chance fate, you cancel on going to casino night to continue working on your asynchronous coding activites. However, the procrastinator in you takes over and you spend most of the night playing online card games with an AI.

---
## Go Back Towards Fence Narrative
    [ lostPhone == true ]

    [ woods == true ]

    [ lostPhone && woods == true]

You consider reaching in the puddle for your phone but you become uneasy of the hypnotic swirling and decide to go back towards the fence.


    Decide to go back through the fence or follow the footprints

    Fence Narrative

    Decide to go to the alley or go home

    Alley Path -> Darkness unlocked, just keep walking

    Go home narrative -> can't because Otis is still lost

    Follow Footprints Path

---		
## Set of Footprints Narrative 
[~ Something in the Woods State Tracking](#state-tracking)

You decide that the footprints are fresh enough that you might find someone who saw Otis run by. As your following the set of footprints you notice that the boot pattern is changing. With each step, the boot imprint seems to gradually split down the middle and gets more pointed towards the toe. You look back and to your surprise, you see that you haven't been following footprints but have been following what looks to be like hoofprints. Confused, you wonder if you should head back or continue towards where the prints lead.
    
### 🔶 Set of Footprints Decision: 
Confused, you wonder if you should head back or continue towards where the prints lead.

Unlocked Dead End Path: Narrative
N1-1Ai [Narrative 1.1A Unlocked: Dead End]
N1.1Ai(After losing your phone and perhaps blindly following a goat, you decide to trace back the footprints that you know, your footprints.)

Decide to go back through the fence or try retrieving the phone

Fence Narrative

Decide to go to the alley or go home

Alley Path -> Darkness unlocked, just keep walking

Go home narrative -> can't because Otis is still lost

Retrieve Phone Path

Continue Footprints Path: Narrative
N3-2B [Narrative 3.2B Continue Following the Footprints]
N3.2B(You decide to continue following the hoofprints.)

---
## Alley Way Narrative
It's getting dark, you decide to go through the alley way using your phone as a flashlight.

### 🔶 Alley Way Decision: [Play in a Card Game](#play-in-a-card-game-narrative) or [Lay down and Die](#lay-down-and-die-narrative) ?

---
## Play in a Card Game Narrative
Enter Special Card Game Mode (Terrible Odds, One chance to defeat, if win -> get Otis, else -> Negative Ending -> lay down and die

---
## Lay Down and Die Narrative
Negative Ending
Enter Special Card Game Mode (Terrible Odds, Dialog Changes Each Round, if certain amount of plays -> get sent back home with Otis and cat)

After Certain Amount of Plays Narrative
###### 🔵 Positive Ending
Zen Mode

---
## Paths
    Story ---o Gameplay === NarrativeA --o Decision1
    Gameplay === NarrativeB
    Decision1 === N1-1A ---o Decision2A
    Decision1 === N1-1B ---o Decision2B

    Decision2A === N2-1A ---o Decision3A -.- E3-1A
    Decision3A === N3-1B
    Decision2A === N2-1B ---o Decision3B -.-> N1-1Ai
    N1-1A -.-> N1-1Ai
    Decision3B === N3-2B

    Story Start --> Gameplay Decision [GD]
        [GD]: Quick Nap (Adventure Mode) or Go Early (Zen Mode)

    (AM) --> Area Decision [AD]
        [AD]: Dead End (DE) or Alley Way (AW)
    ---
        1.1 BRANCH (DE) --> Investigate Decision [ID]
            [ID]: Strange Puddle (SP) or Footprints (FP)

            1.2.1 BRANCH (SP) --> Phone Decision [PD] ** State Tracking: lostPhone true
                [PD]: Retrive Phone (RP) or Go Back (GB)*

                    1.2.1.1 ENDING (RP): Negative ** State Tracking: zenMode true

                    1.2.1.2 BRANCH * (GB) --> 
                    1.2.1.2 BRANCH *+ (GB) --> Alternate Investigate Decision [ID.1]

            1.2.2 BRANCH (FP) --> Continue Decision [CD] ** State Tracking: woods = true
                [CD]: Continue Footprints (CF) or Go Back(GB)*

                    1.2.2.1 BRANCH (CF) --> 

                    1.2.2.2 BRANCH + (GB) --> Yew Decision [YD]
                        [YD]: Retrieve Phone (RP: 1.2.1.1) or Look for Crow (LC)

                        1.2.2.2.2 BRANCH (LC) --> 

                    1.2.2.2 BRANCH +* (GB) --> Alternate Investigae Decision [ID.1]

        1.2 BRANCH (AW) --> 

        (ZN) --x Neutral Ending 

---
## State Tracking
List of flags or variables to change the boolean value of when a certain point in the narrative is reached. Some will unlock achievements that the user can view. Some are used to track branches in the story that would otherwise be unreachable.

| Name | Variable | Type | Achievement  | Long Description |
|------|----------|--------|--------------|------------------|
| Zen Mode | zenMode | boolean | Zen Mode | | 
| Hard Mode | hardMode | boolean | Hard Mode | |
| Lost Phone | lostPhone | boolean | Going off Grid | You decided that life would be easier without the burden of social media, so you turfed your phone in a suspicious, swirling puddle. |
| Something in the Woods | woods | boolean | Something in the Woods | Your adventure in the woods was not the one you had envisioned. Maybe you should stop watching Ari Aster movies before bed and you'd still have your head. |
| Dead End | deadEnd | boolean | Out of Options | |
|||||

---
## List of Endings