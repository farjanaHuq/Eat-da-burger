$( document ).ready(function() {
  console.log( "ready!" );
  console.log("Connected with views/index");

  $("#eatBurger").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#eatBurger [name=burger]").val().trim(),
      devoured: 0
    };
    
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function(res) {
        console.log(res);
        console.log("created new burger");
        // Reload the page to get the updated list
       location.reload();
    } );
  });

  $(".devourIt").on("click", function(e){
       e.preventDefault();
       var id = $(this).data("burgerid");
    
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function(res) {
            
          console.log(res);
            // var Burgers = JSON.parse(res.data);
            // console.log(Burgers);
            // var Source = document.getElementById("Handlebars-Template").innerHTML;
            // var Template = Handlebars.compile(Source);
            // var HTML = Template({ Burgers : Burgers });
            // document.getElementById('devouredBurger').innerHTML +=HTML;
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          //location.reload();
        }
      );
  });

});

