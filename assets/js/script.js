$(".statue").hover(
  function () {
    $(this).toggleClass('hover');
    $('.photos-wrapper img:nth-child(1)').addClass('hover');
    $('.photos-wrapper img:nth-child(2)').addClass('hover2');
    $('.photos-wrapper img:nth-child(3)').addClass('hover');
    $('.photos-wrapper img:nth-child(4)').addClass('hover2');
    $('.bg-hover').addClass('hover');
  },
  function () {
    $(this).toggleClass('hover');
    $('.photos-wrapper img:nth-child(1)').removeClass('hover');
    $('.photos-wrapper img:nth-child(2)').removeClass('hover2');
    $('.photos-wrapper img:nth-child(3)').removeClass('hover');
    $('.photos-wrapper img:nth-child(4)').removeClass('hover2');
    $('.bg-hover').removeClass('hover');
  }
);

$('.opening span').click(function(){
  $('.opening').addClass('active');
  $('.main').removeClass('active');
  $('.opening span').fadeOut();
  myAudio.play();

  setTimeout(function() {
    $('.opening').hide();
  }, 1000);
});

// add plaay audio
var myAudio = document.getElementById("player");
var isPlaying = false;

function togglePlay() {
  isPlaying ? myAudio.pause() : myAudio.play();
};


const element = document.querySelector("main");

element.addEventListener('wheel', (event) => {
  event.preventDefault();

  element.scrollBy({
    left: event.deltaY < 0 ? -30 : 30,
    
  });
});




// $( window ).resize(function() {
//   if (window.matchMedia("(orientation: portrait)").matches) {
//     // you're in PORTRAIT mode
//     //alert('portrait');
//     $('html').css({
//       'height':' 100vw;',
//       '-webkit-transform':'rotate(90deg)',
//       '-moz-transform':'rotate(90deg)',
//       '-o-transform':'rotate(90deg)',
//       '-ms-transform':'rotate(90deg)',
//       'transform':'rotate(90deg)',
//     });
  
//     $('.please-open-landscape').addClass('active');

//     $('body').css('overflow','hidden');
//   }
  
//   if (window.matchMedia("(orientation: landscape)").matches) {
//     // you're in LANDSCAPE mode
//     //alert('landscape');
//     $('html').css({
//       '-webkit-transform':'rotate(0deg)',
//       '-moz-transform':'rotate(0deg)',
//       '-o-transform':'rotate(0deg)',
//       '-ms-transform':'rotate(0deg)',
//       'transform':'rotate(0deg)',
//     });
//     $('.please-open-landscape').removeClass('active');
//   }
// });
// if (window.matchMedia("(orientation: portrait)").matches) {
//   // you're in PORTRAIT mode
//   //alert('portrait');
//   $('body').css({
//     'height':' 100vw;',
//     '-webkit-transform':'rotate(90deg)',
//     '-moz-transform':'rotate(90deg)',
//     '-o-transform':'rotate(90deg)',
//     '-ms-transform':'rotate(90deg)',
//     'transform':'rotate(90deg)',
//   });

//   $('.please-open-landscape').addClass('active');
//   // $('main').hide();
//   // $('.opening').hide();
// }

// if (window.matchMedia("(orientation: landscape)").matches) {
//   // you're in LANDSCAPE mode
//   //alert('landscape');
//   $('body').css({
//     '-webkit-transform':'rotate(0deg)',
//     '-moz-transform':'rotate(0deg)',
//     '-o-transform':'rotate(0deg)',
//     '-ms-transform':'rotate(0deg)',
//     'transform':'rotate(0deg)',
//   });
//   $('.please-open-landscape').removeClass('active');
//   // $('main').show();
  
// }