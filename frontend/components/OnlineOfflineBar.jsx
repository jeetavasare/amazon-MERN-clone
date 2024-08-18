import isOnline from "../utils/useOnline"
import useWindowDimensions from "../utils/useWindowsDimensions"

const OnlineOffline = ()=>{
    let Online = isOnline()
    
    return <>
        <div className="online-offline-bar" style={{display:Online?"none":"block",position:"sticky",top:"60px"}}>
            Looks like your are {Online ? "Online":"Offline"}
        </div>
    </>
}

export default OnlineOffline