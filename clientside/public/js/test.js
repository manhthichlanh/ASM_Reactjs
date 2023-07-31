function ktra() {
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var password_confirmation = document.getElementById("password_confirmation").value;
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    //username
    if (fullname == "") {
        alert("Vui lòng kiểm tra lại tên đăng ký ");

    } else
    //password
    if (password == "" || password != password_confirmation) {
        alert("Vui lòng kiểm tra lại mật khẩu");

    } else
    //email
    if (!mailformat.test(email) || email == "" || email == null) {
        alert("Email không hợp lệ");


    } else {

        if (email == "admin" && pass == "toto") {
            alert("Đăng nhập thành công!");
            window.location = "index.html";
        } else {
            alert("Sai Email hoặc Mật khẩu! Đăng nhập thất bại...");
            location.reload();
        }
    }

}