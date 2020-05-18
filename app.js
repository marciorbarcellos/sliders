window.addEventListener('load', changeColor);
const sliderStr = document.querySelector("#slider_Str");
const sliderAgi = document.querySelector("#slider_Agi");
const sliderInt = document.querySelector("#slider_Int");
const selector = document.querySelectorAll("#selector");
const SelectorValues = document.querySelectorAll("#SelectorValue");
const SelectorBar = document.querySelectorAll("#SelectorBar");

sliderStr.oninput = function() {
  SelectorValues[0].innerHTML = this.value;
  selector[0].style.left = this.value + "%";
  SelectorBar[0].style.width = this.value + "%";
};

sliderAgi.oninput = function() {
  SelectorValues[1].innerHTML = this.value;
  selector[1].style.left = this.value + "%";
  SelectorBar[1].style.width = this.value + "%";
};

sliderInt.oninput = function() {
  SelectorValues[2].innerHTML = this.value;
  selector[2].style.left = this.value + "%";
  SelectorBar[2].style.width = this.value + "%";
};

function changeColor() {
  let red = document.getElementById('slider_Str').value;
  let green = document.getElementById('slider_Agi').value;
  let blue = document.getElementById('slider_Int').value;
  let color = 'rgb(' + red + ',' + green + ',' + blue + ')';
  DivSquare.style.background = color;
  document.getElementById('rgbRes').innerHTML = color;
}

document.getElementById('slider_Str').addEventListener('input', changeColor);
document.getElementById('slider_Agi').addEventListener('input', changeColor);
document.getElementById('slider_Int').addEventListener('input', changeColor);

