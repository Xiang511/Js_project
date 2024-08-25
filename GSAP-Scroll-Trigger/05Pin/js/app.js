gsap.registerPlugin(ScrollTrigger);
gsap.to(".square", {
    x:1000,
    // scale:2,
    duration:8,       //持續時間
    scrollTrigger: {
        
        trigger: ".square2" ,  //觸發的元素
        start:"top 80%",
        end:"top 40%",
        toggleActions:"restart none none none ",               //觸發時的動作

        // scrub: true,  //滾動時是否緩動
        scrub: 4,  //滾動時是否緩動



        // pin:true, //固定元素
        pin:".square", //固定元素

        pinSpacing:false,  //固定元素時是否保留空間
        // pinSpacing:true,  //固定元素時是否保留空間




        markers:true,  //顯示觸發點
        // markers:{
        //     // startColor:"purple",
        //     // endColor:"fuchsia",
        //     // fontSize:"4rem",
        //     // indent:200,
        // }   
    }
});
