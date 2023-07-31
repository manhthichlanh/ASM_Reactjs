function getreg() {
    const name = document.getElementById("typenameX").value;
    const email = document.getElementById("typeEmailX").value;
    const pass = document.getElementById("typePasswordX").value;
    const repass = document.getElementById("typePasswordRepeatX").value;
    const nut = document.getElementById("nutdongy");
    if (name == "" && email == "" && pass == "" && repass == "") {
        alert("Hãy nhập tên, email và mật khẩu!");
        all();
    } else if (name == "") {
        alert("Chưa nhập Tên!");

    } else if (email == "") {
        alert("Chưa nhập Email!");
    } else if (pass == "") {
        alert("Chưa nhập Mật khẩu!");
    } else if (repass == "") {
        alert("Vui lòng nhập lại Mật khẩu!");
    } else if (repass == "") {
        alert("Vui lòng nhập lại Mật khẩu!");
    } else if (nut.checked == false) {
        alert("Đồng ý với điều khoảng để tiếp tục!");
        document.getElementById("cover").style.border = "1px solid red"
    } else {
        if (pass != repass) {
            alert("Mật khẩu không trùng khớp!")
        } else {
            alert("Chúc mừng bạn đã đăng ký thành công!")
            var chon = prompt("Bạn có muốn quay lại đăng nhập");
            if (chon === "Y" || chon === "y") {
                window.location = "dangnhap.html";
            }
        }
    }


}

function off() {
    document.getElementById("typenameX").style.border = "1px solid white";
    document.getElementById("typeEmailX").style.border = "1px solid white";
    document.getElementById("typePasswordX").style.border = "1px solid white";
    document.getElementById("typePasswordRepeatX").style.border = "1px solid white";
    document.getElementById("cover").style.border = "none";
}

function all() {
    document.getElementById("typenameX").style.border = "4px solid red";
    document.getElementById("typeEmailX").style.border = "4px solid red";
    document.getElementById("typePasswordX").style.border = "4px solid red";
    document.getElementById("typePasswordRepeatX").style.border = "4px solid red";
}