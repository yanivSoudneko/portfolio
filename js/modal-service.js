'use strict'

var gProjects = [{
    id: "pacman",
    name: "Pacman",
    title: "I am gonna eat you",
    desc: "In Pac-Man, the player makes a Pac-Man, a yellow disc, move around a maze. The goal is to eat every yellow pellet (circles) while not getting caught by the ghosts/monsters. For extra points, fruits that appear can also be eaten. When Pac-Man eats a big pellet, the ghosts turn blue and can be eaten. Even though the game has 256 stages, the last level can not be finished due to a problem with the creation of the game.",
    projUrl: "https://yanivsoudneko.github.io/Pacman/.",
    publishedAt: new Date('january 18,2021 20:00'),
    labels: ["Matrixes", "keyboard events"],

}, {
    id: "minesweeper",
    name: "MineSweeper",
    title: "Take care ,Mines is every where",
    desc: "Minesweeper is a single-player puzzle video game. The objective of the game is to clear a rectangular board containing hidden mines or bombs without detonating any of them, with help from clues about the number of neighboring mines in each field. The game originates from the 1960s, and it has been written for many computing platforms in use today. It has many variations and offshoots.",
    projUrl: "https://yanivsoudneko.github.io/Sprint1/",
    publishedAt: new Date('january 21,2021 22:00'),
    labels: ["Matrixes", "keyboard events"],

}, {
    id: "bookshop",
    name: "BookShop",
    title: "Train your brain",
    desc: "Welcome to my book shop here you find a wide range of books,get smarter and start read !",
    projUrl: "https://yanivsoudneko.github.io/Bookshop/.",
    publishedAt: new Date('january 28,2021 21:00'),
    labels: ["Matrixes", "keyboard events"],

}, ]

function getProjects() {
    return gProjects
}

function getProjById(projId) {
    var proj = gProjects.find(function(proj) {
        return proj.id === projId
    })
    return proj

}