var Links = {
  setColor: function(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i<alist.length){
//        alist[i].style.color = 'powderblue'; # 'powerblue'삭제하고 매개변수인 color로 대체
      alist[i].style.color =color;
      i = i + 1;
    }
  }
}
//    function LinksSetColor(color){
//      var alist = document.querySelectorAll('a');
//      var i = 0;
//      while(i<alist.length){
//        alist[i].style.color = 'powderblue'; # 'powerblue'삭제하고 매개변수인 color로 대체
//        alist[i].style.color =color;
//        i = i + 1;
//      }
//    }
// function BodySetColor(color), function BodySetBackgroundColor(color)를 객체화


var Body = {
  setColor: function(color){
//          target.style.color='white';  //target는 BodySetColor(color) 함수내에 소속되어 있지만, 아래 nightDayhandler()내에 변수이므로 taget 대신 document.querySelector('body')로 대체
      document.querySelector('body').style.color=color;
  },
  setBackgroundColor:function(color){
      document.querySelector('body').style.backgroundColor=color;
  }
}
/*
function BodySetColor(color){
    target.style.color='white';  //target는 BodySetColor(color) 함수내에 소속되어 있지만, 아래 nightDayhandler()내에 변수이므로 taget 대신 document.querySelector('body')로 대체
    document.querySelector('body').style.color=color;
}


function BodySetBackgroundColor(color){
    document.querySelector('body').style.backgroundColor=color;
}
*/
function nightDayHandler(self){
var target = document.querySelector('body');
if(self.value==='night'){
//    target.style.backgroundColor='black';
// >   Body.setBackgroundColor('black') //객체화
  Body.setBackgroundColor('black')
//    target.style.color='white';
// >  Body.setColor('white')  //객체화
  Body.setColor('white');   //BodySetColor(함수호출) 매걔변수 인자로 white
  self.value='day';
/*
  var alist = document.querySelectorAll('a');
  var i = 0;
  while(i<alist.length){
    alist[i].style.color = 'powderblue';
    i = i + 1;
  }
*/
//      setColor(powderblue);   //위코드 삭제하고 대신 setColor함수에 매개변수 color에 powderblue을 넣어 함수호출
   Links.setColor('powderblue'); //함수명 중복 가능성 피하고 보다 명확히 하기위해 setColor()를 LinksSetColor()로 변경


} else{
//    target.style.backgroundColor='white';
// >    Body.setBackgroundColor('white')  // 객체화
  Body.setBackgroundColor('white');
//      target.style.color='black';
// >       Body.setColor('black')  //객체화
  Body.setColor('black'); //BodySetColor(함수호출) 매걔변수 인자로 black
  self.value='night';
/*
  var alist = document.querySelectorAll('a');
  var i = 0;
  while(i<alist.length){
    alist[i].style.color = 'blue';
    i = i + 1;
  }
*/
//     setColor(blue);  // 위와 마찬가지로 위코드 삭제하고 대신 setColor함수에 매개변수 color에 blue을 넣어 함수호출
    Links.setColor('blue');  //함수명 중복 가능성 피하고 보다 명확히 하기위해 setColor()를 LinksSetColor()로 변경
}
}
