new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: true,
    //스크롤 생기게 하는 명령
    navigation:true,
    // 네비게이터 위치
    navigationPosition: 'right',
    // 하이퍼링크
    anchors:['num0','num1','num2','num3','num4'],


afterLoad: function(origin, destination, direction){
    // destination 변수는 해당 section에 들어왔을때
    // origin 매개변수는 해당 section을 벗어났을때
    var origin = this;
    console.log(origin)
    // console.log(`원래섹션:${old_sec} 다음섹션:${new_sec} 방향:${direction}`)
    // 해당 섹션에 들어오면
    if(destination.index == 0){
        sec_in()
    }
    if(destination.index == 1){
        sec_in1()
    }
       // 해당섹션이 벗어날때
    if(origin.index == 1){
        sec_out()
    }
    if(destination.index == 2){
        sec_in2()
    }
    if(destination.index == 3){
        sec_in3()
    }
    if(destination.index == 4){
        sec_in4()
    }
}
});
    function sec_in(){
        // alert('서재연의 포토폴리오에 오신걸 환영합니다♥')
    }

    function sec_in1(){
    var tl = anime.timeline({
        easing: 'linear',
        duration: 500,
    });
    tl.add({
        targets: '.g1',
        height:'90%',
        delay: 1000
    })
    .add({
        targets: '.g2',
        height:'85%',
    })
    .add({
        targets: '.g3',
        height:'60%',
    })
    .add({
        targets: '.g4',
        height:'80%',
    })
    .add({
        targets: '.g5',
        height:'70%',
    })
    .add({
        targets: '.g6',
        height:'90%',
    })
    .add({
        targets: '.g7',
        height:'80%',
    })
    .add({
        targets: '.g8',
        height:'90%',
    })
}

function sec_out(){
    anime ({
        targets:'.gagein',
        height:0
    })
};

function sec_in2(){
    var tl = anime.timeline({
        easing: 'linear',
        duration: 500,
    });
    
    tl.add({
        targets: '.l1',
        width:'90%',
        delay: 1000
    })
    .add({
        targets: '.l2',
        width:'80%',
    })
    .add({
        targets: '.l3',
        width:'70%',
    })
    .add({
        targets: '.l4',
        width:'60%',
    })
    .add({
        targets: '.l5',
        width:'60%',
    })
    .add({
        targets: '.l6',
        width:'80%',
    })
    // .add({
    //     targets: '.l7',
    //     width:'85%',
    // })
    // .add({
    //     targets: '.l8',
    //     width:'85%',
    // })
}

    function sec_out(){
        anime ({
            targets:'.list_1',
            width:0
        })
    }

function sec_in3(){
}
function sec_in4(){
}



// 1. 문서객체 선택
let btn =document.querySelector('.btn_menu')
console.log(btn)
let nav = document.querySelector('nav')
console.log(nav)
let cover = document.querySelector('#cover')
console.log(cover)

// 2. 이벤트 발생
btn.addEventListener('click',function(){
    btn.classList.toggle('on')
    nav.classList.toggle('on')
    cover.classList.toggle('on')

});

// 섹션0 h1 애니메이션
anime({
    targets: '.svg1 path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutQuart',
    duration: 2000,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
});

Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });
