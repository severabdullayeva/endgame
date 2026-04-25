export const tacticsData = [
    {
        title: "Absolute Pin",
        description: "A piece cannot move because it would expose the king to check.",
        image: "/tactics/absolute-pin.png"
    },
    {
        title: "Discovered Attack",
        description: "A piece moves away to reveal an attack from a hidden piece.",
        image: "/tactics/discovered-attack.png"
    },
    {
        title: "Double Check",
        description: "Two pieces deliver check simultaneously, forcing king movement.",
        image: "/tactics/double-check.png"
    },
    {
        title: "Knight Fork",
        description: "One piece attacks two or more pieces at the same time.",
        image: "/tactics/knight-fork.png"
    },
    {
        title: "Queen Fork",
        description: "The queen attacks two or more pieces at once, often gaining material.",
        image: "/tactics/queen-fork.png"
    },
    {
        title: "Relative Pin",
        description: "A piece can move, but doing so would lose a more valuable piece.",
        image: "/tactics/relative-pin.png"
    },
    {
        title: "Attacking Sacrifice",
        description: "Giving up material to create a strong attack or checkmate.",
        image: "/tactics/sacrifice-attacking.png"
    },
    {
        title: "Direct Skewer",
        description: "A valuable piece is forced to move, exposing a weaker piece behind it.",
        image: "/tactics/skewer-direct.png"
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
