const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
gsap.timeline
var tl=gsap.timeline()

tl.from(
    "#page1",{
        y:"100vh",
        duration:1,
        delay:1
    }
)