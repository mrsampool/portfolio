
/*
let element = document.getElementById('self');
element.onclick = function() { element.style.width = '50px' };
*/
let title = document.getElementById('title');
let subtitle = document.getElementById('subt');
let opener = document.getElementById('opener');
let mywork = document.getElementById('mywork');
let resume = document.getElementById('resume');
let reach = document.getElementById('reach');
let contact = document.getElementById('contact');

title.onclick = function() {
    title.style.backgroundColor = 'cadetblue';
    title.style.color = 'white';
    subtitle.style.fontWeight = '100';
    title.style.border = 'none';
    opener.style.opacity = '1';
    mywork.style.opacity = '1';
    title.style.margin = '1em auto';
}

mywork.onclick = function(){
    opener.style.transition = 'opacity 0.25s';
    mywork.style.transition = 'opacity 0.25s';
    opener.style.opacity = '0';
    mywork.style.opacity = '0';

    setTimeout(function(){
        opener.style.display = 'none';
        mywork.style.display = 'none';
        resume.style.display = 'block';

        setTimeout(function(){
            resume.style.paddingTop = '0';
        },10)
        
    },50)
    
}

let contactToggle = 0;

function showContact(){
    contact.style.transition = 'all 1s';
    contact.style.opacity = '1';
    reach.innerHTML = 'X';
}

function hideContact(){
    contact.style.opacity = '0';
        reach.innerHTML = 'Want to reach out?';
}

reach.onclick = function(){
    if (contactToggle == 0){
        showContact();
        contactToggle++;
    } else {
        hideContact();
        contactToggle--;
    }
}

