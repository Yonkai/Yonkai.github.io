$(document).ready(function(){
    $(".projects").click(function(){
       $(".sub-header").eq(1).children().toggle();
       $(".sub-header").eq(2).children().toggle();
       $(".sub-header").eq(3).children().toggle();
       $(".project-names").children().toggle();
       $(".projects").text("Projects");
       $(".toggle, .textForSubheadingsHidden").toggleClass("toggle textForSubheadingsHidden");
        // Multiline String using ES6 Backtics.
         $(".innerText").html(` <p>
			<a href="/Iconblog" target="_blank">"Icon_Blog":</a><br/><br/>
            This is a basic micro-blog website with an easily interchangeable template and simplisitic <br/>
             design.<br /><br/>
            Stack: HTML,CSS, Google Fonts, Font Awesome
            <br /><br/>
            
           	<a href="/Clue emulator"  target="_blank">"Clue Scroll Emulator":</a><br/><br/>
            Emulator for an online video game that models in-game reward generation from reverse engineered<br/>
            drop tables.<br /><br/>
            Stack: HTML, CSS, Vanilla JS, JQuery, Responsive Design
            <br /><br/>
            
            "This Website":<br/><br/>
            I use this website in order to host my portfolio and other stuff. You're using it right now. Hello there! <br/><br/>
            Stack: HTML, CSS, Vanilla JS, JQuery, Canvas
            <br /><br/>
            <!-- Add pagination if needed. -->
      
       		</p>`);
          
        
    });
});


// TODO:
// Make hyperlinks more readable.
