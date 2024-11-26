4(document.readyState(function() {
    let projectData, uniqueTags;
    $.ajax ({
        url: "data/projects.json",
        success: function(data) {
            console.log(data.projects);
        }
    })
}

function generateUniqueTags () {

}

function createButtons (list) {

}

function filterProjects (tag) {

}

function displayAllProjects (projects) {

}

);

