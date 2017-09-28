$(document).ready(function(){
    $(".about").click(function(){
       $(".sub-header").eq(1).children().toggle();
       $(".sub-header").eq(2).children().toggle();
       $(".sub-header").eq(3).children().toggle();
       $(".project-names").children().toggle();
       $(".projects").text("About");
          $(".toggle, .textForSubheadingsHidden").toggleClass("toggle textForSubheadingsHidden");
      // Multiline String using ES6 Backtics.
         $(".innerText").html(` <p class="aboutme">
    Hey! I'm Frank, I have recently fell in love <br>
with all things Web. Dev. and have been learning it for about 9 months <br> 
I am currently going for an associates in C.S.<br> 
        </p>`);
    });
});
// Self-note: format in same way as showProjects.
