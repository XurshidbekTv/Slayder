const box=document.querySelectorAll('#box-img');
const ali=document.querySelector("#ali");
const count=document.querySelector('#count')
const back=document.querySelector('#back');
const next=document.querySelector('#next');

box.forEach((item)=>{
    item.style.display='none'
})
let a=9;
a.style='font-weight:400';

let i=1;
count.style='font-weight:bold; font-size:large;'
count.innerHTML=`0${i}/${a}`
function boshqaruv(){
    box[i].style.display='flex';
    next.addEventListener('click',()=>{
        box[i].style.display='none';
       if(i<9){
        count.innerHTML=`0${++i}/${a}`
    
       }else{
        i=1;
        count.innerHTML=`0${i}/${a}`
       }
       box[i].style.display='flex';
       console.log(i)
    })
    
    back.addEventListener('click',()=>{
        box[i].style.display='none';
        if(i>1){
            count.innerHTML=`0${--i}/${a}`;
           
        }else{
            i=9;
            count.innerHTML=`0${i}/${a}`;
        }
        box[i].style.display='flex';
        
       
    })
}
boshqaruv();