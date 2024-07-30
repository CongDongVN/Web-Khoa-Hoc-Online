// list image
const _img = document.querySelectorAll("._img");
const iconList = document.querySelectorAll(".iconLists_sig");
let index = 0;
function killDots() {
    for (let i = 0; i < _img.length; i++) {
        iconList[i].style.backgroundColor = "rgba(0,0,0,0.2)";
    }
}
function nextImage() {
    if (index == _img.length - 1) {
        _img[0].style.transition = "1s";
        _img[0].style.opacity = 1;
    } else {
        _img[index + 1].style.transition = "1s";
        _img[index + 1].style.opacity = 1;
    }
    if (index == 0) {
        _img[_img.length - 1].style.left = "-100%";
    } else {
        _img[index - 1].style.left = "-100%";
    }
    _img[index].style.left = "0";
    killDots()
    iconList[index].style.backgroundColor = "black";
    setTimeout(function () {
        if (index == 0) {
            _img[_img.length - 1].style.transition = "0s";
            _img[_img.length - 1].style.opacity = 0;
            _img[_img.length - 1].style.left = "100%";
        } else {
            _img[index - 1].style.transition = "0s";
            _img[index - 1].style.opacity = 0;
            _img[index - 1].style.left = "100%";
        }
    }, 1000);
}
let newsl;
function auto() {
    newsl = setInterval(function () {
        if (index == _img.length - 1) {
            index = 0;
        } else {
            index++;
        }
        nextImage();
    }, 3500);
}
auto();
// to be continued
document.addEventListener('DOMContentLoaded', function () {
    // Check login state
    if (localStorage.getItem('isLoggedIn') === 'true') {
        // Hide the Register and Login links
        document.querySelector('.acc_register').classList.add('hidden');
        document.querySelector('.acc_login').classList.add('hidden');
        // Show the ellipse
        document.getElementById('ellipseContainer').classList.remove('hidden');
    }
});

// 


