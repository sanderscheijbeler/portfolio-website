$(document).ready(function(){

// Menu knop toggle
  $('.cv-menu-knop').on('click', function(){
    console.log("klik");
    $('.cv-header').toggleClass('activated', 3000);
    $('.cv-body').toggleClass('hidden');
  });

// Animatie voor progress bars
//   $(function() {
//   $('.progress-bar').each(function() {
//     var bar_value = $(this).attr('aria-valuenow') + '%';
//     $(this).animate({ width: bar_value }, { duration: 2000, easing: 'easeOutCirc' });
//   });
// });


});
