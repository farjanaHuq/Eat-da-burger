$("#eatBurger").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = $("#eatBurger [name=burger]").val().trim();

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new cat");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });