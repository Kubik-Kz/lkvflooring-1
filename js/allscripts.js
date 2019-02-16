$(".form-info").focusin(function(){
        $(".span1").addClass("line-width");
    });
    $(".form-info").focusout(function(){
        $(".span1").removeClass("line-width");
    });
    
        $(".form-info1").focusin(function(){
        $(".span2").addClass("line-width");
    });
    $(".form-info1").focusout(function(){
        $(".span2").removeClass("line-width");
    });


 TweenMax.to(".overlay h2", 2, {
        opacity: 0,
        y: -60,
        ease: Expo.easeInOut
    });
    TweenMax.to(".overlay", 2, {
         delay: 1,
         top: "-150vh" ,
         ease: Expo.easeInOut
    });
    TweenMax.to(".ovarlay-2", 2, {
         delay: 1.4,
         top: "-150vh" ,
         ease: Expo.easeInOut
    }); 
    TweenMax.from(".line-block1", 2, {
         delay: 2,
         height: "0%" ,
         ease: Expo.easeInOut
    });
     TweenMax.from(".line-block2", 2, {
         delay: 2,
         height: "0%" ,
         ease: Expo.easeInOut
    });
     TweenMax.from(".line-block3", 2, {
         delay: 2,
         height: "0%" ,
         ease: Expo.easeInOut
    });
     TweenMax.from(".line-block4", 2, {
         delay: 2,
         height: "0%" ,
         ease: Expo.easeInOut
    });
     TweenMax.from(".line-block5", 2, {
         delay: 2,
         height: "0%" ,
         ease: Expo.easeInOut
    }); 
    TweenMax.from(".btn-chat", 2, {
         delay: 2,
         opacity: 0,
         y: 50,
         ease: Expo.easeInOut
    });  
    TweenMax.from(".float1 p", 2, {
         delay: 2.2,
         opacity: 0,
         y: 50,
         ease: Expo.easeInOut
    }); 
    TweenMax.from(".float1 h1", 2, {
         delay: 2.4,
         opacity: 0,
         y: 50,
         ease: Expo.easeInOut
    }); 
    TweenMax.from(".header-nav", 2, {
         delay: 2.2,
         opacity: 0,
         y: -50,
         ease: Expo.easeInOut
    });  
    TweenMax.from(".social li:nth-child(1)", 2, {
         delay: 2.2,
         opacity: 0,
         y: 20,
         ease: Expo.easeInOut
    }); 
    TweenMax.from(".social li:nth-child(3)", 2, {
         delay: 2.2,
         opacity: 0,
         y: -20,
         ease: Expo.easeInOut
    });
 TweenMax.from(".social li:nth-child(2)", 2, {
         delay: 2.2,
         opacity: 0,
         ease: Expo.easeInOut
    });

TweenMax.from(".social1 li:nth-child(1)", 2, {
         delay: 2.2,
         opacity: 0,
         y: 20,
         ease: Expo.easeInOut
    }); 
    TweenMax.from(".social1 li:nth-child(3)", 2, {
         delay: 2.2,
         opacity: 0,
         y: -20,
         ease: Expo.easeInOut
    });
 TweenMax.from(".social1 li:nth-child(2)", 2, {
         delay: 2.2,
         opacity: 0,
         ease: Expo.easeInOut
    });TweenMax.from(".float__kind", 2, {
         delay: 2.2,
         opacity: 0,
         ease: Expo.easeInOut
    });
    TweenMax.from(".greens", 2, {
         delay: 2.2,
         opacity: 0,
         x: -50,
         ease: Expo.easeInOut
    }); 
    TweenMax.from(".float2 div:nth-child(1)", 2, {
         delay: 2.2,
         opacity: 0,
         y: -150,
         ease: Expo.easeInOut
    }); TweenMax.from(".text__floor", 2, {
         delay: 2.2,
         opacity: 0,
         y: -150,
         ease: Expo.easeInOut
    }); 
    TweenMax.from(".float2 div:nth-child(2)", 2, {
         delay: 2.2,
         opacity: 0,
         y: 150,
         ease: Expo.easeInOut
    });

var rellax = new Rellax('.rellax'); 

$(".form-success-close").click(function(){
   $(".success").addClass("close-form"); 
});

