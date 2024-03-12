function datasdesc(){
    var lectured = document.getElementById('lectured');
    if (lectured.style.display == "none"){
        lectured.style.display = "block";//changing the display to block
    }else{
        lectured.style.display = "none";
    }
}
function datasdesc1(){
    var lectured = document.getElementById('lectured1');
    if (lectured.style.display == "none"){
        lectured.style.display = "block";
    }else{
        lectured.style.display = "none";
    }
}
function datasdesc2(){
    var lectured = document.getElementById('lectured2');
    if (lectured.style.display == "none"){
        lectured.style.display = "block";
    }else{
        lectured.style.display = "none";
    }
}
function datasdesc3(){
    var lectured = document.getElementById('lectured3');
    if (lectured.style.display == "none"){
        lectured.style.display = "block";
    }else{
        lectured.style.display = "none";
    }
}
function paragraph1(){
    var para1 = document.getElementById('para1');
    var topic = document.getElementById('topic');
    var para2 = document.getElementById('para2');
    var topic1 = document.getElementById('topic1');
    var para3= document.getElementById('para3');
    var topic2 = document.getElementById('topic2');
    
    if (para1.style.display == "none" && topic.style.textDecorationLine == "none"){
        topic.style.textDecorationLine="underline"
        para1.style.display = "block";
        topic1.style.textDecorationLine = "none"
        para2.style.display = "none";
        topic2.style.textDecorationLine = "none"
        para3.style.display = "none";
        

    }else{
        topic.style.textDecorationLine = "none"
        para1.style.display = "none";
        
    }
}
function paragraph2(){
    var para2 = document.getElementById('para2');
    var topic1 = document.getElementById('topic1');
    var para1 = document.getElementById('para1');
    var topic = document.getElementById('topic');
    var para3= document.getElementById('para3');
    var topic2 = document.getElementById('topic2');
    
    if (para2.style.display == "none" && topic1.style.textDecorationLine == "none"){
        topic1.style.textDecorationLine="underline"
        para2.style.display = "block";
        topic2.style.textDecorationLine = "none"
        para3.style.display = "none";
        topic.style.textDecorationLine = "none"
        para1.style.display = "none";
        

    }else{
        topic1.style.textDecorationLine = "none"
        para2.style.display = "none";
        
    }
}
function paragraph3(){
    var para3= document.getElementById('para3');
    var topic2 = document.getElementById('topic2');
    var para1 = document.getElementById('para1');
    var topic = document.getElementById('topic');
    var para2 = document.getElementById('para2');
    var topic1 = document.getElementById('topic1');
    
    if (para3.style.display == "none" && topic2.style.textDecorationLine == "none"){
        topic2.style.textDecorationLine="underline"
        para3.style.display = "block";
        topic.style.textDecorationLine = "none"
        para1.style.display = "none";
        topic1.style.textDecorationLine = "none"
        para2.style.display = "none";
        
    }else{
        topic2.style.textDecorationLine = "none"
        para3.style.display = "none";
        
    }
}
