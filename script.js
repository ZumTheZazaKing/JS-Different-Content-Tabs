const tabs = document.querySelectorAll('.tabs');
const text = document.querySelector('#text');
const image = document.querySelector('#image');

let previousTab = tabs[0];


function switchTab(){

    console.log(this.getAttribute('id'));

    let tabType = this.getAttribute('id');

    this.style.backgroundColor = 'crimson';

    this.style.color = 'white';

    previousTab.style.backgroundColor = 'lightgrey';

    previousTab.style.color = 'black';

    previousTab = this;


    
    switch (tabType){

        case 'coffee':

            text.innerHTML = 
            
            "This is a background that shows a coffee symbol similar to Java\'s logo and it tells us<br>that programmers are technically tools for converting caffeine into code.";

            image.src = 'coffee.png';
            
            break;


        case 'command':

            text.innerHTML = 

            "This background wallpaper shows a simple message and a strange looking symbol below the text. It represents the command prompt.";
            
            image.src = 'command.jpg';
            
            break;

        case 'confess':

            text.innerHTML = 
            
            "This is a background wallpaper that shows of what the implemented code would be for an algorithm of exchanging phone numbers with a girl you like.";

            image.src = 'confess.jpg';

    }
    

}

tabs.forEach(tab => tab.addEventListener('click', switchTab));