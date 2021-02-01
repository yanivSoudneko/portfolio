'use strict'

var gProjects = [{
    id: "pacman",
    name: "Pacman",
    title: "I am gonna eat you",
    desc: "lorem ipsum lorem ipsum lorem ipsum",
    projUrl: "https://yanivsoudneko.github.io/Pacman/.",
    publishedAt: 1448693940000,
    labels: ["Matrixes", "keyboard events"],

}, {
    id: "minesweeper",
    name: "MineSweeper",
    title: "Take care ,Mines is every where",
    desc: "lorem ipsum lorem ipsum lorem ipsum",
    projUrl: "https://yanivsoudneko.github.io/Sprint1/",
    publishedAt: 1448693940000,
    labels: ["Matrixes", "keyboard events"],

}, {
    id: "bookshop",
    name: "BookShop",
    title: "Train your brain",
    desc: "lorem ipsum lorem ipsum lorem ipsum",
    projUrl: "https://yanivsoudneko.github.io/Bookshop/.",
    publishedAt: 1448693940000,
    labels: ["Matrixes", "keyboard events"],

}, ]

function getProjects() {
    return gProjects
}

function updateModal(projId) {
    var proj = gProjects.find(function(proj) {
        return proj.id === projId
    })
    return proj

}