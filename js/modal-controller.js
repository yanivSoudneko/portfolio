'use strict'


$(document).ready(init);

function init() {
    console.log('Started...');
    renderProj()
}

console.log('projects', getProjects());

function renderProj() {
    var projects = getProjects()
    var strHTMLs = projects.map(function(proj) {
        return `   <div class="col-md-4 col-sm-6 portfolio-item" onclick="renderModal('${proj.id}')">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
            <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                    <i class="fa fa-plus fa-3x"></i>
                </div>
            </div>
            <img class="img-fluid" src="img/me/${proj.id}.png" alt="">
        </a>
        <div class="portfolio-caption">
            <h4>${proj.name}</h4>
            <p class="text-muted">${proj.title}</p>
        </div>
    </div>`
    }).join('')
    document.querySelector('.main-row').innerHTML = strHTMLs
}


function renderModal(projId) {
    var proj = updateModal(projId)
    var strHtml = ` <div class="col-lg-8 mx-auto">
        <div class="modal-body">
        <h2>${proj.name}</h2>
        <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
        <img class="img-fluid d-block mx-auto" src="img/me/${proj.id}.png" alt="">
        <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
        maiores repudiandae, nostrum, reiciendis facere nemo!</p>
        <ul class="list-inline">
        <li>Date: January 2017</li>
        <li>Client: ${proj.name}</li>
        <li>title: ${proj.title}</li>
        <li><a href="${proj.projUrl}">Link:${proj.projUrl}</a></li>
        </ul>
        <button class="btn btn-primary" data-dismiss="modal" type="button">
        <i class="fa fa-times"></i>
        Close Project</button>
        </div>
        </div>`
    console.log('projId', proj);
    updateModal(projId)
    document.querySelector('.modal-row').innerHTML = strHtml
}

function mailMe() {
    var SUBJECT = document.querySelector('input[name=subject]').value
    var BODY = document.querySelector('textarea[name=body]').value
    var MAIL = document.querySelector('input[name=email]').value
        // console.log(subject, body, mail);
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=soudneko@icloud.com&su=${SUBJECT}&body=${BODY+MAIL}`)

}