var crse= document.querySelector("#cursor")
var blr= document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function(dets) {
    crse.style.left= dets.x +"px"
    crse.style.top= dets.y +"px"
    blr.style.left= dets.x -150+"px"
    blr.style.top= dets.y -150+"px"
    
});

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.45,
    height: "110px",
    scrollTrigger: {
        trigger: "#nav",
        scrub: 3,
        // markers: true,
        start:"top -5%",
        end:"top -5%"
    }
});
gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#nav",
        scroll:"body",
        scrub: 1,
        // markers: true,
        start:"top -5%",
        end:"top -10%"
    }
});

