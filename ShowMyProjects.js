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
            "Cat, Dog, Bird":<br/><br/>
            This is a basic website using HTML and CSS that implements the basic principles of responsive<br/>
            design.<br /><br/>
            Stack: HTML,CSS
            <br /><br/>
            
            "Converter-35":<br/><br/>
            Calculator that uses an API in order to calculator the price of an online video games items<br/>
            into real money.<br /><br/>
            Stack: HTML, CSS, API, Vanilla JS
            <br /><br/>
            
             "This Website":<br/><br/>
            I use this website in order to host my portfolio and other stuff. You're using it right now. Hello there! <br/><br/>
            Stack: HTML, CSS, Vanilla JS, JQuery, Canvas
            <br /><br/>
            <!-- Add pagination latter -->
            
         
        </p>`);
          
        
    });
});

// Removes everything below the Projects Title and (TODO) adds a diver below proje


// 