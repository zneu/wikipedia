$( document ).ready(function() {
  $( ".query" ).keyup(search);
  $( ".search" ).submit(search);

  function search(event) {

    var searchQuery = $( ".query").val();

    event.preventDefault();

    var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&callback=?&search='+searchQuery;

    $.getJSON(url, function(data) {
      console.log(data)
      $("#results").empty();
      for (var i=0; i < data[3].length; i++) {
        if (data[2][i] !== "") {
          $("#results").append(
            '<a href="'+data[3][i]+'" target="_blank"><article id="result">'+'<h3>'+data[1][i]+'</h3>'+ '<hr height="2px" color="#fff" width="50%">' +'<p>'+data[2][i]+'</p></article></a>'
          );
        }
      };
    });
  };
});
