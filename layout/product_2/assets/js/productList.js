const btnA1 = document.querySelector('.productIllustrateBtnA1');
const btnA2 = document.querySelector('.productIllustrateBtnA2');
const btnA3 = document.querySelector('.productIllustrateBtnA3');

const content1 = document.querySelector('.productIllustrateContent1');
const content2 = document.querySelector('.productIllustrateContent2');
const content3 = document.querySelector('.productIllustrateContent3');

const bigImg = document.getElementById("productListBigImg");
const classImg = document.getElementsByClassName('productListSmallImg');
let classIdx = 0;

bigImg.src = classImg[0].src;
classImg[0].style.opacity = "1";
for(var i=0;i<classImg.length;i++){
	classImg[i].addEventListener("click",showImg);
}
function showImg(){
	bigImg.src = this.src;
	allHidn();
	this.style.opacity="1";
}
function allHidn(){
	for(var n=0;n<classImg.length;n++){
		classImg[n].style.opacity = ".5";
	}
}
btnA1.addEventListener("click",()=>{
	content1.style.display = "block";
	content2.style.display = "none";
	content3.style.display = "none";
	btnA1.style.background="#fff";
	btnA1.style.color="#333";
	btnA2.style.background="#F1F1F1";
	btnA2.style.color="#999";
	btnA3.style.background="#F1F1F1";
	btnA3.style.color="#999";
	btnA1.style.borderTop="3px #1484c4 solid";
	btnA2.style.borderTop="1px #ccc solid";
	btnA3.style.borderTop="1px #ccc solid";
})
btnA2.addEventListener("click",()=>{
	content1.style.display = "none";
	content2.style.display = "block";
	content3.style.display = "none";
	btnA1.style.background="#F1F1F1";
	btnA1.style.color="#999";
	btnA2.style.background="#fff";
	btnA2.style.color="#333";
	btnA3.style.background="#F1F1F1";
	btnA3.style.color="#999";
	btnA1.style.borderTop="1px #ccc solid";
	btnA2.style.borderTop="3px #1484c4 solid";
	btnA3.style.borderTop="1px #ccc solid";
})
btnA3.addEventListener("click",()=>{
	content1.style.display = "none";
	content2.style.display = "none";
	content3.style.display = "block";
	btnA1.style.background="#F1F1F1";
	btnA1.style.color="#999";
	btnA2.style.background="#F1F1F1";
	btnA2.style.color="#999";
	btnA3.style.background="#fff";
	btnA3.style.color="#333";
	btnA1.style.borderTop="1px #ccc solid";
	btnA2.style.borderTop="1px #ccc solid";
	btnA3.style.borderTop="3px #1484c4 solid";
})