$(function () {
    loading = $('<div id="loading" class="loading"></div><div id="loading_img"><img alt="loading" src="images/ticats.png" /><div>로딩중..</div></div>>').appendTo(document.body).hide();

    $('#reservation-box-submit').on("click", function () {
        event.preventDefault(); // 기본 폼 제출 동작 중지

        var email = $("#form input[name='email']").val(); // 올바른 요소 선택
        loading.show()
        $.ajax({
            type: "POST",
            url: "https://www.ticats.r-e.kr/api/landings",
            data: JSON.stringify({"email": email}), // 데이터 JSON 형식으로 변환
            contentType: "application/json", // 서버에 보내는 데이터의 타입을 JSON으로 명시
            dataType: 'json',
            success: function (data) {
                console.log(data);
                $('.reservation-box-before').empty();
                var body = "<div class=\"reservation-email-complete\">" +
                    data.email + "으로" +
                    "<div>알림을 발송해드릴게요!</div></div>\n" +
                    "<div id=\"reservation-box-submit2\">\n" +
                    "<span>알림 신청 완료</span>\n" +
                    "<img style=\"margin-left: 10px\" src=\"images/check.png\">\n" +
                    "</div>";
                $('.reservation-box-after').empty();
                $('.reservation-box-after').append(body);
                loading.hide()
            },
            error: function (request, status, error) {
                console.log("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
            }
        });
    });
});