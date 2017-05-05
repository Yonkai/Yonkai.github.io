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
            <a href="/CDB">"Cat, Dog, Bird":</a><br/><br/>
            Simple information website using HTML and CSS that implements some basic principles of responsive<br/>
            design.<br /><br/>
            Stack: HTML,CSS, Responsive Design
            <br /><br/>
            
	        <a href="/Clue emulator">"Clue Scroll Emulator":</a><br/><br/>
            Emulator for an online video game that models in-game reward generation, a process that usually<br/>
            takes 5-10 minutes in-game, but thousands can be done accurately here. <br /><br/>
            Stack: HTML, CSS, Vanilla JS, JQuery, Responsive Design,
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
