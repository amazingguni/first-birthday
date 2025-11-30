import { STATIC_ONLY } from "../../env"
import { LazyDiv } from "../lazyDiv"


export const Information = () => {
  if (STATIC_ONLY) {
    return (
      <LazyDiv className="card information">
      </LazyDiv>
    )
  }

  return (
    <LazyDiv className="card information">
      <h2 className="english">Information</h2>
    </LazyDiv>
  )
}
