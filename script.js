// js-hamburger
// js-nav


const hamburger = document.querySelector('.js-hamburger')
const nav = document.querySelector('.js-navigation')
const hamburger__p = document.querySelector('.js-hamburger__p')
let hamburgerToggle = 1
//let hamburgerActive = false;

hamburger.addEventListener('click', () => {
    if (hamburgerToggle > 0) {
       nav.classList.add('active')
  } else {
      nav.classList.remove('active')
   }
   hamburgerToggle = hamburgerToggle * -1

})

 //   $(document).ready(function(){
//	  $('#hamburger').click(function(){
//		$(this).toggleClass('active');
//   	});
 //   });


 //   hamburger__p.addEventListener('click', () => {
 //   if(!hamburger__p) {
 //   hamburger__p.classList.add('active');
 //   hamburger__p = true;
//}   else {
 //   hamburger__p.classList.remove('active');
//    }
//    });