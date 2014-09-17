var comparison = [{
    "name": "obama",
    "itemId": 123,
    "searchTerm": "Obama vs. Batman",
    "xAxis": "evilness",
    "xRating": 0.9,
    "yAxis": "intelligence",
    "yRating": 0.4,
    "color": '#009900'
  },
    {
      "name": "batman",
      "itemId": 123,
      "searchTerm": "Obama vs. Batman",
      "xAxis": "evilness",
      "xRating": 0.5,
      "yAxis": "intelligence",
      "yRating": 0.2,
      "color": '#33ccff'
    }];

var canvas = document.createElement("canvas");
canvas.width = 1000;
canvas.height = 533;

var ctx = canvas.getContext("2d");
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var radius = 25;

//Background
ctx.fillStyle = "#FFF";
ctx.strokeStyle = '#000';
ctx.stroke();
ctx.strokeRect(70, 0,
  canvas.width - 80,
  canvas.height - 60);

// Arrow up/down
ctx.fillStyle = "grey";
ctx.fillRect(15, 50, 20,
  canvas.height - 110);
ctx.fillStyle = "grey";
ctx.beginPath();
ctx.moveTo(25, 0);
ctx.lineTo(0, 50);
ctx.lineTo(50, 50);
ctx.fill();


// Arrow left/right
ctx.fillStyle = "grey";
ctx.fillRect(
  70, // x
  canvas.height - 40, // y
  canvas.width - 130,
  20
);
ctx.fillStyle = "grey";
ctx.beginPath();
ctx.moveTo(1000, 505); //point
ctx.lineTo(940, 480);
ctx.lineTo(940, 525);
ctx.fill();


// Draw ratings
comparison.forEach(function (data) {
  ctx.beginPath();
  ctx.arc(canvas.width * data.xRating,
          canvas.height * data.yRating,
          radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = data.color;
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#003300';
  ctx.stroke();
  ctx.fill();

  ctx.fillStyle = "black";
  ctx.textAlign = 'center';
  ctx.font = "23px Arial";

  ctx.fillText(
    data.name,
    canvas.width * data.xRating,
    canvas.height * data.yRating + 50
  );
});


// X legend
ctx.fillStyle = "black";
ctx.textAlign = 'center';
ctx.font = "40px Arial";
ctx.strokeText(
  comparison[0].xAxis,
  canvas.width / 2 + 20,
  canvas.height - 10
);

// Y legend
ctx.fillStyle = "black";
ctx.textAlign = 'center';
ctx.font = "40px Arial";
ctx.rotate(Math.PI / 2);
ctx.strokeText(
  comparison[0].yAxis,
  canvas.height / 2 - 30,
  -20
);

var data_url = canvas.toDataURL();
document.getElementById('result').src = data_url;
console.log(data_url);