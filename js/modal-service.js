'use strict'


function updateModal(projId) {
    var proj = gProjects.find(function(proj) {
        return proj.id === projId
    })
    return proj

}