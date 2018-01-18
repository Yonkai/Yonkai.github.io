$(document).ready(function(){
    $(".about").click(function(){
       toggleSubHeaders();
       $(".project-names").children().toggle();
       $(".projects").text("About");
          $(".toggle, .textForSubheadingsHidden").toggleClass("toggle textForSubheadingsHidden");
      // Multiline String using ES6 Backtics.
         $(".innerText").html(` <p class="aboutme">
    Hey! I'm Frank, I have recently fell in love <br>
    with all things Web. Dev. and computer science. I also like making <br> 
    <a href="https://codepen.io/Yonkai/#">chill animations.</a>
        </p>`);
    });
});

