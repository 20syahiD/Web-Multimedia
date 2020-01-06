var imageData = canvassepia.getImageData(imageX, imageY, image.width, image.height);
var dataArray = imageData.data;

for(var i = 0; i < dataArray.length; i += 4)
{
    var red = dataArray[i];
    var green = dataArray[i + 1];
    var blue = dataArray[i + 2];
    var alpha = dataArray[i + 3];

    var outRed = (red * .393) + (green *.769) + (blue * .189); // calculate value for red channel in pixel
    var outGreen = (red * .349) + (green *.686) + (blue * .168);
    var outBlue = (red * .272) + (green *.534) + (blue * .131);

    dataArray[i] = outRed < 255 ? outRed : 255; // check if the value is less than 255, if more set it to 255
    dataArray[i + 1] = outGreen < 255 ? outGreen : 255;
    dataArray[i + 2] = outBlue < 255 ? outBlue : 255
    dataArray[i + 3] = alpha;
}

canvassepia.putImageData(imageData, imageX, imageY);
