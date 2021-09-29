var picClass = document.getElementsByClassName("picClass");
var imgAll = document.getElementById("imgAll");
var clickLeft = document.getElementById("clickLeft");
var clickRight = document.getElementById("clickRight");
var imgBtnBox = document.getElementById("imgBtnBox");
var imgBtn = document.getElementsByClassName("imgBtn");
var pageIdx = 0;
var html="";
var timer = null;

clickRight.addEventListener("click",()=>{
	pageIdx++;
	if(pageIdx>picClass.length-1){
		pageIdx=0;
	}
	imgAll.style.transform = "translateX(-"+pageIdx+"00%)";
	clearColor();
	imgBtn[pageIdx].style.backgroundColor ="#EEC71C";
});
clickLeft.addEventListener("click",()=>{
	pageIdx--;
	if(pageIdx<0){
		pageIdx = picClass.length-1
	}
	imgAll.style.transform = "translateX(-"+pageIdx+"00%)";
	clearColor();
	imgBtn[pageIdx].style.backgroundColor ="#EEC71C";
	
});
for(var i=0;i<picClass.length;i++){
	html += '<a class="imgBtn imgBtn'+i+'"></a>'
}
imgBtnBox.innerHTML=html;
imgBtn[0].style.backgroundColor ="#EEC71C";

timer = setInterval(()=>{
	pageIdx++;
	if(pageIdx>picClass.length-1){
		pageIdx=0;
	}
	imgAll.style.transform = "translateX(-"+pageIdx+"00%)";
	clearColor();
	imgBtn[pageIdx].style.backgroundColor = "#EEC71C";
},5000)

function clearColor(){
	for(var n=0;n<picClass.length;n++){
		imgBtn[n].style.backgroundColor ="#fff";
	}
}

for(var m=0;m<picClass.length;m++){
	imgBtn[m].addEventListener("click",showBtn);
}
function showBtn(){
	pageIdx = Number(this.className.substr(13));
	console.log(pageIdx);
	
	clearColor();
	this.className
	this.style.backgroundColor = "#EEC71C";
	imgAll.style.transform = "translateX(-"+pageIdx+"00%)";
	
}