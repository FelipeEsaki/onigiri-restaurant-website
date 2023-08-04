let sun = document.getElementById ('sun');
let shadow = document.getElementById ('shadow');
let samurai = document.getElementById ('samurai');
let title = document.getElementById ('title');
let menu = document.getElementById ('menu')

window.addEventListener ('scroll', function() {
    let value = this.window.scrollY;

    sun.style.marginTop = value * .3 + 'px';
    shadow.style.marginLeft = value * -.3 + 'px';
    title.style.marginRight = value * 4 + 'px';
    title.style.marginTop = value * 0.5 + 'px';
})

function clickMenu() {
    if (menu.style.display == 'none') {
        menu.style.display = 'flex'
    } 
    else {
        menu.style.display = 'none'
    }

}



let count = 1;
document.getElementById ('radio1').checked = true;

setInterval( function() {
    nextImage();
}, 4000)

function nextImage (){
    count++;
    if (count>2){
        count = 1;
    }

    document.getElementById ('radio' + count).checked = true;
}