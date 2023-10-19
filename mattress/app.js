// // // var items = document.querySelectorAll(".my-slider .carousel-item");
// // // items.forEach((e) => {
// // //     const slide = 4;
// // //     let next = e.nextElementSibling;
// // //     for (var i = 0; i <= slide; i++) {
// // //         if (!next) {
// // //             next = items[0];
// // //         }
// // //         let clonechild = next.cloneNode(true);
// // //         e.appendChild(clonechild); // Append the entire clonechild
// // //         next = next.nextElementSibling;
// // //     }
// // // });

// // // Instantiate the Bootstrap carousel
// // $('.multi-item-carousel').carousel({
// //     interval: false
// //   });

// //   // for every slide in carousel, copy the next slide's item in the slide.
// //   // Do the same for the next, next item.
// //   $('.multi-item-carousel .item').each(function() {
// //     var next = $(this).next();
// //     if (!next.length) {
// //       next = $(this).siblings(':first');
// //     }
// //     next.children(':first-child').clone().appendTo($(this));

// //     if (next.next().length > 0) {
// //       next.next().children(':first-child').clone().appendTo($(this));
// //     } else {
// //       $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
// //     }
// //   });

// $(document).ready(function () {
//     var itemsMainDiv = ('.MultiCarousel');
//     var itemsDiv = ('.MultiCarousel-inner');
//     var itemWidth = "";

//     $('.leftLst, .rightLst').click(function () {
//     var condition = $(this).hasClass("leftLst");
//     if (condition)
//     click(0, this);
//     else
//     click(1, this)
//     });

//     ResCarouselSize();

//     $(window).resize(function () {
//     ResCarouselSize();
//     });

//     //this function define the size of the items
//     function ResCarouselSize() {
//     var incno = 0;
//     var dataItems = ("data-items");
//     var itemClass = ('.item');
//     var id = 0;
//     var btnParentSb = "";
//     var itemsSplit = "";
//     var sampwidth = $(itemsMainDiv).width();
//     var bodyWidth = $('body').width();
//     $(itemsDiv).each(function () {
//     id = id + 1;
//     var itemNumbers = $(this).find(itemClass).length;
//     btnParentSb = $(this).parent().attr(dataItems);
//     itemsSplit = btnParentSb.split(',');
//     $(this).parent().attr("id", "MultiCarousel" + id);

//     if (bodyWidth >= 1200) {
//     incno = itemsSplit[3];
//     itemWidth = sampwidth / incno;
//     }
//     else if (bodyWidth >= 992) {
//     incno = itemsSplit[2];
//     itemWidth = sampwidth / incno;
//     }
//     else if (bodyWidth >= 768) {
//     incno = itemsSplit[1];
//     itemWidth = sampwidth / incno;
//     }
//     else {
//     incno = itemsSplit[0];
//     itemWidth = sampwidth / incno;
//     }
//     $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
//     $(this).find(itemClass).each(function () {
//     $(this).outerWidth(itemWidth);
//     });

//     $(".leftLst").addClass("over");
//     $(".rightLst").removeClass("over");

//     });
//     }

//     //this function used to move the items
//     function ResCarousel(e, el, s) {
//     var leftBtn = ('.leftLst');
//     var rightBtn = ('.rightLst');
//     var translateXval = "";
//     var divStyle = $(el + ' ' + itemsDiv).css('transform');
//     var values = divStyle.match(/-?[\d\.]+/g);
//     var xds = Math.abs(values[4]);
//     if (e == 0) {
//     translateXval = parseInt(xds) -parseInt(itemWidth * s);
//     $(el + ' ' + rightBtn).removeClass("over");

//     if (translateXval <= itemWidth / 2) {
//     translateXval = 0;
//     $(el + ' ' + leftBtn).addClass("over");
//     }
//     }
//     else if (e == 1) {
//     var itemsCondition = $(el).find(itemsDiv).width() -$(el).width();
//     translateXval = parseInt(xds) + parseInt(itemWidth * s);
//     $(el + ' ' + leftBtn).removeClass("over");

//     if (translateXval >= itemsCondition -itemWidth / 2) {
//     translateXval = itemsCondition;
//     $(el + ' ' + rightBtn).addClass("over");
//     }
//     }
//     $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
//     }

//     //It is used to get some elements from btn
//     function click(ell, ee) {
//     var Parent = "#" + $(ee).parent().attr("id");
//     var slide = $(Parent).attr("data-slide");
//     ResCarousel(ell, Parent, slide);
//     }

//     });

$(document).ready(function () {
  var active_index = [0, 1, 2,3];
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");
  const carousel = document.getElementById("carousel");
  var elements_carousel = carousel.children;
  function update() {
    for (var i = 0; i < elements_carousel.length; i++) {
      var div = elements_carousel[i];
      if (active_index.includes(i)) {
        div.style.display = "block";
        //nodeList.push(div);
      } else {
        div.style.display = "none";
      }
    }
  }
  nextButton.addEventListener("click", () => {
    active_index = active_index.map((e) => e + 1);

    if (active_index.some((e) => e >= elements_carousel.length)) {
      console.log("text");
      active_index = [0, 1, 2,3];
    }
    console.log(active_index);
    update();
  });
  prevButton.addEventListener("click", () => {
    active_index = active_index.map((e) => e - 1);
    if (active_index.some((e) => e < 0)) {
      active_index = [
        elements_carousel.length - 4,
        elements_carousel.length - 3,
        elements_carousel.length - 2,
        elements_carousel.length - 1,
      ];
    }
    console.log(active_index);
    update();
  });
  update();
});




