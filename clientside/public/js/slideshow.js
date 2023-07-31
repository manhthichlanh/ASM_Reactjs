// var anhArray = [
//     "./img/Slide_1.jpg",
//     "./img/Slide_2.jpg",
//     "./img/Slide_3.jpg",
//     "./img/Slide_4.jpg"
// ];
var index = 0;
// var dots = document.getElementsByClassName("dot");
var show = document.querySelectorAll(".show");

var dots= document.querySelectorAll(".dot");

var press=false;

function carousel() {
    for (var i = 0; i < show.length; i++) {
        show[i].style.display = "none";

        dots[i].style.removeProperty("background-color");
    }
    
    index++;
    if (index > show.length) { index = 1 }
    show[index - 1].style.display = "block";
    dots[index - 1].style.backgroundColor = "white";

    if(!press) {
        setTimeout(() => {
            carousel();
        }, 4000);
    }
}

// function forbullet(n) {
//     carousel(index += n);
// }

function forpoint(n) {
    index = n-1;
    press=true;
    carousel();
    press=!press;
}
// function back() {
//     if (index > 0) {
//         index--;
//         vitri();
//         document.getElementById("slide").src = anhArray[index];
//     } else {
//         index = 3;
//         vitri();
//         document.getElementById("slide").src = anhArray[index];
//     }
// }

// function hinh(so) {
//     if (so == 0) {
//         document.getElementById("slide").src = anhArray[0];
//     } else
//     if (so == 1) {
//         document.getElementById("slide").src = anhArray[1];
//     } else
//     if (so == 2) {
//         document.getElementById("slide").src = anhArray[2];
//     } else
//     if (so == 3) {
//         document.getElementById("slide").src = anhArray[3];
//     }
// }



// function vitri() {
//     var CacNut = document.querySelectorAll(".dot")
//     for (var i = 0; i < 4; i++) {
//         CacNut[i].style.removeProperty("background-color");
//     }
//     CacNut[index].style.backgroundColor = "white";

// }