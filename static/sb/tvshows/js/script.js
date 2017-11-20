/**
 * Created by Thomas on 03.03.15.
 */


$(function(){
    $(".typedtitle").typed({
        strings: ["Hello","I'm Thomas.","Here is a list of a few of my favorite TV Shows"],
        typeSpeed: 100,
        startDelay: 1000,
        backDelay:1000,
        backSpeed: 50
    });
});
$(function() {
    $(".list").click(function() {
        $('#details').show();
        var animationend = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        //check the show omDb id
        var showID = $(this).attr("id");
        console.log("the show id is: "+showID);

        $(this).addClass('animated rubberBand').one(animationend, function(){
            $(this).removeClass('animated rubberBand');
        });

        //Show the Poster
        var poster = $(this).attr("data-poster");
        console.log("the poster is located at: "+poster);
        $(".show-image").empty().append("<img src='"+poster+"' />");

        //Show the trailer
        var trailer = $(this).attr("data-trailer");
        console.log("the trailer is at: "+trailer);
        $(".show-trailer").empty().append("<iframe class='youtube-player' type='text/html' width='640' height='385' src='http://www.youtube.com/embed/"+trailer+"' frameborder='0'></iframe>");

        $.ajaxSetup({ cache: false });
        //log that item was clicked
        console.log("tv show clicked");
        //prepare variables for getJSON request
        var url="http://www.omdbapi.com/?i=";
        var omdbid=$(this).attr("id");
        // fetch the object with the right id
        $.getJSON(url+omdbid+"&plot=full&r=json", function( data ) {
            //show the data
            console.log(data);
            $("#description").hide();
            $(".show-title").empty().append(data.Title);
            $(".show-genre").empty().append("<h4>Genre</h4>"+data.Genre);
            $(".show-plot").empty().append(data.Plot);
            $(".show-rating").empty().append("<h4>IMDb Rating:</h4>"+data.imdbRating);
        });

    });
});
