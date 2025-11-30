import { Fragment } from "react/jsx-runtime"
import {
  FATHER_NAME,
  MOTHER_NAME,
  BABY_NAME,
  FAMILY_INFO,
} from "../../const"
import { useModal } from "../modal"
import { Button } from "../button"
import { LazyDiv } from "../lazyDiv"
import PhoneIcon from "../../icons/phone-flip-icon.svg?react"
import EnvelopeIcon from "../../icons/envelope-icon.svg?react"

export const Invitation = () => {
  const { openModal, closeModal } = useModal()
  return (
    <LazyDiv className="card invitation">
      <h2 className="english">Invitation</h2>

      <div className="break" />

      <div className="content">사랑하는 우리 이쁜 현서가</div>
      <div className="content">태어난 지 어느덧 일 년,</div>
      <div className="content">소중한 분들을 모시고</div>
      <div className="content">첫 생일을 축하하는 자리를 마련했습니다.</div>
      <div className="break" />
      <div className="content">바쁘신 와중에도 귀한 걸음 하시어</div>
      <div className="content">현서의 첫 시작을 함께 축복해 주세요.</div>

      <div className="break" />

      <div className="name">
        {FATHER_NAME} · {MOTHER_NAME}
        <span className="relation">
          의 딸
        </span>{" "}
        {BABY_NAME}
      </div>

      <div className="break" />

      <Button
        onClick={() => {
          openModal({
            className: "contact-modal",
            closeOnClickBackground: true,
            header: (
              <div className="title-group">
                <div className="title">축하 인사 전하기</div>
                <div className="subtitle">
                  전화, 문자메세지로 축하 인사를 전해보세요.
                </div>
              </div>
            ),
            content: (
              <>
                <div className="contact-info">
                  {FAMILY_INFO.filter(({ phone }) => !!phone).map(
                    ({ relation, name, phone }) => (
                      <Fragment key={relation}>
                        <div className="relation">{relation}</div>
                        <div>{name}</div>
                        <div>
                          <PhoneIcon
                            className="flip icon"
                            onClick={() => {
                              window.open(`tel:${phone}`, "_self")
                            }}
                          />
                          <EnvelopeIcon
                            className="icon"
                            onClick={() => {
                              window.open(`sms:${phone}`, "_self")
                            }}
                          />
                        </div>
                      </Fragment>
                    ),
                  )}
                </div>
              </>
            ),
            footer: (
              <Button
                buttonStyle="style2"
                className="bg-light-grey-color text-dark-color"
                onClick={closeModal}
              >
                닫기
              </Button>
            ),
          })
        }}
      >
        연락하기
      </Button>
    </LazyDiv>
  )
}
