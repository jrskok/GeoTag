// Update "glucose-XXXXX" with your Stitich App Id
var client = new stitch.StitchClient('geotag-olssz');
var db = client.service('mongodb', 'mongodb-atlas').db('geotagscience');

function displayCommentsOnLoad() {
	client.login().then(displayComments);
}

function displayComments() {
	db.collection('locations').find({}).then(docs => {
		const html = docs.map(c => "<div>" + c.comment + "</div>").join("");
		document.getElementById("NAME").innerHTML = html;
	});
}

function addComment() {
	const foo = document.getElementById("new_comment");
	db.collection("locations").insert({owner_id : client.authedId(), comment: foo.value}).then(displayComments);
	foo.value = "";
}
