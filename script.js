$(document).ready(function(){
$(window).scroll(function(){
if(this.scrollY > 20){
$('.navbar').addClass("sticky");
}
else{
$('.navbar').removeClass("sticky");
}
});
//toggle menu/navbar
$('.menu-btn').click(function(){
$('.navbar .menu').toggleClass("active");
$('.menu-btn i').toggleClass("active");
});
});
document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });
