function getlog() {
    const email = document.getElementById("typeEmailX").value;
    const pass = document.getElementById("typePasswordX").value;
    const emailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email == "" && pass == "") {
        alert("Mời bạn nhập Email và Mật khẩu!");
        document.getElementById("typeEmailX").style.border = "4px solid red"
        document.getElementById("typePasswordX").style.border = "4px solid red"
    } else if (email == "") {
        alert("Chưa nhập Email!");
        document.getElementById("typeEmailX").style.border = "4px solid red"
    } else if (pass == "") {
        alert("Chưa nhập Mật khẩu!");
        document.getElementById("typePasswordX").style.border = "4px solid red";
    } else {

        if (email == "admin" && pass == "toto") {
            alert("Đăng nhập thành công!");
            window.location.href = "index.html";
        } else {
            alert("Sai Email hoặc Mật khẩu! Đăng nhập thất bại...");
            location.reload();
        }
    }

}

function enter(e) {
    if (e.keyCode == 13) {
        getlog();
        return false;
    }
}

function off() {
    document.getElementById("typeEmailX").style.border = "1px solid white"
    document.getElementById("typePasswordX").style.border = "1px solid white"
}