$(function() {

    $("#getButton").click(function(e) {

        $.get("https://api.genderize.io/?name=" + $("#nome").val(),
        function(data) {
            console.log(data);

            var $p = $("<p>", {
                html: "Nome: " + data.name + " Gender: " + data.gender
            });

            $("body").append($p);
        });

    });

    $.get("http://localhost:8080/data/animals.json",
        function(data) {
            console.log(data);
            $.each(data, function(index, value) {
                $("body").append("<p>Name: " + value.name + "</p>");
            });
        }
    );
    
});