window.onload = function() {
    const windowHeight = window.innerHeight;
    const Place = document.querySelector("#loader");
    const loaderTop =  Place.offsetTop;
    const loaderHeight = Place.offsetHeight;
    const scrollHeight = window.pageYOffset;
  
    const bottom = document.querySelector("#hinhload");
    const btTop =  bottom.offsetTop;
    const btHeight = bottom.offsetHeight;
    console.log(loaderTop - windowHeight + (loaderHeight*1/2));
    // x = window.matchMedia("(max-width: 700px)")
    // x.addListener((x)=>{
    //     if (x.matches) { // If media query matches
    //         document.body.style.backgroundColor = "yellow";
    //       } else {
    //        document.body.style.backgroundColor = "pink";
    //       }
    // })
        
        window.addEventListener('scroll', function scrollPlace() {
          
            if (window.scrollY > loaderTop - windowHeight + (loaderHeight/2) && scrollHeight < loaderTop + loaderHeight ) {
                Place.style.opacity = 1;
                Place.style.transform = 'translateX(0px)';
                Place.style.transition = '0.5s ease-in-out';
            } else {
                Place.style.opacity = 0;
                Place.style.transform = 'translateY(130px)';
            }
            
            if (window.scrollY >= btTop - windowHeight + (btHeight/2) && scrollHeight < btTop + btHeight ) {
                bottom.style.opacity = 1;
                bottom.style.transform = 'translateX(0px)';
                bottom.style.transition = '0.5s ease-in-out';
            } else {
                bottom.style.opacity = 0;
                bottom.style.transform = 'translateX(-200px)';
                // this.alert("ẩn")
            }
        });
    
    
    carousel();
}


var fl = true;

function model() {
    const gio = document.getElementById("gio");

    gio.style.visibility = fl ? "visible" : "hidden";
    gio.style.opacity = fl ? "1" : "0";

    fl = !fl;
}

var flag = true;

function display() {
    const search = document.getElementById("timk");
    search.style.visibility = flag ? "visible" : "hidden";
    flag = !flag;
}
var j = 0;


function them(btn) {
    var dem = true;
    var temp = 1;
    var col = btn.parentElement;
    var child1 = col.children[0].src

    var child2 = col.children[1].innerText;
    var child31 = col.children[2].children[0].innerText;
    var child32 = col.children[2].innerText;

    var addtr = document.createElement('tr')
    addtr.innerHTML = '<td><img src="' + child1 + '" alt="" style="width:50%"></td><td><span>' + child31 + '</span><u>đ</u></td><td><input onclick="thaydoi();" type="number" name="so" id="soluong" value="' + temp + '" min="0" style="outline:none; width: 25%;"></td><td><svg onclick="deletes(this);" xmlns="http://www.w3.org/2000/svg" style="width:25%;height:100px; cursor: pointer;" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/> </svg>'
    var content = document.getElementById("place");
    var SoSanPham = document.querySelectorAll("tbody tr")
    for (var i = 0; i < SoSanPham.length; i++) {
        SoSanPham[i].children[1];
        if (SoSanPham[i].children[0].children[0].src == child1) {
            dem = false;
        }

    }
    if (dem == false) {
        alert("Sản phẩm đã có trong giỏ hàng")
    } else {
        alert("Sản phẩm đã được thêm vào giỏ hàng!")
        content.append(addtr);
    }

    thaydoi()
}
var tong = 0;

function soluongtrongio() {
    var SoSanPham = document.querySelectorAll("tbody tr")
        // in số lượng thẻ hàng
    var SLC = document.getElementById("sl");
    SLC.innerText = SoSanPham.length;
}


function thaydoi() {
    // tìm tổng thẻ mỗi thẻ hàng
    var SoSanPham = document.querySelectorAll("tbody tr")
    soluongtrongio();
    //tinh tổng tiền tất cả thẻ hàng

    var tong = 0;
    for (var i = 0; i < SoSanPham.length; i++) {
        var input = SoSanPham[i].querySelector("input").value;
        if (input == 0) {
            var hoi = prompt("Bạn có muốn xóa sản phẩm này không yes(y) or no(n)");
            if (hoi == "y") {
                SoSanPham[i].remove();
            }

        }
        var gia = Number(SoSanPham[i].querySelector("span").innerHTML) * 1000;
        tong += gia * input;

    }
    var SLC = document.getElementById("sl");
    SLC.innerText = SoSanPham.length;
    var format = tong.toLocaleString('de-DE');
    var tinhtien = document.getElementById("TTT").querySelector("span");
    var thu = tinhtien.innerHTML = format;


    // for (var i = 0; i < SoSanPham.length; i++) {
    //     var input = SoSanPham[i].querySelector("input").value;
    //     var gia = Number(SoSanPham[i].querySelector("span").innerHTML) * 1000;
    //     var tich = gia * input;
    //     tong += tich;
    //     console.log(tong);

    // }
    soluongtrongio();
}
let menu = document.getElementById("menu");
let hien = document.getElementById("hien");
let an =  document.getElementById("an");
function hienmenu(){
    menu.style.width = "50%";
    hien.style.display = "none";
    an.style.display = "block";
}
function anmenu(){
    menu.style.width = "";
    an.style.display = "none";
    hien.style.display = "block";
}
function deletes(btn) {
    var col = btn.parentElement.parentElement;

    var hoi = prompt("Bạn có muốn xóa sản phẩm này không yes(y) or no(n)");
    if (hoi == "y") {
        col.remove();
    }

    var SoSanPham = document.querySelectorAll("tbody tr")
    var tong = 0;
    for (var i = 0; i < SoSanPham.length; i++) {
        var input = SoSanPham[i].querySelector("input").value;
        var gia = Number(SoSanPham[i].querySelector("span").innerHTML) * 1000;
        tong += gia * input;
    }
    console.log(tong);
    var SLC = document.getElementById("sl");
    SLC.innerText = SoSanPham.length;
    var format = tong.toLocaleString('de-DE');
    var tinhtien = document.getElementById("TTT").querySelector("span");
    var thu = tinhtien.innerHTML = format;
}