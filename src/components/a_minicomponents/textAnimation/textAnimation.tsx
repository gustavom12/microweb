import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import './textAnimation.sass'

const AnimatedContainer = styled.div<any>`
    .notHidden{
      .animatedText{
        transition: all ease-in-out ${(props: any) => props.transitionTime}s;
        max-width: 0;
        &.active{
          transition: all ease-in-out ${(props: any) => props.transitionTime}s;
          max-width: ${(props: any) => props.width} ;
        }
    }}
  `

function TextAnimation(
  { children, delay = 0, deleteDelay = 5500, transitionTime = 0.5, margin = "5px 0" }:
    { children: any, delay?: number, deleteDelay?: number, transitionTime?: number, margin?: string }) {
  const [height, setHeight] = useState<any>("80px")
  const [width, setWidth] = useState<any>("500px")
  useEffect(() => {
    const text = textRef.current.querySelector(".animatedText")
    const textHidden = textHiddenRef.current.querySelector(".animatedText")
    const animation = () => {
      setWidth(window.getComputedStyle(textHidden).width)
      setHeight(window.getComputedStyle(textHidden).height)
      text.classList.add("active")
      // setTimeout(() => text.classList.remove("active"), (deleteDelay))
    }
    setTimeout(()=>animation(),delay)
  }, [delay, deleteDelay])
  const textRef: any = useRef()
  const textHiddenRef: any = useRef()
  return (
    <div className="textAnimatedContainer" style={{ height: height, margin: margin }}>
      <AnimatedContainer width={width} transitionTime={transitionTime} className="position-relative">
        <span className="notHidden" ref={textRef}>
          {children}
        </span>
        {/* This is to calculate width and height */}
        <div ref={textHiddenRef} className="hidden">
          {children}
        </div>
      </AnimatedContainer>
    </div>
  )
}
export default TextAnimation
