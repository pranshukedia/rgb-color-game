var boxes = document.querySelectorAll('.box');
var s = document.querySelector('.rgbspan');
var colors = generateRandomColor(6);
var pickedColor = colors[Math.floor(Math.random() * 6)];
s.textContent = pickedColor;
var playbtn = document.querySelector('#playAgain');
var easyBtn = document.querySelector('#easyBtn');
var hardBtn = document.querySelector('#hardBtn');
var boxCount = 6;
var statusText = document.querySelector(".status");
statusText.textContent = "Let's Play!!";

hardBtn.addEventListener('click', function () {
    document.querySelector('h1').style.background = 'orange';
    statusText.textContent = "Let's Play!!";
    this.style.background = 'white';
    this.style.color ='maroon';
    easyBtn.style.background = 'white';
    easyBtn.style.color = 'maroon';
    boxCount = 6;
    colors = generateRandomColor(boxCount);
    pickedColor = colors[Math.floor(Math.random() * 6)];
    console.log(boxes.length)
    for (var i = 0; i < boxes.length; i++) {
            boxes[i].style.background = colors[i];
            boxes[i].style.display = 'blocks';
        }
    }
    );

easyBtn.addEventListener('click', function () {
document.querySelector("h1").style.background = "orange";
statusText.textContent = "Let's Play!!";
boxCount = 3;
this.style.background = 'white';
this.style.color ='maroon';
hardBtn.style.background = 'white';
hardBtn.style.color = 'maroon';
colors = generateRandomColor(boxCount);
pickedColor = colors[Math.floor(Math.random() * 3)];
s.textContent = pickedColor;

for (var i = 0; i < boxes.length; i++) {
    if (colors[i]){
        boxes[i].style.background = colors[i];
    }else {
        boxes[i].style.display = 'none';
    }
}
});



    playbtn.addEventListener('click', function () {
        document.querySelector('h1').style.background = 'orange';
        statusText.textContent = "Lets Play!!";
        colors = generateRandomColor(boxCount);
        pickedColor = colors[Math.floor(Math.random() * boxCount)];
        s.textContent = pickedColor;
        for (var i=0; i < boxes.length; i++) {
            boxes[i].style.background = colors[i];
        }
    });

    for (var i = 0; i < colors.length; i++) {
        boxes[i].style.background = colors[i];
        boxes[i].addEventListener('click', function () {
            var selectedColor = this.style.background;
            console.log(selectedColor);
            console.log(pickedColor);
            if (selectedColor === pickedColor){
                win();
            }else {
                loose(this);
            }
        });
    }

    function win() {
        for (var i = 0; i < colors.length; i++) {
            boxes[i].style.background = pickedColor;
        }
        document.querySelector('h1').style.background = pickedColor;
        statusText.textContent = 'Correct!!!';
    }
    function loose(a) {
        console.log(a);
        a.style.background = "rgb(41, 37, 37)";
        statusText.textContent = 'Try Again';
    }
    function generateRandomColor(num) {
        var arr = [];
        for (var i = 0; i < num; i++) {
            arr.push(randomColor());
        }
        return arr;
    }
    function randomColor() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return 'rgb(' + r + ', ' + g + ', ' + b + ')';
        'rgb(r, g, b)'
    }