$(function () {
    $(".devourButton").on("click", function (event) {
        var id = $(this).data("id");
        // var newDevour = $(this).data("newdevour");

        // var newDevourChoice = {
        //     devour: newDevour


        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            // data: newDevourChoice
        }).then(
            function () {
                console.log("changed devour choice", newDevour);
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
            // devour: $("[name=devour]:checked").val()
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
