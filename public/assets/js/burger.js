$(function () {
    $(".change-devour").on("click", function (event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("newdevour");

        var newDevourChoice = {
            devour: newDevour
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourChoice
        }).then(
            function () {
                console.log("changed devour choice", newDevour);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    // $(".create-form").on("submit", function(event) {
    //   // Make sure to preventDefault on a submit event.
    //   event.preventDefault();

    //   var newBurger = {
    //     name: $("#bn").val().trim(),
    //     devour: $("[name=devour]:checked").val()
    //   };

    //   // Send the POST request.
    //   $.ajax("/api/burgers", {
    //     type: "POST",
    //     data: newBurger
    //   }).then(
    //     function() {
    //       console.log("created new burger");
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });

});
