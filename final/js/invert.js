var canvas = document.getElementById('canvasinvert');
context = canvas.getContext('2d');

var image = new Image();
image.onload = function() {
  var imageX = canvas.width / 2 - image.width / 2;
  var imageY = canvas.height / 2 - image.height / 2;

  context.drawImage(image, imageX, imageY);

  var imageData = context.getImageData(imageX, imageY, image.width, image.height);
  var dataArr = imageData.data;

  for (var i = 0; i < dataArr.length; i += 4) {
    var r = dataArr[i]; // Red color lies between 0 and 255
    var g = dataArr[i + 1]; // Green color lies between 0 and 255
    var b = dataArr[i + 2]; // Blue color lies between 0 and 255
    var a = dataArr[i + 3]; // Transparency lies between 0 and 255



    var invertedRed = 255 - r;
    var invertedGreen = 255 - g;
    var invertedBlue = 255 - b;



    dataArr[i] = invertedRed;
    dataArr[i + 1] = invertedGreen;
    dataArr[i + 2] = invertedBlue;
  }

  context.putImageData(imageData, imageX, imageY);
}
image.src = "img/3.jpeg";
