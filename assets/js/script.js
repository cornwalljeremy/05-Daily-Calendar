var todaysDate = moment().format("LL");
var todaysTime = moment().format("H");
var inputGroup = document.getElementsByClassName("input-group-text");
var textInput = $(".form-control").val();
var saveButton = $(".saveBtn");
var storedArray = [];

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
      //   console.log(tempTime, todaysTime);
      $(this).removeClass("present future");
      //   console.log(tempTime, todaysTime);
    } else if (tempTime === todaysTime) {
      $(this).addClass("present");
      $(this).removeClass("past future");
      //   console.log(tempTime, todaysTime);
    } else {
      $(this).addClass("future");
      $(this).removeClass("present past");
      //   console.log(tempTime, todaysTime);
    }
  });
}

$(saveButton).on("click", function () {
  textInput = $(this).siblings(".form-control").val();
  //   console.log(textInput);
  inputGroup = $(this).siblings(".input-group-prepend").children("span").text();
  //   console.log(inputGroup);
  localStorage.setItem(textInput, inputGroup, JSON.stringify("storedArray"));
    displayPageContent(localStorage.getItem('storedArray'));
});

// var data = JSON.parse(localStorage.getItem("textInput", "inputGroup"));
// storedArray.push("textInput", "inputGroup");
// console.log(data);

function displayContent(storedArray) {
  storedArray = JSON.parse(localStorage.getItem("textInput", "inputGroup"));
  storedArray.push("textInput", "inputGroup");
  console.log(storedArray);
  if (storedArray > 0) {
    $("#form-control").html(storedArray.textInput);
  }
}
// displayContent()
compareTime();
// renderInputText();
