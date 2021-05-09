/**************************************************************
	
	Main Js Activation
	01. Preloader
	02. Menu
	03. Header Shadow 
	04. Pagepiling
	05. Carousels
	06. Forms
	__ End Js Activation

***************************************************************/

(function ($) {
  "use strict";

  /*-------------------------------------------------------------------------------
	  Preloader
	-------------------------------------------------------------------------------*/

  $(window).on("load", function () {
    if ($(".preloader").length) {
      $(".preloader").fadeOut("slow");
    }
  });
})($);
