const links = document.querySelectorAll('ul li');
const pages = document.querySelectorAll('.page');
const allBtns = document.querySelectorAll('.close-btn');
const send =document.querySelector('.btn')
  


let selectedPageBtn = "";
for(let i = 0; i < links.length; i++){
    links[i].addEventListener('click', function(event){
        event.preventDefault();
        for(let i = 0; i < pages.length; i++){
            pages[i].style.display = "none";
        }
        pages[i].style.display = "block";
        selectedPageBtn = i;
        document.querySelector('header').style.filter = "blur(2px)";
    });
}

for(let i = 0; i < allBtns.length; i++){
    allBtns[i].addEventListener('click', function(){
        allBtns[i].parentElement.style.display = "none";
        document.querySelector('header').style.filter = "blur(0px)";
    });
}
window.onorientationchange = function () {

    var orientation = window.orientation;

    // Look at the value of window.orientation:

    if (orientation === 0) {

        // device is in Portrait mode.

    } else if (orientation === 90) {

        // device is in Landscape mode. The screen is turned to the left.

        $('body').animate({
            scrollTop: '0'
        }, 0);

    } else if (orientation === -90) {

        // device is in Landscape mode. The screen is turned to the right.

        $('body').animate({
            scrollTop: '0'
        }, 0);

    }

};