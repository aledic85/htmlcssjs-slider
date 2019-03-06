function leftClick() {
  var imgActive = $("img.active");
  imgActive.removeClass("active");
  var prevImg = imgActive.prev("img");

  if (imgActive.hasClass("first")) {
    prevImg = $("img.last");
  }

  prevImg.addClass("active");
  dotsSlider(prevImg.index());
}

function rightClick() {
  var imgActive = $("img.active");
  imgActive.removeClass("active");
  var nextImg = imgActive.next("img");

  if (imgActive.hasClass("last")) {
    nextImg = $("img.first");
  }

  nextImg.addClass("active");
  dotsSlider(nextImg.index());
}

function dotsSlider(indexImg) {
  var activeDot = $(".dots-container > i.fas");
  activeDot.removeClass("fas").addClass("far");

  var dots = $(".dots-container > i");
  var nextDot = dots.eq(indexImg);
  nextDot.removeClass("far").addClass("fas");
}

function dotsClick() {
  var me = $(this);
  var dotsIndex = me.index();
  var imgActive = $("img.active");

  imgActive.removeClass("active");

  var imgs = $(".img-container > img");
  var nextImg = imgs.eq(dotsIndex);

  nextImg.addClass("active");
  dotsSlider(dotsIndex);
}

function init() {
  var leftSide = $(".left-side");
  var rightSide = $(".right-side");
  var dots = $(".dots-container > i");

  dots.click(dotsClick);
  leftSide.click(leftClick);
  rightSide.click(rightClick);
}

$(document).ready(init);
