let inputButtonOne;
let inputButtonTwo;
let selectedButton;

function inputFieldOne() {
    let x = document.getElementById("inputFieldOne");
    inputButtonOne = x.value;
  }

  function inputFieldTwo() {
    let x = document.getElementById("inputFieldTwo");
    inputButtonTwo = x.value;
  }

function optionValue(){
    let x = document.getElementById("optionValue");
    selectedButton = x.value;
}

function submitButton(){
    if( selectedButton === 'add'){
       let res =  Number(inputButtonOne) + Number(inputButtonTwo)
       document.getElementById("resultBox").innerHTML = res;
    }
   else if( selectedButton === 'sub'){
        let res =  Number(inputButtonOne) - Number(inputButtonTwo)
        document.getElementById("resultBox").innerHTML = res;
    }
    else if( selectedButton === 'mul'){
        let res =  Number(inputButtonOne) * Number(inputButtonTwo)
       document.getElementById("resultBox").innerHTML = res;
    }
    else if( selectedButton === 'division'){
        let res =  Number(inputButtonOne) / Number(inputButtonTwo)
        if (isNaN(res)) {
          document.getElementById("resultBox").innerHTML = 'Value Are Empty !';
        }else{
          document.getElementById("resultBox").innerHTML = res;
        }
    }
}

