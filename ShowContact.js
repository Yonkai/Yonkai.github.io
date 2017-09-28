$(document).ready(function(){
    $(".contact").click(function(){
       toggleSubHeaders();
       $(".project-names").children().toggle();
       $(".projects").text("Contact");
       $(".toggle, .textForSubheadingsHidden").toggleClass("toggle textForSubheadingsHidden");
       // Multiline String using ES6 Backtics.
         $(".innerText").html(` <p>
           I'll probably answer my phone.<br>
           
        </p>`);
    });
});
