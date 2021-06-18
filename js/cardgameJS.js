var SetTime = 0;		// 최초 설정 시간(기본 : 초)
function countTIME() {
    m = 
        (Math.floor(SetTime / 60)<10 ? '0'+Math.floor(SetTime / 60) : Math.floor(SetTime / 60)) 
        + " : " 
        + ((SetTime % 60)<10 ? '0'+(SetTime % 60) : (SetTime % 60));
    document.all.ViewCount.innerHTML = m;		// div 영역에 보여줌 
    SetTime++;					// 1초씩 증가    
}

window.onload = function TimeStart(){ tid=setInterval('countTIME()',1000) };

$(function(){
    // ? 클릭시 모달
    $(".howtoUSE").click(function(){
        $(".modal").show();
    });
    //.modal안에 button을 클릭하면 .modal닫기
    $(".modal button").click(function(){
        $(".modal").hide();
    });

    //.modal밖에 클릭시 닫힘
    $(".modal").click(function (e) {
        if (e.target.className != "modal") {
            return false;
        } else {
            $(".modal").hide();
        }
    });
});