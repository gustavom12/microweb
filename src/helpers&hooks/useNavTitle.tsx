import { useEffect, useState } from "react"

function useNavTitle (ElementsIds:Array<string>){
  const [navTitle, setNavTitle] = useState("header")
  useEffect(()=>{
    const obsCallback = (entries:any)=>{
      entries.forEach((entry:any)=>{
        if(!entry.isIntersecting)return;
        if(entry.target.id === "header" )setNavTitle("header")
        if(entry.target.id === "services" )setNavTitle("services")
        if(entry.target.id === "contact_us" )setNavTitle("contact_us")
        if(entry.target.id === "portfolio")setNavTitle("portfolio")
      })
    }
    ElementsIds.forEach((el:string)=>{
      const observer = new IntersectionObserver(obsCallback,{threshold:0.7})
      const element:any = document.getElementById(el)
      observer.observe(element)
    })
  },[ElementsIds])
  return navTitle
}
export default useNavTitle
