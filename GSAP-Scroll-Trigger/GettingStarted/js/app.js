gsap.registerPlugin(ScrollTrigger);
gsap.to(".square", {
    x:700,
    duration:3,       //持續時間
    scrollTrigger: {
        trigger: ".square2"   //觸發的元素
    }
});
