// TODO: load the dataset 
let attractions;

fetch('./attractions.json')
  .then(response => response.json())
  .then(data => {
		attractions = data;
		filterData("all");
	});

function filterData(category) {
	let dArray;

	if (category != "all") {
		dArray = attractions.filter(a => a.Category === category);
	}
	else {
		dArray = attractions;
	}

	dArray.sort((a, b) => parseFloat(b.Visitors) - parseFloat(a.Visitors));
	slicedArray = dArray.slice(0, 5);
	renderBarChart(slicedArray);
}

let selectedEvent = document.querySelector("#attraction-category").addEventListener("change", (event)=>{
	filterData(event.target.value);
});

