import { useEffect, useState } from "react"

const isOnline = ()=>{
    
    let [Online,setOnline] = useState(true)
    useEffect(()=>{
        window.addEventListener("online",()=>{setOnline(true)})
        window.addEventListener("offline",()=>{setOnline(false)})

    }
    ,[])
    return Online
}

export default isOnline