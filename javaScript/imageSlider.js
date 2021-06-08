
var i = 0;

var time = 2000;

var pictures =
[
  "pictures/albumCovers/radiohead.jpeg",
  "pictures/albumCovers/linkenpark.jpg",
  "pictures/albumCovers/pinkfloyd.jpg",
  "pictures/albumCovers/zeppelin2.jpg",
  "pictures/albumCovers/aliceInChains.jpg"
];

function change()
{
	document.slider.src = pictures[i];

	if(i < pictures.length - 1)
  {
	  i++;
	}
  else
  {
		i = 0;
	};

	setTimeout("change()", time);
};

window.onload=change;
