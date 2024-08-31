gsap.registerPlugin(ScrollTrigger);
// 操作多个动画


// gsap.to(".box", {x:500,duration:2});
// gsap.to(".box", {y:200,duration:3,delay:2});
// gsap.to(".box", {x:0,duration:2,delay:5});

//解決不用一個個處理動畫的延遲時間
// let tl = gsap.timeline();

// tl.to(".box", {x:500,duration:5});
// tl.to(".box", {y:200,duration:2});
// tl.to(".box", {x:0,duration:3});




let tl = gsap.timeline({
    scrollTrigger:{
        trigger:".box",
        markers:true,
        start:"top 80%",
        end:"top 30%",
        scrub:1,   // 綁定網頁卷軸
        // pin:true,
        // anticipatePin:1
    }
});

tl.to(".box", {x:500,duration:5});
tl.to(".box", {y:200,duration:2});
tl.to(".box", {x:0,duration:3});