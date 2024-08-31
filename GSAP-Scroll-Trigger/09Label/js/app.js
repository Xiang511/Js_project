gsap.registerPlugin(ScrollTrigger);
// 操作多个动画


// gsap.to(".box", {x:500,duration:2});
// gsap.to(".box", {y:200,duration:3,delay:2});
// gsap.to(".box", {x:0,duration:2,delay:5});

//解決不用一個個處理動畫的延遲時間
let tl = gsap.timeline();

tl.to(".box", {x:500,duration:5});
tl.to(".box", {y:200,duration:5});
// .add("rotate")                第二步驟
// tl.to(".box", {rotate:90,repeat:2,ease:"bounce"})第二步驟
tl.to(".box", {rotate:90,repeat:2,ease:"elastic"});

// tl.play("rotate")第二步驟

tl.addLabel("rotate",10)// 第三步驟 在第幾秒執行
tl.play("rotate")    //第三步驟







// 第一步驟
// ScrollTrigger.create({
//     animation:tl,
//     trigger:".box",
//     start:"top center",
//     markers:true,
// })