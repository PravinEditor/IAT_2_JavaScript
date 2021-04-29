function starRating() {
	var starNum = $('input[name=rating]:checked', '#starRatingForm').val();
	 document.getElementById("starCount").innerHTML = starNum;
}