import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import "dayjs/locale/ko"

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale("ko")

export { dayjs }

export const EVENT_DATE = dayjs.tz("2026-01-03 11:00", "Asia/Seoul")
export const EVENT_DATE_FORMAT = `YYYY년 MMMM D일 dddd A h시${EVENT_DATE.minute() === 0 ? "" : " m분"}`

// 예식 당월 휴무일. 켈린더에 표시하기 위함.
// 예: 예식일 8월 -> 8월 15일 광복절
export const HOLIDAYS = [1]

export const LOCATION = "오월식당 2층"
export const LOCATION_ADDRESS = "경기도 용인시 수지구 동천로 411 오월식당 2층"

// 카카오톡 공유 시 위치 정보로 사용할 주소.
// LOCATION 과 동일하게 설정해도 무방하나, 필요에 따라 좀 더 상세히 작성 가능.
export const SHARE_ADDRESS = LOCATION
export const SHARE_ADDRESS_TITLE = LOCATION

// 네이버 지도 및 카카오 네비게이션에 사용할 좌표. [경도, 위도] 형식.
export const EVENT_LOCATION_POSITION = [127.061298, 37.343721]

// 네이버 지도의 웨딩홀 장소 ID
// 네이버 지도 웹페이지에서 웨딩홀 검색 후 URL에서 확인 가능.
// 예: https://map.naver.com/p/entry/place/13321741 -> 13321741
export const NMAP_PLACE_ID = 1940270137

// 카카오 지도의 웨딩홀 장소 ID
// 카카오 지도 웹페이지에서 웨딩홀 검색 후 해당 장소에서 상세보기 클릭 시 URL에서 확인 가능.
// 예: https://place.map.kakao.com/8634826 -> 8634826
export const KMAP_PLACE_ID = 838195683

export const BABY_NAME = "나현서"
export const FATHER_NAME = "나영근"
export const MOTHER_NAME = "김소연"

export const FAMILY_INFO = [
  {
    relation: "아빠",
    name: FATHER_NAME,
    phone: "010-9950-6964",
    account: "은행 000000000000",
  },
  {
    relation: "엄마",
    name: MOTHER_NAME,
    phone: "010-0000-0000",
    account: "은행 000000000000",
  },
]
