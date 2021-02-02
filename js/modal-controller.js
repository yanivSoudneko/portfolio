'use strict'


$(document).ready(init);
$('.offcanvas-btn,.getInContact').click(openCanvas)
$('.submit-btn').click(mailMe)

function init() {
    console.log('Started...');
    renderProj()
}

console.log('projects', getProjects());

function renderProj() {
    var projects = getProjects()
    var strHTML = projects.map(function(proj) {
        return `  
         <div class="col-md-4 col-sm-6 portfolio-item" onclick="renderModal('${proj.id}')">
            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                        <i class="fab fa-angrycreative fa-3x"></i>
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
    $('.main-row').html(strHTML)
}


function renderModal(projId) {
    var proj = getProjById(projId)
    var strHtml = ` 
      <div class="col-lg-8 mx-auto">
                <div class="modal-body">
                    <h2>${proj.name}</h2>
                    <p class="item-intro text-muted">${proj.title}</p>
                    <img class="img-fluid d-block mx-auto" src="img/me/${proj.id}.png" alt="">
                    <p>${proj.desc}</p>
                    <ul class="list-inline">
                        <li>Date: ${proj.publishedAt}</li>
                        <li>Game: ${proj.name}</li>
                        <li>title: ${proj.title}</li>
                        <li><button class="btn btn-info lets-play"><a href="${proj.projUrl}" target="_blank">Lets play</a></button></li>
                    </ul>
                    <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project</button>
                </div>
        </div>`
    getProjById(projId)
    $('.modal-row').html(strHtml)
}

function mailMe() {
    var subject = $('input[name=subject]').val()
    var body = $('textarea[name=body]').val().replace(/\n/g, `%0d%0a`)
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=soudneko@icloud.com&su=${subject}&body=${body}`)

}
``