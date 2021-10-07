const memberTitle = document.querySelector(".member-title p");
const memberNavA = document.getElementsByClassName("memberNavA");
for(var i=0;i<memberNavA.length;i++){
    memberNavA[i].innerText;

    if(memberNavA[i].innerText===memberTitle.innerText){
        memberNavA[i].style.color="#1484c4";
    }
    
    
}