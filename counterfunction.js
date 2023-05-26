var counter = 0;
function count(){
    counter ++;
    document.querySelector('h1').innerHTML=counter;
    if(counter%10 ==0)
    alert(`counter now is ${counter}`);
}
document.addEventListener('DOMContentLoad', function(){
    document.querySelector('button').onclick=count;
})