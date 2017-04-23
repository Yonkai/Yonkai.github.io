$(document).ready(function(){
    $(".contact").click(function(){
       $(".sub-header").eq(1).children().toggle();
       $(".sub-header").eq(2).children().toggle();
       $(".sub-header").eq(3).children().toggle();
       $(".project-names").children().toggle();
       $(".projects").text("Contact");
       $(".toggle, .textForSubheadingsHidden").toggleClass("toggle textForSubheadingsHidden");
       // Multiline String using EC6 Backtics.
         $(".innerText").html(` <p>
           I'll probably answer my phone.<br>
           
        </p>`);
    });
});
