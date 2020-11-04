const nav=document.querySelector('nav'); // navigation
const burgerBtn=document.querySelector('.burger-icon'); 
const allLinksNav=document.querySelectorAll('.nav-item');
const footerYear=document.querySelector('.footer-year');//footer year



// show navigation smaller display -------------------------------------------------

const showNav=()=>
{
    nav.classList.toggle('nav-active')
}

allLinksNav.forEach(el=>{
    el.addEventListener('click',()=>{
        nav.classList.remove('nav-active')
    })
})

//ADD background to navgiation -------------------------------------------------

function addBackground()
{
    if(window.scrollY>=100 & window.innerWidth>=772)
    {
        nav.classList.add('shadow-nav');
    }
    else
    {
        nav.classList.remove('shadow-nav');
    }
}
//dyanmic footer update
const newYear=()=>
{
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}


// All lisiners --------------------------------------------------


window.addEventListener('scroll', addBackground);
burgerBtn.addEventListener('click',showNav);
newYear();



// GASP ------------------------------

let ltStartPage=new TimelineMax({delay: .3});
ltStartPage.fromTo('.header-text-name',.5,{y:-200, opacity:0},{y:0,opacity:1},'main-header')
ltStartPage.fromTo('.header-btn-read',.5,{y:200,opacity:0},{y:0,opacity:1},'main-header')
ltStartPage.staggerFromTo('.nav-items li',1,{y:-100},{y:0},.2)


// let ltReactIcon=new TimelineMax({repeat: -1})
// ltReactIcon.to('.left-react',8,{rotation: 360,ease: Linear.easeNone},'rotation')
// ltReactIcon.to('.right-react',8,{rotation: -360,ease: Linear.easeNone},'rotation')