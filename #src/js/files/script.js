
/* Анимация */

		 function onEntry(entry) {
			entry.forEach(change => {
			  if (change.isIntersecting) {
				change.target.classList.add('element-show');} else {
					change.target.classList.remove('element-show')
				}
			});
		 }
		 
		 let options = {
			threshold: [0.5] };
		 let observer = new IntersectionObserver(onEntry, options);
		 let elements = document.querySelectorAll('.element_animation');
		 
		 for (let elm of elements) {
			observer.observe(elm);
		 };
		
/* Анимация */


/* Бургер */

$('.burger').on('click', () => {
   $('.burger').toggleClass('active');
   $('.mobile nav').toggleClass('open');
   $('.mobile__nav').toggleClass('show');
	$('body').toggleClass('_lock')
});


/* Бургер */

