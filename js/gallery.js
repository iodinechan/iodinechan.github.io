var slideIndex = 1;
showSlides(slideIndex);

function openModal() {
	document.getElementById("myModal").style.display = "block";
}

function closeModal() {
	document.getElementById("myModal").style.display = "none";
}

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

// Show the correct photo by the slideIndex
function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex - 1].style.display = "block";
}

// Move to the previous photo
var prev = document.getElementById("prev");
prev.addEventListener("click", function() {
    plusSlides(-1);
});

// Move to the next photo
var next = document.getElementById("next");
next.addEventListener("click", function() {
    plusSlides(1);
});

// Close the modal div
var close = document.getElementsByClassName("close")[0];
close.addEventListener("click", function() {
    closeModal();
});
