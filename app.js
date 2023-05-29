const imgurl = document.querySelector('#img');
const txttop = document.querySelector('#text-on-top');
const txtbot = document.querySelector('#text-on-bot');
const btn = document.querySelector('button');
const mem_container = document.querySelector('.row');
let imgarray =[];
btn.addEventListener('click', function(e){
    e.preventDefault();
    
    console.log(e.target);
    imgarray.push(imgurl.value);
    
    makeMeme(imgurl.value, txttop.value, txtbot.value);
    imgurl.value ="";
    txttop.value ="";
    txtbot.value ="";
})

function makeMeme(img, top, bot){
   const memelist = document.createElement('div');
   memelist.classList.add("memelist");
   memelist.classList.add("col-sm-6");
   const img_ = document.createElement('img');
   img_.src = img;
   const top_tx = document.createElement('div');
   const bot_tx = document.createElement('div');
   const del_tx = document.createElement('div');
   top_tx.classList.add("top");
   top_tx.innerHTML = top.toUpperCase();
   bot_tx.classList.add("bot");
   bot_tx.innerHTML = bot.toUpperCase();
   del_tx.classList.add("delete");
   del_tx.innerHTML = "DELETE";
   del_tx.addEventListener('click', function(e){
   e.target.parentElement.remove();
   })

   memelist.appendChild(img_);
   memelist.appendChild(top_tx);
   memelist.appendChild(bot_tx);
   memelist.appendChild(del_tx);
   mem_container.appendChild(memelist);
}
//console.log(imgurl);

