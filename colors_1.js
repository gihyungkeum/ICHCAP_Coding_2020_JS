var Links = {
  setColor: function(color){
//    var alist = document.querySelectorAll('a');
//     var i = 0;
//     while(i<alist.length){
//       alist[i].style.color =color;
//       i = i + 1;
//     }

    //   # ctrl + / 전체 주석처리(Tip)

      $('a').css('color', color);       //이 웹페이지 상 모든 <a> 태그를 jquery로 제어하겠다는 뜻. jquery css 검색
      }
    }

var Body = {
  setColor: function(color){
//        document.querySelector('body').style.color=color;
      $('body').css('color', color);
  },
  setBackgroundColor:function(color){
//        document.querySelector('body').style.backgroundColor=color;
      $('body').css('backgroundColor', color);
  }
}
function nightDayHandler(self){
var target = document.querySelector('body');
if(self.value==='night'){
  Body.setBackgroundColor('black')
  Body.setColor('white');   //BodySetColor(함수호출) 매걔변수 인자로 white
  self.value='day';
   Links.setColor('powderblue'); //함수명 중복 가능성 피하고 보다 명확히 하기위해 setColor()를 LinksSetColor()로 변경

} else{
  Body.setBackgroundColor('white');
  Body.setColor('black'); //BodySetColor(함수호출) 매걔변수 인자로 black
  self.value='night';
    Links.setColor('blue');  //함수명 중복 가능성 피하고 보다 명확히 하기위해 setColor()를 LinksSetColor()로 변경
}
}
