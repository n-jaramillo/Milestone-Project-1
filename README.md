# Milestone Project 1
CPIE Software Development Cohort 04

Milestone Project 1: Browser Game

Nikki Jaramillo

## Story Concept
A web browser based choose your own adventure (CYOA) game, inspired by Devil's Grip, a patience-esque, solitare-type card game with the objective of ridding a pile of cards onto ordered stacks on the play area. Patience and solitare games are often one-player games that require patience to fully complete them without any leftover cards. Devil's Grip's game play removes the aces and scores the player based on how many unused cards remain, the lower the number the higher the winning rank. 

## How It All Ties Together
The Devil's Grip card game mechanics are used in creating the story with a combined choice structure (Gauntlet & Loop and Grow) that simulates the gameplay of having to go through the deck of cards (choices) to form stacks (story branches) and win the objective of the game (the protagonist finding their dog). The less number of unused cards or choices the player has by the end of the game the more achievements the player will have received, thus completing more of the hidden aspects of the game. Completing all the stacks (story branches) will lead to the completion of the game.

## Execution
The player will be able to read a narrative, be provided with a decision and select a choice to be taken to the subsequent narrative, decision, and choices (story elements). This sequence of events will be carried out through various JavaScript functions mostly focused on either switch or if statements to determine where the player is in the story and what story elements to present to the player through asynchronous coding and DOM manipulation. The structure and design of the game will be executed using HTML, CSS, and JavaScript.

# List of Resources

## Gameplay Reference
[Devil's Grip Solitare Game](https://bicyclecards.com/how-to-play/devils-grip/#filter) </br>
Bicycle's card game rules detailing the aspects of the game.

[Standard Patterns in Choice Based Games](https://heterogenoustasks.wordpress.com/2015/01/26/standard-patterns-in-choice-based-games/) </br>
Sam Kabo Ashwell's article on choice based games is used to developing an understanding of what structure was used for this game. Combining the **Gauntlet** and **Loop and Grow** structures you can create a story-telling device that allows the opportunity for the player to experience new branches that unlock after exhausting other branches (through endings<sup>1</sup> or backtracking to a previous node<sup>2</sup>) or perhaps spend more time trying to find a desired outcome by taking a specific route. Although this is similar to the **Branch and Bottleneck** and **Quest** structures with multiple nodes and choices converging and diverging, this differs because of the effect of unlocking "new" branches that would not have otherwise been there if the player hadn't backtracked to that point. The state-tracking and backtracking eliminate the previously played narratives and choices for a new ones that restricts the player from going back to the original path.</br>

<sup>1</sup> : There is little to no use of unlocking new branches through endings, but if the project is built upon, the concept will be revisited. </br>
<sup>2</sup> : State-tracking is used to determine if a new branch is revealed to the player and / or for awarding the player an achievement.

[By the Numbers: How to Write a Long Interactive Novel That Doesn’t Suck](https://www.choiceofgames.com/2011/07/by-the-numbers-how-to-write-a-long-interactive-novel-that-doesnt-suck/) </br>
Dan Fabulich's article on utilitzation of numbers, stat tracking, in interactive novels (or CYOA) is a process to be explore in the future. In short, delayed branching and player stats accumulated over time determines the outcome of future decisions being made. In this game there is more of a reliance on state-tracking of certain variables to change narratives and possible decisions in branches. This method does add more nodes to the game but is something that is easy to wrap my mind around rather than keeping track and display stats to the player. 

## Mechanics Reference
Online tools and documentation utilized to build and connect branches of the story in a somewhat logical way and to avoid disconnect between choices and branches. Some tools used to test story gameplay without code.

[Mermaid](https://mermaid-js.github.io/mermaid/#/) </br>
"Diagrams and visualizations using text and code"

[Mermaid Live Editor](https://mermaid.live/edit) </br>
"Mermaid allows even non-programmers to easily create detailed and diagrams through the Mermaid Live Editor"

[ink](https://www.inklestudios.com/ink/) </br>
"A narrative scripting language for games"

[ChoiceScript](https://www.choiceofgames.com/make-your-own-games/choicescript-intro/) </br>
"A simple programming language for writing multipl-choice games (MCGs)"

[Twinery](https://twinery.org/) </br>
"An open-source tool for telling interactive, nonlinear stories"

## Code Reference
[Choose Your Own Adventure JavaScript Reference](https://www.youtube.com/watch?v=R1S_NhKkvGA&t=933s)

## Assets
[UI Spritesheet Set](https://statoasty.itch.io/ui-assets-pack-srt)

[UI Spritesheet by Atelier Pixerelia](https://pixerelia.itch.io/)

## Other Resources
[Tiled](https://www.mapeditor.org/) </br>
Map creation tool used with spritesheets. Used for creating mockups for the game with spritesheet [assets](#assets)

[Notion](https://www.notion.so/product) </br>
Used for compiling notes.
