/*
 * Starter file 
 */

(function() {
  "use strict";
  //console.log('window loaded')
  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    let click = document.getElementById('encrypt-it');
    click.addEventListener("click", handleEncryption);

    let font_12 = document.getElementById("radio-12pt");
    font_12.addEventListener("click", changeFontSize.bind(this,12));

    let font_24 = document.getElementById("radio-24pt");
    font_24.addEventListener("click", changeFontSize.bind(this, 24));

    let resetPage = document.getElementById("reset");
    resetPage.addEventListener("click", resetClick);

    let checkCaps = document.getElementById("all-caps");
    checkCaps.addEventListener("click", capsString);

  
  }

  function capsString(){
    let text = document.getElementById("input-text");
    if (document.getElementById("all-caps").checked) {
      text.style.textTransform = "uppercase";
    } else {
      text.style.textTransform = "lowercase";
    }
  }

  function resetClick(){
    document.getElementById('input-text').value = "";
    document.getElementById('result').textContent ="";
  }

  function changeFontSize (fontSize){
    let text = document.getElementById('input-text');
    text.style.fontSize = `${fontSize}pt`;
  }

  function handleEncryption(){
    //console.log('window loaded')
    let textValue = document.getElementById('input-text');

    var select = document.getElementById('cipher-type');
    var value = select.options[select.selectedIndex].text;
    // console.log(textValue.value);

    if(value === 'Shift Cipher'){
      document.getElementById('result').textContent = shiftCipher(textValue);
    }
    else if(value === 'Randomized'){
      document.getElementById('result').textContent = randomizer(textValue.value);
    }
    
    
  }

  function randomizer(text){
    let length = text.length;
    // console.log(length)
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let result = '';
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    
    return result;
  }

  function shiftCipher(text){
    text = text.value.toLowerCase();
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] < "a" || text[i] > "z") {
        result += text[i];
      } else if (text[i] == "z") {
        result += "a";
      } else {
        // letter is between 'a' and 'y'
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode(letter + 1);
        result += resultLetter;
      }
    }
    return result;
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

})();
