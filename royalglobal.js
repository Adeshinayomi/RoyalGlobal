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
const times=document.getElementById('times');

bar.addEventListener('click', function(){
ul.classList.toggle('ul-new')
})
times.addEventListener('click', function(){
  ul.classList.toggle('ul-new')
})


const slideIn=document.querySelectorAll('.slide-in');
const slideOption={
  root:null,
  threshold:0, 
  rootMargin:"0px",
};

const slideObserver= new IntersectionObserver(function(entries,slideObserver){
  entries.forEach(entry =>{
    if(!entry.isIntersecting){
      return;
    }else{
      entry.target.classList.add('show-slide');
      slideObserver.unobserve(entry.target);
    }
  })
},slideOption);

slideIn.forEach(slideIn =>{
  slideObserver.observe(slideIn);
});


const propCont=document.getElementById('prop-cont');
 
const premuim=document.getElementById('premuim');
const topDeal=document.getElementById('top-deal');
const forSale=document.getElementById('for-sale');
premuim.addEventListener('click',function(){
 propCont.innerHTML=`
        <div class="props-content" id="e">
          <div class="property-slider">
            <img src="images/RG_img26.avif" alt="">
            <p class="new">
              premuim <i class="fa fa-fire"></i>
            </p>
            <div class="p-txt">
               <p  class="txt">Abuja ajose park</p>
               <p class="price">$50,000</p>
               <div class="icon">
                  <i class="fa fa-bed">4</i>
                  <i class="fa fa-car">2</i> 
               </div>
            </div>
          </div>

          <div class="property-slider">
            <img src="images/RG_img27.avif" alt="">
            <p class="new">
             premuim<i class="fa fa-fire"></i>
            </p>
            <div class="p-txt">
              <p  class="txt">Banana Island</p>
              <p class="price">$200,000</p>
              <div class="icon">
                 <i class="fa fa-bed">5</i>
                 <i class="fa fa-car">4</i> 
              </div>
           </div>
          </div>

          <div class="property-slider">
            <img src="images/RG_img28.avif" alt="">
            <p class="new">
              Premium<i class="fa fa-fire"></i>
            </p>
            <div class="p-txt">
              <p  class="txt">Island beach</p>
              <p class="price">$50,000</p>
              <div class="icon">
                 <i class="fa fa-bed">5</i>
                 <i class="fa fa-car">2</i> 
              </div>
           </div>
          </div>

          <div class="property-slider">
            <img src="images/RG_img29.avif" alt="">
            <p class="new">
              premuim <i class="fa fa-fire"></i>
            </p>
            <div class="p-txt">
              <p  class="txt"> GRA</p>
              <p class="price">$80,000</p>
              <div class="icon">
                 <i class="fa fa-bed">4</i>
                 <i class="fa fa-car">2</i> 
              </div>
           </div>
          </div>

          <div class="property-slider">
            <img src="images/RG_img30.avif" alt="">
            <p class="new">
              Premium <i class="fa fa-fire"></i>
            </p>
            <div class="p-txt">
              <p  class="txt">Lekki Phase II</p>
              <p class="price">$150,000</p>
              <div class="icon">
                 <i class="fa fa-bed">4</i>
                 <i class="fa fa-car">1</i> 
              </div>
           </div>
          </div>

          <div class="property-slider">
            <img src="images/RG_img31.avif" alt="">
            <p class="new">
              premuim <i class="fa fa-fire"></i>
            </p>
            <div class="p-txt">
              <p  class="txt">Lekki Phase I</p>
              <p class="price">$90,000</p>
              <div class="icon">
                 <i class="fa fa-bed">4</i>
                 <i class="fa fa-car">2</i> 
              </div>
           </div>
          </div>

          <div class="property-slider">
            <img src="images/RG_img32.avif" alt="">
            <p class="new">
              premuim <i class="fa fa-fire"></i>
            </p>
            <div class="p-txt">
              <p  class="txt">victoria Island</p>
              <p class="price">$110,000</p>
              <div class="icon">
                 <i class="fa fa-bed">6</i>
                 <i class="fa fa-car">3</i> 
              </div>
           </div>
          </div>

          <div class="property-slider">
            <img src="images/RG_img33.avif" alt="">
            <p class="new">
              premuim<i class="fa fa-fire"></i>
            </p>
            <div class="p-txt">
              <p  class="txt">Arena</p>
              <p class="price">$40,000</p>
              <div class="icon">
                 <i class="fa fa-bed">2</i>
                 <i class="fa fa-car">1</i> 
              </div>
           </div>
          </div>

          <div class="property-slider">
            <img src="images/RG_img34.avif" alt="">
            <p class="new">
              premuim <i class="fa fa-fire"></i>
            </p>
            <div class="p-txt">
              <p  class="txt">Ikorodu Villa</p>
              <p class="price">$95,000</p>
              <div class="icon">
                 <i class="fa fa-bed">3</i>
                 <i class="fa fa-car">1</i> 
              </div>
           </div>
          </div>

          <div class="property-slider">
            <img src="images/RG_img35.avif" alt="">
            <p class="new">
              Premium <i class="fa fa-fire"></i>
            </p>
            <div class="p-txt">
              <p  class="txt">Lekki Phase I</p>
              <p class="price">$90,000</p>
              <div class="icon">
                 <i class="fa fa-bed">4</i>
                 <i class="fa fa-car">2</i> 
              </div>
           </div>
          </div>

          <div class="property-slider">
            <img src="images/RG_img36.avif" alt="">
            <p class="new">
              Premium<i class="fa fa-fire"></i>
            </p>
            <div class="p-txt">
              <p  class="txt">Lekki Phase I</p>
              <p class="price">$90,000</p>
              <div class="icon">
                 <i class="fa fa-bed">4</i>
                 <i class="fa fa-car">2</i> 
              </div>
           </div>
          </div>

          <div class="property-slider">
            <img src="images/RG_img37.avif" alt="">
            <p class="new">
              Premium <i class="fa fa-fire"></i>
            </p>
            <div class="p-txt">
              <p  class="txt">Lekki Phase I</p>
              <p class="price">$90,000</p>
              <div class="icon">
                 <i class="fa fa-bed">4</i>
                 <i class="fa fa-car">2</i> 
              </div>
           </div>
          </div>
        </div>`
        forSale.classList.remove('activebtn');
        premuim.classList.add('activebtn');
        topDeal.classList.remove('activebtn');
});

forSale.addEventListener('click',function(){
  propCont.innerHTML=`
        <div class="props-content"  >
          <div class="property-slider">
            <img src="images/RG_img9.avif" alt="">
            <p class="new">
              For sale <i class="fa fa-fire"></i>
            </p>
            <div class="p-txt">
              <p  class="txt">Lagos state HQ</p>
              <p class="price">$100,000</p>
              <div class="icon">
                 <i class="fa fa-bed">5</i>
                 <i class="fa fa-car">2</i> 
              </div>
           </div> 
          </div>

          <div class="property-slider">
            <img src="images/RG_img7.avif" alt="">
            <p class="new">
              For sale <i class="fa fa-fire"></i>
            </p>
            <div class="p-txt">
              <p  class="txt">island reservoir</p>
              <p class="price">$70,000</p>
              <div class="icon">
                 <i class="fa fa-bed">3</i>
                 <i class="fa fa-car">1</i> 
              </div>
           </div>
          </div>

          <div class="property-slider">
            <img src="images/RG_img6.avif" alt="">
            <p class="new">
              For sale <i class="fa fa-fire"></i>
            </p>
            <div class="p-txt">
              <p  class="txt">Benin city,villa</p>
              <p class="price">$80,000</p>
              <div class="icon">
                 <i class="fa fa-bed">2</i>
                 <i class="fa fa-car">1</i> 
              </div>
           </div>
          </div>

          <div class="property-slider">
            <img src="images/RG_img1.avif" alt="">
            <p class="new">
              For sale  <i class="fa fa-fire"></i>
            </p>
            <div class="p-txt">
              <p  class="txt">ikeja GRA city</p>
              <p class="price">$50,000</p>
              <div class="icon">
                 <i class="fa fa-bed">3</i>
                 <i class="fa fa-car">3</i> 
              </div>
           </div>
          </div>

          <div class="property-slider">
            <img src="images/RG_img5.avif" alt="">
            <p class="new">
              For sale  <i class="fa fa-fire"></i>
            </p>
            <div class="p-txt">
              <p  class="txt">Abulegba ilepo park</p>
              <p class="price">$60,000</p>
              <div class="icon">
                 <i class="fa fa-bed">4</i>
                 <i class="fa fa-car">1</i> 
              </div>
           </div>
          </div>

          <div class="property-slider">
            <img src="images/RG_img20.avif" alt="">
            <p class="new">
              For sale  <i class="fa fa-fire"></i>
            </p>
            <div class="p-txt">
              <p  class="txt">Chidi Estate</p>
              <p class="price">$40,000</p>
              <div class="icon">
                 <i class="fa fa-bed">3</i>
                 <i class="fa fa-car">1</i> 
              </div>
           </div>
          </div>
        </div>
      </div>
     </section>

     `
     forSale.classList.add('activebtn');
     premuim.classList.remove('activebtn');
     topDeal.classList.remove('activebtn');

});

topDeal.addEventListener('click',function(){
  propCont.innerHTML=`
        <div class="props-content" id="">
          <div class="property-slider">
            <img src="images/RG_img38.avif" alt="">
            <p class="new">
             Top Deal <i class="fa fa-fire"></i>
            </p>
            <div class="p-txt">
              <p  class="txt">Ikoyi villa</p>
              <p class="price">$50,000</p>
              <div class="icon">
                 <i class="fa fa-bed">3</i>
                 <i class="fa fa-car">1</i> 
              </div>
           </div>
          </div>

          <div class="property-slider">
            <img src="images/RG_img15.avif" alt="">
            <p class="new">
              Top Deal<i class="fa fa-fire"></i>
            </p>
            <div class="p-txt">
              <p  class="txt">Quilox Estate</p>
              <p class="price">$60,000</p>
              <div class="icon">
                 <i class="fa fa-bed">5</i>
                 <i class="fa fa-car">3</i> 
              </div>
           </div>
          </div>

          <div class="property-slider">
            <img src="images/RG_img14.avif" alt="">
            <p class="new">
              Top deal <i class="fa fa-fire"></i>
            </p>
            <div class="p-txt">
              <p  class="txt">Ogun state</p>
              <p class="price">$55,000</p>
              <div class="icon">
                 <i class="fa fa-bed">4</i>
                 <i class="fa fa-car">2</i> 
              </div>
           </div>
          </div>

          <div class="property-slider">
            <img src="images/RG_img12.avif" alt="">
            <p class="new">
              Top deal <i class="fa fa-fire"></i>
            </p>
            <div class="p-txt">
              <p  class="txt">Surelere Street</p>
              <p class="price">$70,000</p>
              <div class="icon">
                 <i class="fa fa-bed">5</i>
                 <i class="fa fa-car">2</i> 
              </div>
           </div>
          </div>

          <div class="property-slider">
            <img src="images/RG_img11.avif" alt="">
            <p class="new">
              Top Deal <i class="fa fa-fire"></i>
            </p>
            <div class="p-txt">
              <p  class="txt">Abuja GRA</p>
              <p class="price">$85,000</p>
              <div class="icon">
                 <i class="fa fa-bed">3</i>
                 <i class="fa fa-car">1</i> 
              </div>
           </div>
          </div>

          <div class="property-slider">
            <img src="images/RG_img10.avif" alt="">
            <p class="new">
              Top Deal<i class="fa fa-fire"></i>
            </p>
            <div class="p-txt">
              <p  class="txt">  Port-harcout city</p>
              <p class="price">$50,000</p>
              <div class="icon">
                 <i class="fa fa-bed">4</i>
                 <i class="fa fa-car">2</i> 
              </div>
           </div>
          </div>
        </div>`

        forSale.classList.remove('activebtn');
        premuim.classList.remove('activebtn');
        topDeal.classList.add('activebtn');
})


const array=[
  {
    txt:'Great experience with Royal Global! Their agents were knowledgeable and helpful throughout the entire home buying process.',
    person:'by matin odegard',

  },
  {
    txt:'I was impressed by Royal Global expertise in the local market. They helped me find my dream home.',
    person:'by mike adenuga',
  },
  {
    txt:'Royal Global has a talented team of professionals who truly care about their clients.I highly recommend them!.',
    person:'by femi otedola',
  },
  {
    txt:'Royal Global went beyond and above to ensure a smooth transaction. Their communication is top notch.',
    person:'by matin braithwaite',
  }
]
const text=document.getElementById('text');
const pupil=document.getElementById('person');
const bot1=document.getElementById('bot-1');
const bot2=document.getElementById('bot-2');
const bot3=document.getElementById('bot-3');
const bot4=document.getElementById('bot-4');

bot1.addEventListener('click', function(){
  text.textContent=array[0].txt;
  pupil.textContent=array[0].person;
});
bot2.addEventListener('click', function(){
  text.textContent=array[1].txt;
  pupil.textContent=array[1].person;
});
bot3.addEventListener('click', function(){
  text.textContent=array[2].txt;
  pupil.textContent=array[2].person
})
bot4.addEventListener('click', function(){
  text.textContent=array[3].txt;
  pupil.textContent=array[3].person
})
