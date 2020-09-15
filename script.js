// TODO: load the dataset 

let attractions;
fetch('http://example.com/movies.https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9d7f28c1-b3cb-41cc-b1ab-c42f5b62beeb/attractions.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200915%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200915T232738Z&X-Amz-Expires=86400&X-Amz-Signature=249ec163c4bf7786f25217c68a520ecceab62a13015efd0d8d990217bd215674&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22attractions.json%22')
  .then(response => response.json())
  .then(data => {
		attractions = data;
		console.log('movies - (a)', attractions);
	});


console.log('movies - (b)', attractions);  

function filterData(category) {

	/* **************************************************
	 *
	 * TODO: filter attractions by the selected category
	 * TODO: filter top 5 attractions
	 *
	 * CALL THE FOLLOWING FUNCTION TO RENDER THE BAR-CHART:
	 *
	 * renderBarChart(data)
	 *
	 * - 'data' must be an array of JSON objects
	 * - the max. length of 'data' is 5
	 *
	 * **************************************************/

}

// TODO: Define an event listener for the dropdown menu
//       Call filterData with the selected category

