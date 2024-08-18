gsap.registerPlugin(ScrollTrigger);
gsap.to(".square", {
    // x:700,
    duration:3,       //持續時間
    scrollTrigger: {
        
        trigger: ".square" ,  //觸發的元素
        // start:400   //距離視口的距離
        // start:"top center",  
        start:"top 30%",
        // end:"center 20%",  
        end:() => `+=${document.querySelector(".square").offsetHeight}`,  //結束的位置
        toggleClass:"red",  //觸發時變更原本的的class      
        markers:true,  //顯示觸發點
        // markers:{
        //     // startColor:"purple",
        //     // endColor:"fuchsia",
        //     // fontSize:"4rem",
        //     // indent:200,
        // }   
    }
});
