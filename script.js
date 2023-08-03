let sun = document.getElementById ('sun');
let shadow = document.getElementById ('shadow');
let samurai = document.getElementById ('samurai');
let title = document.getElementById ('title');

window.addEventListener ('scroll', function() {
    let value = this.window.scrollY;

    sun.style.marginTop = value * .3 + 'px';
    shadow.style.marginLeft = value * -.3 + 'px';
    title.style.marginLeft = value * -4 + 'px';
})