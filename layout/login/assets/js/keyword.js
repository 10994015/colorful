var keywordcourseList = document.querySelector('.courseList>h1');
var courseList = document.getElementsByClassName('courseList')[0];
var keyword = document.getElementsByClassName('keyword')[0];

courseList.addEventListener("mouseover",()=>{
    keyword.style.display="flex";
});

courseList.addEventListener("mouseout",()=>{
    keyword.style.display="none";
})
