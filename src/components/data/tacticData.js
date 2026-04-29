import absolutePin from "../../assets/tactics/absolute-pin.png"
import discoveredAttack from "../../assets/tactics/discovered-attack.png"
import doubleCheck from "../../assets/tactics/double-check.png"
import knightFork from "../../assets/tactics/knight-fork.png"
import queenFork from "../../assets/tactics/queen-fork.png"
import relativePin from "../../assets/tactics/relative-pin.png"
import sacrificeAttacking from "../../assets/tactics/sacrifice-attacking.png"
import skewerDirect from "../../assets/tactics/skewer-direct.png"


export const tacticsData = [
    {
        title: "Absolute Pin",
        description: "A piece cannot move because it would expose the king to check.",
        image: absolutePin
    },
    {
        title: "Discovered Attack",
        description: "A piece moves away to reveal an attack from a hidden piece.",
        image: discoveredAttack
    },
    {
        title: "Double Check",
        description: "Two pieces deliver check simultaneously, forcing king movement.",
        image: doubleCheck
    },
    {
        title: "Knight Fork",
        description: "One piece attacks two or more pieces at the same time.",
        image: knightFork
    },
    {
        title: "Queen Fork",
        description: "The queen attacks two or more pieces at once, often gaining material.",
        image: queenFork
    },
    {
        title: "Relative Pin",
        description: "A piece can move, but doing so would lose a more valuable piece.",
        image: relativePin
    },
    {
        title: "Attacking Sacrifice",
        description: "Giving up material to create a strong attack or checkmate.",
        image: sacrificeAttacking
    },
    {
        title: "Direct Skewer",
        description: "A valuable piece is forced to move, exposing a weaker piece behind it.",
        image: skewerDirect
    },
];

export const puzzles = [
    {
        question: "White to move. Best move?",
        options: ["Qh5+", "Nf7+", "Re1"],
        correct: "Qh5+",
    },
    {
        question: "Find the fork tactic.",
        options: ["Be3", "Nc7+", "h3"],
        correct: "Nc7+",
    },
    {
        question: "Best winning move?",
        options: ["Qd8+", "Kg2", "a3"],
        correct: "Qd8+",
    },
    {
        question: "Spot the pin idea.",
        options: ["Bg5", "h4", "Ke2"],
        correct: "Bg5",
    },
];
