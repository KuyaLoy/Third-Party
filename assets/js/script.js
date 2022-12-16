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