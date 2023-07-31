function mycontroller($scope, $timeout) {
    //khai báo biến cho hàm
    var demnguoc, h = 9,
        m = 59,
        s = 59;
    var sformat = s,
        mformat = m,
        hformat = h;

    demnguoc = function() {
        if (s === -1) { // nếu giây = 1 thì giảm phút đi 1 và reset giây = 59
            m -= 1;
            s = 59;
        }

        if (m === -1) { // nếu phút = 1 thì giảm giờ đi 1 và reset phút = 59
            h -= 1;
            m = 59;
        }
        //
        //Nếu các số về dưới 10 thì thêm số 0 vào đằng trước các số
        if (s >= 10) {
            sformat = s;
        } else {
            sformat = "0" + s;
        }
        if (m >= 10) {
            mformat = m;
        } else {
            mformat = "0" + m;
        }
        if (h >= 10) {
            hformat = h;
        } else {
            hformat = "0" + h;
        }


        if (h < 0) {
            //khi đếm ngược kết thúc
            $("#warning").fadeOut(2000);
            h = "00";
            m = "00";
            s = "00";
            return; // thoát
        }
        $scope.hour = hformat; // 
        $scope.minutes = mformat;
        $scope.seconds = sformat;
        s--; // -1
        $timeout(demnguoc, 1000); // 

    };

    $scope.hour = hformat;
    $scope.minutes = mformat;
    $scope.seconds = sformat;
    demnguoc()
}