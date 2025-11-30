import {
  FATHER_NAME,
  MOTHER_NAME,
  BABY_NAME,
  LOCATION,
  SHARE_ADDRESS,
  SHARE_ADDRESS_TITLE,
  EVENT_DATE,
  EVENT_DATE_FORMAT,
} from "../../const"
import ktalkIcon from "../../icons/ktalk-icon.png"
import { LazyDiv } from "../lazyDiv"
import { useKakao } from "../store"

const baseUrl = import.meta.env.BASE_URL

export const ShareButton = () => {
  const kakao = useKakao()
  return (
    <LazyDiv className="footer share-button">
      <button
        className="ktalk-share"
        onClick={() => {
          if (!kakao) {
            return
          }

          kakao.Share.sendDefault({
            objectType: "location",
            address: SHARE_ADDRESS,
            addressTitle: SHARE_ADDRESS_TITLE,
            content: {
              title: `🍰 ${FATHER_NAME}·${MOTHER_NAME}의 딸 ${BABY_NAME}의 첫 번째 생일에 초대합니다.`,
              description:
                EVENT_DATE.format(EVENT_DATE_FORMAT) + "\n" + LOCATION,
              imageUrl:
                window.location.protocol +
                "//" +
                window.location.host +
                baseUrl +
                "/preview_image.png",
              link: {
                mobileWebUrl:
                  window.location.protocol +
                  "//" +
                  window.location.host +
                  baseUrl,
                webUrl:
                  window.location.protocol +
                  "//" +
                  window.location.host +
                  baseUrl,
              },
            },
            buttons: [
              {
                title: "초대장 보기",
                link: {
                  mobileWebUrl:
                    window.location.protocol +
                    "//" +
                    window.location.host +
                    baseUrl,
                  webUrl:
                    window.location.protocol +
                    "//" +
                    window.location.host +
                    baseUrl,
                },
              },
            ],
          })
        }}
      >
        <img src={ktalkIcon} alt="ktalk-icon" /> 카카오톡으로 공유하기
      </button>
    </LazyDiv>
  )
}
