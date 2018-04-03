
var myImage = document.querySelector('img');
myImage.onclick = function (){
    var mySrc = myImage.getAttribute('src');
    if(mySrc == 'images/123.jpg'){
        myImage.setAttribute('src','images/234.jpg');
    }else if(mySrc == 'images/234.jpg'){
        myImage.setAttribute('src','images/345.jpg');
    }else{
        myImage.setAttribute('src','images/123.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
    var myName = prompt('请输入你的姓名');
    localStorage.setItem('name',myName);
    myHeading.innerHTML = '我的名字是' + myName;
}


if(!localStorage.getItem('name')){
    setUserName();
}else{
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = '我的名字是' + storedName;
}

myButton.onclick = function (){
    setUserName();
}