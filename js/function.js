//header 영역
$(function () {
  const $mnus = $(".gnb a");
  const $side = $(".side a");
  const $lnb = $(".lnb");
  const $btnGnb = $(".btn-gnb");
  const $snb = $(".snb");

  //1.메뉴활성화 표시
  //gnb 메뉴 활성화 표시
  $mnus.on("click", function (evt) {
    evt.preventDefault();

    $(this).parent().addClass("on").siblings().removeClass("on");
  });

  //2.side
  $side.on("mouseenter", function (evt) {
    evt.preventDefault();

    $lnb.stop().fadeIn(50);
  });
  $side.on("mouseleave", function (evt) {
    evt.preventDefault();

    $lnb.stop().fadeOut(50);
  });

  //모바일 전용 메뉴버튼
  $btnGnb.on("click", function () {
    $(this).toggleClass("clse");
    $snb.toggle();
  });
});

//section 영역
$(function () {
  const $container = $("section .slides-container");
  const $indicator = $("section .slides-pagination > li > a");
  const $btnPrev = $("section .slides-prev");
  const $btnNext = $("section .slides-next");
  const $best = $(".best");

  let nowIdx = 0;

  var moveFn = function () {
    $indicator.eq(nowIdx).parent().addClass("on").siblings().removeClass("on");
    $container
      .stop()
      .animate({ left: -(100 * nowIdx) + "%" }, 400, "easeInOutCubic");
  };
  //슬라이드 영역
  //1. 인티케이터 이벤트 구문
  $indicator.on("click", function (evt) {
    evt.preventDefault();

    nowIdx = $indicator.index(this);
    moveFn();
    clearInterval(intervalKey); //자동 슬라이드 멈춤
  });

  //2.이전버튼 이벤트
  $btnPrev.on("click", function (evt) {
    evt.preventDefault();
    if (nowIdx > 0) {
      nowIdx--;
    } else {
      nowIdx = $indicator.length - 1;
    }
    moveFn();
    clearInterval(intervalKey);
  });

  //3.다음버튼 이벤트
  $btnNext.on("click", function (evt) {
    evt.preventDefault();
    if (nowIdx < $indicator.length - 1) {
      nowIdx++;
    } else {
      nowIdx = 0;
    }
    moveFn();
    clearInterval(intervalKey);
  });

  //4.자동슬라이드
  intervalKey = setInterval(function () {
    if (nowIdx < $indicator.length - 1) {
      nowIdx++;
    } else {
      nowIdx = 0;
    }
    moveFn();
  }, 2000);

  //best 영역
  $best.on("click", function (evt) {
    evt.preventDefault();
  });
});

//footer영역
$(function () {
  const $languages = $(".languages>li>a");
  const $language = $(".language");

  $languages.on("click", function (evt) {
    evt.preventDefault();
    $language.toggle();
  });
});
