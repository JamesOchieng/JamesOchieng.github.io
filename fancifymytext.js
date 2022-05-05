function bigger() {
    biggerHelper();
    alert("Hello World")
}

function biggerHelper(){
    document.getElementById("textarea").style.fontSize = "24pt";

}

function boringBetty() {
    let userText = document.getElementById("textarea");
    if (document.getElementById("boringText").checked) {
      document.getElementById("fancytext").checked = false;
      userText.style.fontWeight = "normal";
      userText.style.textDecoration = "none";
      userText.style.color = "black";
    }
}

function fancyShmancy() {
    let userText = document.getElementById("textarea");
    if (document.getElementById("fancytext").checked) {
      document.getElementById("boringText").checked = false;
      userText.style.fontWeight = "bold";
      userText.style.textDecoration = "underline";
      userText.style.color = "blue";
    }
  }

  function moo() {
    let moo = "-Moo"; 
    let userText = document.getElementById("textarea");
    userText.style.textTransform = "uppercase";
    userText.value = userText.value.split(".").join('') + moo;
    
  }