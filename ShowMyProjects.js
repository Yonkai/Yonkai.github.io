$(document).ready(function(){
    $(".projects").click(function(){
       $(".sub-header").eq(1).children().toggle();
       $(".sub-header").eq(2).children().toggle();
       $(".sub-header").eq(3).children().toggle();
       $(".project-names").children().toggle();
       $(".projects").text("Projects");
       $(".toggle, .textForSubheadingsHidden").toggleClass("toggle textForSubheadingsHidden");
        // Multiline String using EC6 Backtics.
         $(".innerText").html(` <p>
            <a href="yonkai.github.io/Clue emulator">"Cat, Dog, Bird":</a><br/><br/>
            This is a basic website using HTML and CSS that implements the basic principles of responsive<br/>
            design.<br /><br/>
            Stack: HTML,CSS
            <br /><br/>
            
	        <a href="yonkai.github.io/Clue emulator">"Clue Scroll Emulator":</a><br/><br/>
            Emulator for an online video game that models in-game reward generation<br/>
            into real money.<br /><br/>
            Stack: HTML, CSS, Vanilla JS, JQuery, Responsive Design
            <br /><br/>
            
            "This Website":<br/><br/>
            I use this website in order to host my portfolio and other stuff. You're using it right now. Hello there! <br/><br/>
            Stack: HTML, CSS, Vanilla JS, JQuery, Canvas
            <br /><br/>

            <!-- Add pagination latter -->
            
         
        </p>`);
          
        
    });
});


// TODO:
// Make hyperlinks more readable.
