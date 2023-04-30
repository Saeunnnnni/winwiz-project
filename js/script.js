$(".gnb-list").on("mouseover", function () {
  document.querySelector(".subCover").classList.add("down");
  document.querySelector(".black-bg").classList.add("show");
  document.querySelector(".black-bg").style.height = "100%";
  document.querySelector(".gnb").style.height = "630px";
});

$(".gnb-list").on("mouseleave", function () {
  document.querySelector(".subCover").classList.remove("down");
  document.querySelectorAll(".sub-gnb").forEach((e) => {
    document.querySelector(".black-bg").classList.remove("show");
  });
  document.querySelector(".black-bg").style.height = "0";
  document.querySelector(".gnb").style.height = "130px";
});

$("#menu-btn").on("click", function () {
  $(".gnb-list").addClass("menuOn");
  $("#menu-btn").hide();
  $("#close-btn").addClass("show");
});

$("#close-btn").on("click", function () {
  $(".gnb-list").removeClass("menuOn");
  $("#close-btn").removeClass("show");
  $("#menu-btn").show();
  document.querySelectorAll(".sub-gnb").forEach((e) => {
    e.classList.remove("open");
  });
});

const contentList = document.querySelector(".gnb-list");
const content = document.querySelectorAll(".title-menu");
const gnbBody = document.querySelectorAll(".sub-gnb");

contentList.addEventListener("click", (e) => {
  let isActive = e.target.parentNode.classList.contains("active");
  if (isActive) {
    e.target.parentNode.classList.remove("active");
    e.target.parentNode.childNodes.forEach((ele) => {
      if (ele.tagName === "UL") {
        ele.classList.remove("open");
      }
    });
  } else {
    content.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.target.parentNode.classList.add("active");

    gnbBody.forEach((ele) => {
      ele.classList.remove("open");
    });
    let index = e.target.parentNode.dataset.num;
    gnbBody[index].classList.add("open");
  }
});



(function(window, document){
  'use strict';

  const $gnbList = document.querySelectorAll('.gnb-list');  // NodeList
  const $menuBtn = document.getElementById('menu-btn');

  window.addEventListener('resize', function() {
      if (window.innerWidth > 1024) {
        offElements();
        // $(".gnb-list").removeClass("menuOn");
        // $("#close-btn").removeClass("show");
        // $("#menu-btn").show();
      }
  });


  function offElements() {
      [].forEach.call($gnbList, function(toggle) {
        toggle.classList.remove('menuOn');
        $("#close-btn").removeClass("show");
        $("#menu-btn").show();
      });
  }

})(window, document)