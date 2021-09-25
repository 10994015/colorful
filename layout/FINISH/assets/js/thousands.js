var thousands = document.getElementsByClassName("thousands");


for(var t=0;t<thousands.length;t++){
    thousands[t].innerText;
    var tNum = thousands[t].innerText;
    thousandsNum(tNum);

    thousands[t].innerText=newNumber;
    
    
}

function thousandsNum(num){
    var n = num + '';
    var numArr = n.trim().split('').reverse();
    var idx =0;
    var returnArr = [];
    numArr.forEach((item)=>{
        idx++;
        if(idx>3){
            idx = 1;
            returnArr.push(",");
        }
        returnArr.push(item);
    })
    newNumber = returnArr.reverse().join('');
    
    return newNumber;
    
    
}
