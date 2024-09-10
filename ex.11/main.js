
let words = ['Boldness', 'Clarity','Originality','Precision'];

let tl = gsap.timeline({
    repeat: -1,
});


words.forEach((word)=>{
    let innerTimeline = gsap.timeline({
        repeat: 1,
        yoyo: true,
        repeatDelay: 6
    })
    innerTimeline.to('.text', {
        text: word,
        duration: 2,
        onUpdate: ()=>{
            cursorTimeline.restart();
            cursorTimeline.pause();
        },
        onComplete: ()=>{
            cursorTimeline.play()
        }
    })
    tl.add(innerTimeline)
})

let cursorTimeline = gsap.timeline({
    repeat: -1,
    repeatDelay: .5,
});
cursorTimeline.fromTo(".cursor", {
    opacity: 1,
},{
    opacity: 0,
    delay: .5
})





animateBtn = (event)=>{

    let btn = document.querySelector('.work')
    let boundBtn = btn.getBoundingClientRect()
    let newX = ((event.clientX- boundBtn.left)/btn.offsetWidth - 0.5).toFixed(2);
    let newY = ((event.clientY- boundBtn.top)/btn.offsetHeight - 0.5).toFixed(2);

    let scaleBtnUp = 40;
    let scaleBtnTextUp = 80;

    gsap.to(".work", {
        x: newX * scaleBtnUp,
        y: newY * scaleBtnUp,
        duration: 1,
        ease: "power4.out",
    });

    gsap.to(".work .work-text", {
        x: newX * scaleBtnTextUp,
        y: newY * scaleBtnTextUp,
        duration: 1,
        ease: "power4.out",
    });
}

stopAnimateBtn = ()=>{
    gsap.to(".work", {
        x: 0,
        y: 0,
        duration: 1,
        ease: "elastic.out",
    });

    gsap.to(".work .work-text", {
        x: 0,
        y: 0,
        duration: 1,
        ease: "elastic.out"
    });  
}
