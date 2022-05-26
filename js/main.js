 const toggler = document.querySelector(".nav__toggler");
 const navbar = document.querySelector(".nav");
 toggler.addEventListener("click", (e) => {
   navbar.classList.toggle("nav__expanded");
 });

const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    const targeTabContent = document.querySelector(`#${tab.dataset.tabTarget}`);

    //REMOVE PREVIOUS CLASSES
    tabs.forEach((tab) => tab.classList.remove("active"));
    tabContents.forEach((tabContent) => tabContent.classList.remove("active"));

    //ADD NEW ACTIVE CLASSES
    tab.classList.add("active");
    targeTabContent.classList.add("active");
  });
});
// ------------------------------
const heartI=document.querySelectorAll(".slide__details .slide__icon .fa-heart")
const numberHeart=document.querySelectorAll(".slide__details .slide__icon .spanHeart")
const containerHeart=document.querySelectorAll(".slide__details .slide__icon .containerHeart");
let newNum=0;
 heartI.forEach((e)=>{
   e.addEventListener("click",()=>{
     e.classList.toggle("heart")
     const classList=e.classList; 
     const spanHeart=e.nextElementSibling;   
       if(classList.contains("heart")){
         
         newNum=Number(spanHeart.innerHTML)+1;
         spanHeart.innerHTML=newNum;
       }
       else{
         newNum=Number(spanHeart.innerHTML)-1;
         spanHeart.innerHTML=newNum;
       }
   })
 })
  

  

