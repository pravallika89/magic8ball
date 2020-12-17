// Creating img tag inside Div tag
var elem=document.createElement("img");
elem.setAttribute("src","img/start.jpg");
elem.setAttribute("height","300");
elem.setAttribute("width","300");
var img=document.getElementById("answers").appendChild(elem);
// img.style.display="none";
// img.setAttribute("id","answerImg");
// display random magic 8 ball image
var ask= document.getElementById("eight-ball");
var question=document.getElementById("question");
console.log(ask);

ask.addEventListener("click",function(){
  
  if(question.value.length < 1){
    alert("Enter a Question");
  }else {
    var imgs = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg','img/4.jpg','img/5.jpg','img/6.jpg','img/7.jpg','img/8.jpg','img/9.jpg','img/10.jpg','img/11.jpg','img/12.jpg','img/13.jpg','img/14.jpg','img/15.jpg','img/16.jpg','img/17.jpg','img/18.jpg','img/19.jpg','img/20.jpg'];
  
   const randomNumber = Math.floor(Math.random()* imgs.length);
  img.src = imgs[randomNumber];
  document.getElementById("question-text").innerHTML= 'Your Question:' + question.value;
  // img.style.display="inline";
  question.style.display="none";
  document.getElementById("info").style.display="none";
  ask.style.display="none";
  };
});



