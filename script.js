var size_;
var image_;
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slideshow-slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}

function gotohash(id_) {
    document.getElementById(id_).scrollIntoView({
        behavior: 'smooth'
    });
}

function sizeClick(size) {
    try {
        /*
        alert(size);
        alert(image_);
        */
        if (size == "original") {
            window.location.href = "../media/" + image_ + ".jpg";
        } else {
            window.location.href = "../media/min/" + image_ + "-min.jpg";
        }
    } catch (error) {
        alert(error);
    }
}

function displayImg(image) {
    image_ = image;
    document.getElementById('size-modal').style.display = 'block';
}

console.log("ready");
