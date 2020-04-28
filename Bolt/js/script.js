/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}


var titles = [];
var titleInput = document.getElementById("title");
var messageBox = document.getElementById("display");

titleInput.onkeyup = function(key) {
  if (key.keyCode == 13 && !key.shiftKey) {
    insert()
  }
};

function Allow() {
  if (!user.title.value.match(/[a-zA-Z]$/) && user.title.value != "WTG") {
    user.title.value = "";
    alert("Please Enter only alphabets");
  }
  window.location.reload()
}

function insert() {
  titles.push(titleInput.value);
  clearAndShow();
}

function clearAndShow() {
  titleInput.value = "";
  messageBox.innerHTML = "";
  messageBox.innerHTML += " " + titles.join("<br/> ") + "<br/>";
}

function clearText() {
  titles = [];
  clearAndShow();
}