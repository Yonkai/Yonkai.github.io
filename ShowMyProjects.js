$(document).ready(function(){
    $(".projects ").click(function(){
       $(".sub-header").eq(1).children().toggle();
       $(".sub-header").eq(2).children().toggle();
       $(".sub-header").eq(3).children().toggle();
       $(".project-names").children().toggle();
    });
});

// Removes everything below the Projects Title and (TODO) adds a diver below projec 