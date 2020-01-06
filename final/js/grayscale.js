var img = new Image();
    var ctx = canvasgrayscale.getContext('2d');
    img.onload = function() {
      // set the canvasgrayscale' size
      canvasgrayscale.width = this.width;
      canvasgrayscale.height = this.height;
      //draw the image
      ctx.drawImage(this, 0, 0);
      // get the image data
      var imgData = ctx.getImageData(0, 0, canvasgrayscale.width, canvasgrayscale.height);
      var d = imgData.data;
      // loop through all pixels
      // each pixel is decomposed in its 4 rgba values
      for (var i = 0; i < d.length; i += 4) {
        // get the medium of the 3 first values ( (r+g+b)/3 )
        var med = (d[i] + d[i + 1] + d[i + 2]) / 3;
        // set it to each value (r = g = b = med)
        d[i] = d[i + 1] = d[i + 2] = med;
        // we don't touch the alpha
      }
      // redraw the new computed image
      ctx.putImageData(imgData, 0, 0);

    }
    img.crossOrigin = "anonymous";
    img.src = "img/3.jpeg";
