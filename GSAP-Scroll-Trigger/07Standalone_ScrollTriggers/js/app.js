gsap.registerPlugin(ScrollTrigger);
// 建立獨立觸發器
//用於nav下拉時，讓nav變色

ScrollTrigger.create({
    trigger:".box",
    start:"top 80%",
    end:"top 50%",
    markers:true,
    toggleClass:"box-red",
    onUpdate: (self) => console.log(self),
})

// for example
// ScrollTrigger.create({
//     start:"top 6%",
//     trigger:".panel",
//     markers:true,
//     toggleClass:{"targets":"nav","className":"nav-active"},
// })