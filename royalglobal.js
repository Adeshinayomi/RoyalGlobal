const nav= document.querySelector('#nav')
const btn=document.querySelector('#btn')
function changeBG(){
  var scrollVal=window.scrollY
  
  if(scrollVal < 380){
    nav.classList.remove('newbg')
  }else{
    nav.classList.add('newbg')
  }

}


window.addEventListener('scroll',changeBG)

// function changeAT(){
//   var scrolvalue=window.scrollX
  

//   if(scrolvalue>200){
//     btn.classList.add('btn-col')
//   }else{
//     btn.classList.remove('btn-col')
//   }
// }
// window.addEventListener('scroll',changeAT)


const ul=document.querySelector('.ul');
const bar=document.getElementById('bar');

bar.addEventListener('click', function(){
ul.classList.toggle('ul-new')
})