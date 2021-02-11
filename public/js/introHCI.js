'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	// $('#colorBtn').click(randomizeColors);
}

function test(response) {
	console.log(response);
	var html = '<div><div>' + response.title + '</div><div>' + response.date + '</div><img src="' + response.image + '" class="detailsImage" /><p>' + response.summary + '</p></div>';
	$("#project" + response.id + " div.details").html(html);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	var url = "/project/" + idNumber;

	console.log(url);

	$.get(url, test);

	console.log("User clicked on project " + idNumber);
}
