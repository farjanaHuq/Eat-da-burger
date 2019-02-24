$( document ).ready(function() {
  console.log( "ready!" );


  $("#eatBurger").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#eatBurger [name=burgerName]").val().trim(),
    };
  
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
       console.log("Created new burger");
        // Reload the page to get the updated list
       location.reload();
    } );

  });
  //Update database
  $(".devourIt").on("click", function(e){
       e.preventDefault();
       var id = $(this).data("id");
     
       $.ajax("/api/burgers/" + id, {
        type: "PUT"
      }).then(
        function() { 
          console.log("Devoured burger's id:", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
  });
  //Delete from database
  $(".cleanUp").on("click", function(e){
       e.preventDefault();
       var id = $(this).data("id");
       
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() { 
          console.log("Devoured burger's id:", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
  });

});

