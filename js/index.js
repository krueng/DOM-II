const mouseEvn = document.querySelectorAll('.img-content');
mouseEvn.forEach(el => {
    el.addEventListener('mouseover', event => {
        event.target.style.transform = 'scale(1.1)';
        event.target.style.transition = 'all .5s'
        event.stopPropagation();
    })

    el.addEventListener('mouseout', event => {
        event.target.style.transform = 'scale(1)';
        event.target.style.transition = 'all 3s'
    })
})

// creating shortcut for navigation, only active if the mouse is over the main-navigation
const mosOvrNav = document.querySelector('.nav-container');
document.addEventListener('keydown', navKey);

function navKey(e) {
    let isOnDiv = false;
    mosOvrNav.parentNode.matches(':hover') ? isOnDiv = true : isOnDiv = false;
    if (isOnDiv == true) {
        //console.log(` ${e.code}`);
        if (e.code === 'KeyA') {
            window.location.assign('about.html');
        } else if (e.code === 'KeyB') {
            window.location.assign('blog.html');
        } else if (e.code === 'KeyC') {
            window.location.assign('contact.html');
        } else if (e.code === 'KeyH') {
            window.location.assign('index.html');
        }
    }
}

//wheel section
let scale = 1;
const el = document.querySelectorAll('.destination p');
el.forEach(ele => {
    ele.onwheel = zoom;
    ele.addEventListener('wheel', zoom);
})

function zoom(event) {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
    // Apply scale transform
    // event.target.style.backgroundColor = 'grey';
    event.target.style.transform = `scale(${scale})`;
}
//load & focus
window.addEventListener('load', () => {
    document.querySelector('.nav a').focus();
        // alert('Thanks for your visit');
  });