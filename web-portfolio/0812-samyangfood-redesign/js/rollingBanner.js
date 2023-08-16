$(window).on('load', function () {
    setFlowBanner();
});

function setFlowBanner() {
    const $wrap = $('.community_contents');
    const $list = $('.community_contents__wrap');
    let wrapWidth = $wrap.width();
    let listWidth = $list.width();
    const speed = 92; //1초에 몇픽셀 이동하는지 설정

    //리스트 복제
    let $clone = $list.clone();
    $wrap.append($clone);
    flowBannerAct();

    //배너 실행 함수
    function flowBannerAct() {
        //무한 반복을 위해 리스트를 복제 후 배너에 추가
        if (listWidth < wrapWidth) {
            const listCount = Math.ceil((wrapWidth * 2) / listWidth);
            for (let i = 2; i < listCount; i++) {
                $clone = $clone.clone();
                $wrap.append($clone);
            }
        }
        $wrap.find('.community_contents__wrap').css({ animation: `${listWidth / speed}s linear infinite flowRolling` });
    }
}
