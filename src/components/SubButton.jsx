import React, { useEffect } from "react";
import "./subButton.css";

const { Kakao } = window;

export default function SubButton() {
  // 배포한 자신의 사이트
  const realUrl = "https://wepublic-weing-test.vercel.app";
  // 로컬 주소 (localhost 3000 같은거)
  // const resultUrl = "http://localhost:3001/";

  // 재랜더링시에 실행되게 해준다.
  useEffect(() => {
    // init 해주기 전에 clean up 을 해준다.
    Kakao.cleanup();
    // 자신의 js 키를 넣어준다.
    Kakao.init(process.env.REACT_APP_KAKAOID);
    // 잘 적용되면 true 를 뱉는다.
    console.log(Kakao.isInitialized());
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "나의 입맛 월드컵 😋",
        description:
          "나만 알고 싶은 로컬 맛.zip with Wepublic DAO - 나의 입맛 유형 알아보고 나와 어울리는 입맛 유형 추천 받자🎉",
        imageUrl: `${process.env.PUBLIC_URL}/images/bg.png`,
        link: {
          mobileWebUrl: realUrl,
        },
      },
      buttons: [
        {
          title: "나도 테스트 하러가기",
          link: {
            mobileWebUrl: realUrl,
          },
        },
        {
          title: "결과 보기",
          link: {
            mobileWebUrl: realUrl + "/results",
          },
        },
      ],
    });
  };

  return (
    <div>
      <button
        onClick={() => {
          shareKakao();
        }}
        className="button"
      >
        공유하기
      </button>
    </div>
  );
}
