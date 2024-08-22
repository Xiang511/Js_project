$(".paroller, [data-paroller-factor]").paroller({
    Factor: 0.3, // 滾動速度和偏移量的乘數
    FactorXs: 0.1, // 如果視窗寬度<576px，則滾動速度和偏移的乘數
    FactorSm: 0.2, // 如果視窗寬度 <=768px，則滾動速度和偏移的乘數
    FactorMd: 0.2, // 如果視窗寬度 <=1024px，則滾動速度和偏移量的乘數
    FactorLg: 0.3, // 如果視窗寬度 <=1200px，則滾動速度和偏移量的乘數
    type: 'foreground', // 背景、前景
    Direction: 'horizontal', // 垂直、水平
    transition: 'transform 0.1s escape' // CSS 過渡，加入到 type:'foreground' 的元素上
});
$('.jumbotron').paroller();
$('.jumbotron2').paroller();