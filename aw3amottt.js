
var logoutbut=document.querySelector('.akhr')
var ll=document.querySelector('.sts')
var username =localStorage.getItem("currentuser")
var elh2 =document.createElement("h2")

elh2.textContent=`Hello ${username}`
elh2.classList="text-center mb-3"
elh2.style.color='#17A2B8';
ll.appendChild(elh2)


logoutbut.addEventListener("click",function(){

localStorage.removeItem("currentuser")
window.location.href='index1.html'

})
