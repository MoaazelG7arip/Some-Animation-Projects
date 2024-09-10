
const lenis = new Lenis()
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})
gsap.ticker.lagSmoothing(0)


let background = document.querySelector('.bg')
document.querySelectorAll('[class*="background-"]').forEach((bg)=>{
    
    let speed = bg.getAttribute('data-speed')
    
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: background,
            scrub:true,
            start: 'top top',
        },
    });
    tl.to(bg, {
        y:20 * speed,
    },delay=0)
})
