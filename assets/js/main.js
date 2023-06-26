const Toggle = document.querySelector('.sidenav_hamburger');
const hamburg = document.querySelector('.sidenav_hamburger');
const men = document.querySelector('.mobile-nav');

Toggle.addEventListener('click', function() {
   men.classList.toggle("menu-open");
   hamburg.classList.toggle("menu-open");
}); 



    /* ==================================================
            #  Quiz Carousel
         ===============================================*/
         $('#quiz-silder').owlCarousel({
          loop: false,
          margin: 30,
          nav: false,
          dots: false,
          autoplay:true,
          navText: [
              "<i class='bi-arrow-left'></i>",
              "<i class='bi-arrow-right'></i>"
          ],
          
          responsive: {
              0: {
                  items: 1
              },
              600: {
                  items: 2
              },
              1000: {
                  items: 4
              }
          }
      });



  
  /* <div class="owl-carousel">
  <!-- Carousel items here -->
</div>


<button id="owl-prev">Previous</button>
<button id="owl-next">Next</button> */



  