$(function(){

	$("#btn-submit").click(function(event){
		event.preventDefault();
		$("#search-results").html('');
		var query = $("#query").val();
		getRequest(query);

	});

	function getRequest(searchTerm) {
		
		var params = {
			part: 'snippet',
			key: 'AIzaSyA8WuPYUNStVFyGZUohie96_04wQWWGBvc',
			q: searchTerm,
			r: 'json'
		};

		url = 'https://www.googleapis.com/youtube/v3/search';

		$.getJSON(url, params, function(data){
			showResults(data.items);
  	});		
	}

  function showResults(results) {
  	
		// for (var i = 0; i < myData.length; i++) {
		// 	console.log(myData[i].Title);
		// }
    
  	$.each(results, function(index, value){
  		$("#search-results").append('<a href="https://www.youtube.com/watch?v=' + value.id.videoId + '" target="_blank"><img src=' + value.snippet.thumbnails.medium.url + '></a>');
      //console.log(value.id.videoId);
      console.log(value.snippet.thumbnails.medium.url);
    });
  }
});