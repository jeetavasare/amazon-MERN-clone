import { useEffect, useState } from "react"

export const getWindowDimensions = () =>{
    return [window.innerHeight,window.innerWidth]
}

const useWindowDimensions = ()=>{
    let [WindowsDimensions,setWindowDimensions] = useState(getWindowDimensions())
    useEffect(()=>{
        window.addEventListener('resize',()=>{
            setWindowDimensions(getWindowDimensions())
        })
    },[])

    return WindowsDimensions
}


export default useWindowDimensions

