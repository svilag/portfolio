window.onscroll = function() {scrollFunction()};

var totop = document.getElementById("totop")

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		totop.style.display = "block";
	} else {
		totop.style.display = "none";
	}
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}






var coll = document.getElementsByClassName("resumehead");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function collapseAll() {
	for (i = 0; i < coll.length; i++) {
		
		coll[i].click();
	}
}



var button = document.getElementById('edu');

button.addEventListener('keydown', (event) => {
  if (event.code === 'Space' || event.code === 'Enter') {
    button.click()
    console.log("edu");
  }
});

var button1 = document.getElementById('courses');

button1.addEventListener('keydown', (event) => {
  if (event.code === 'Space' || event.code === 'Enter') {
    button1.click()
    console.log("courses");
  }
});

var button2 = document.getElementById('exp');

button2.addEventListener('keydown', (event) => {
  if (event.code === 'Space' || event.code === 'Enter') {
    button2.click()
    console.log("exp");
  }
});

var button3 = document.getElementById('skills');

button3.addEventListener('keydown', (event) => {
  if (event.code === 'Space' || event.code === 'Enter') {
    button3.click()
    console.log("skills");
  }
});

var button4 = document.getElementById('volun');

button4.addEventListener('keydown', (event) => {
  if (event.code === 'Space' || event.code === 'Enter') {
    button4.click()
    console.log("volun");
  }
});

var button5 = document.getElementById('leaders');

button5.addEventListener('keydown', (event) => {
  if (event.code === 'Space' || event.code === 'Enter') {
    button5.click()
    console.log("leaders");
  }
});

var button6 = document.getElementById('awards');

button6.addEventListener('keydown', (event) => {
  if (event.code === 'Space' || event.code === 'Enter') {
    button6.click()
    console.log("awards");
  }
});