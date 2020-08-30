var todaysDate = moment().format("LL");
var todaysTime = moment().format("H");
// var pastTime = document.querySelector(".past");
// var nowTime = document.querySelector(".present");
// var futureTime = document.querySelector(".future");
var inputGroup = document.getElementsByClassName("input-group-text");

// display the date
$("#time").text(todaysDate);

function compareTime() {
  $(".hour-check").each(function () {
    var tempTime = $(this)
      .siblings(".input-group-prepend")
      .children(".input-group-text")
      .text();

    tempTime = moment(tempTime, "H:mm A");
    tempTime = parseInt(tempTime.format("H"));

    var todaysTime = parseInt(moment().format("H"));
    if (tempTime < todaysTime) {
      $(this).addClass("past");
      console.log(tempTime, todaysTime);
      $(this).removeClass("present future");
      console.log(tempTime, todaysTime);
    } else if (tempTime === todaysTime) {
      $(this).addClass("present");
      $(this).removeClass("past future");
      console.log(tempTime, todaysTime);
    } else {
      $(this).addClass("future");
      $(this).removeClass("present past");
      console.log(tempTime, todaysTime);
    }
  });
}

compareTime();
