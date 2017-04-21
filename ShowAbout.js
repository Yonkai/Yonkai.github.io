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
            About me... TODO </br> </br>     
        </p>`);
    });
});
// Self-note: format in same way as showProjects