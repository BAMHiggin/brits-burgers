$(function () {
    //button to change boolean devour 
    $(".devourButton").on("click", function (event) {
        var id = $(this).data("id");
        //reload when burger moves to devoured area
        location.reload();

        // PUT request w/handlebars
        $.ajax("/api/burgers/" + id, {
            type: "PUT",

        }).then(
            function () {
                // console.log("changed devour choice", newDevour);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".createForm").on("submit", function (event) {
        //add on submit event
        event.preventDefault();

        let newBurger = {
            burger_name: $("#bn").val().trim(),
        
        };

        // Send the POST request.
        $.ajax("/api/burgers/", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

});
