gsap.registerPlugin(ScrollTrigger);
gsap.to(".square", {
    x:1000,
    duration:8,       //持續時間
    scrollTrigger: {
        
        trigger: ".square" ,  //觸發的元素
        // start:400   //距離視口的距離
        // start:"top center",  
        start:"top 60%",
        // end:"center 20%",  
        end:"top 40%",
        
        // toggleActions:"restart reverse none none",               //觸發時的動作
        toggleActions:"restart pause resume complete ",               //觸發時的動作
        // toggleActions:"play none none none",                          //觸發時的動作 default:play pause resume reset
        // toggleActions:"OnEnter OnLeave OnEnterback OnLeaveback", /
        //     OnEnter: 碰到 start 開始動畫 => 可以設定 restart
        //     OnLeave: 碰到 end 開始動畫 => 可以設定 reverse pause
        //     OnEnterback: 碰到 end 開始動畫 => 可以設定 resume 
        //     OnLeaveback: 碰到 start 開始動畫 => 可以設定 reset complete  
        //     屬性都可以混合設定



        markers:true,  //顯示觸發點
        // markers:{
        //     // startColor:"purple",
        //     // endColor:"fuchsia",
        //     // fontSize:"4rem",
        //     // indent:200,
        // }   
    }
});
