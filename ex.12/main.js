
const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)


moving = (e)=>{
    x = e.clientX;
    y = e.clientY;

    gsap.to(".cursor", {
        top: y + window.scrollY,
        left: x,
        duration: .3,
        ease: "easeIn",
        opacity: 1
    });
}
unMoving = ()=>{
    gsap.to(".cursor", {
        duration: .5,
        opacity: 0
    });
}

let entries = document.querySelectorAll(".entry");

entries.forEach((entry)=>{
    let meta = entry.querySelector(".meta");
    let media = entry.querySelector(".media");

    gsap.set(meta , {
        opacity: 0,
        xPercent: -100,
    });

    gsap.set(media , {
        opacity: 0,
        xPercent: 100,
    });

    let tl = gsap.timeline({
        scrollTrigger:{
            trigger: entry,
            start: "top 90%",
            end : "bottom 70%",
            scrub:true
        }
    });
    tl.to(meta , {
        opacity: 1,
        xPercent: 0,
    })

    tl.to(media , {
        opacity: 1,
        xPercent: 0,
    },delay = 0)
})

gsap.fromTo(
   "header .content",
    {
        opacity: 0,
        yPercent: -10
    },
    {
        opacity: 1,
        yPercent: 0,
        duration: 2,
        ease: "easeIn",
    }
);


gsap.fromTo(
   "footer .content",
    {
        opacity: 0,
        yPercent: 40
    },
    {
        scrollTrigger: {
            trigger:'footer .content',
            start: "top center",
        },
        opacity: 1,
        yPercent: 0,
        ease: "easeIn",
    }
);