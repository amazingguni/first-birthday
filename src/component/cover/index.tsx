import {
  BABY_NAME,
  FATHER_NAME,
  MOTHER_NAME,
  LOCATION,
  EVENT_DATE,
  EVENT_DATE_FORMAT,
} from "../../const"
import { COVER_IMAGE } from "../../images"
import { LazyDiv } from "../lazyDiv"

const DAY_OF_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

export const Cover = () => {
  return (
    <LazyDiv className="card cover">
      <div className="wedding-date">
        {EVENT_DATE.format("YYYY")}
        <div className="divider" />
        {EVENT_DATE.format("MM")}
        <div className="divider" />
        {EVENT_DATE.format("DD")}
      </div>
      <div className="wedding-day-of-week">
        {DAY_OF_WEEK[EVENT_DATE.day()]}
      </div>
      <div className="image-wrapper">
        <img src={COVER_IMAGE} alt="sample" />
      </div>
      <div className="subtitle">현서의 첫 번째 생일</div>
      <div className="names">
        {FATHER_NAME} · {MOTHER_NAME}의 딸 {BABY_NAME}
      </div>
      <div className="info">{EVENT_DATE.format(EVENT_DATE_FORMAT)}</div>
      <div className="info">{LOCATION}</div>
    </LazyDiv>
  )
}
