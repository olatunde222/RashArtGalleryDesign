// To get the current Year

function getYear() {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// Nav Menu

function openNav() {
  document.getElementById("munav").classList.toggle("menu_width");
  document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style");
}

// For Image Modal

// Document Ready Function: Ensures the code runs only after the DOM is fully loaded.
$(document).ready(function () {
  // Click Event Handler: Captures the data-bigimage attribute from the clicked element and stores it in $imageSrc.
  var $imageSrc;
  $(".concept_section .search-box").click(function () {
    $imageSrc = $(this).data("bigimage");
  });
  console.log($imageSrc);

  // Modal Shown Event: Sets the src attribute of the #image element to the captured $imageSrc when the modal is shown.
  $("#myModal").on("shown.bs.modal", function (e) {
    $("#image").attr("src", $imageSrc);
  });

  // Modal Hide Event: Resets the src attribute of the #image element to an empty string when the modal is hidden.
  $("#myModal").on("hide.bs.modal", function (e) {
    // Stop video
    $("#image").attr("src", "");
  });
});



// Owl Carousel Script
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  navText: [],
  autpplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      item: 1,
    },
    600: {
      item: 2,
    },
    1000: {
      item: 3,
    },
  },
});

// Google map script

function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(40.712775, -74.005973),
    zoom: 18,
  };

  var map = new google.maps.Map(document.getElementById("map"), mapProp);
}

// Navbar script

function openNav() {
  var nav = document.getElementById("myNav");
  if (nav.style.width === "100%") {
      nav.style.width = "0";
  } else {
      nav.style.width = "100%";
  }
}