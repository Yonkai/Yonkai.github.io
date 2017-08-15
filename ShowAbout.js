$(document).ready(function(){
    $(".about").click(function(){
       $(".sub-header").eq(1).children().toggle();
       $(".sub-header").eq(2).children().toggle();
       $(".sub-header").eq(3).children().toggle();
       $(".project-names").children().toggle();
       $(".projects").text("About");
          $(".toggle, .textForSubheadingsHidden").toggleClass("toggle textForSubheadingsHidden");
      // Multiline String using EC6 Backtics.
         $(".innerText").html(` <p class="aboutme">
    Hey! I'm Frank, I have recently fell in love <br>
with programming and web development in particular. I <br> 
have been learning and applying it seriously for <br> 
about 7 months now. I am currently studying Computer Science<br> 
set to graduate within a year with an associates.<br>
        </p>`);
    });
});
// Self-note: format in same way as showProjects.
