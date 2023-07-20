import LeftCol from "./LeftCol"
import MiddleCol from "./MiddleCol"
import RightCol from "./RightCol"

const QueryGPT = ()=>{
  return(
    <>
      <div className="container">
        <div className="row">
          <LeftCol />
          <MiddleCol />
          <RightCol />
        </div>
      </div>
    </>
  )
}

export default QueryGPT