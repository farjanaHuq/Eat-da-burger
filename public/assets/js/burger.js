$( document ).ready(function() {
  console.log( "ready!" );
   var burgerArr = [];

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
      function() {
       console.log("created new burger");
        // Reload the page to get the updated list
       location.reload();
    } );

  });

  $(document).on("click", ".devourIt", function(e){
       e.preventDefault();
       var id = $(this).data("burgerid");
       var  devouredBurger = $(this).data("burgerName");
       
       var Source = document.getElementById("Handlebars-Template").textContent;
       var Template = Handlebars.compile(Source);
       var HTML = Template({devouredBurger : devouredBurger });
       $('#devouredBurger').append(HTML);

    
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() { 
          console.log("devoured burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
  });

});

