$(document).ready(function(){
    $(".about").click(function(){
       $(".sub-header").eq(1).children().toggle();
       $(".sub-header").eq(2).children().toggle();
       $(".sub-header").eq(3).children().toggle();
       $(".project-names").children().toggle();
       $(".projects").text("About");
          $(".toggle, .textForSubheadingsHidden").toggleClass("toggle textForSubheadingsHidden");
      // Multiline String using EC6 Backtics.
         $(".innerText").html(` <p>
    Hey! I'm Frank, I have recently fell in love <br>
with programming and web development in particular. I <br> 
have been learning and applying it seriously for <br> 
about 7 months now. I am currently studying Computer <br>
Networking Technology and Computer Science, I am <br> 
set to graduate with those two associates <br>in a year.
        </p>`);
    });
});
// Self-note: format in same way as showProjects
