'use client'
import React, { useState, useEffect, useRef } from 'react'

export const Cursor = () => {
    const cursorRef = useRef<any>();
    const [cursorX,setCursorX] = useState(0)
    const [cursorY, setCursorY] = useState(0)

    

    useEffect(() => {
            window.addEventListener('mousemove', (e) => {
                setCursorX(e.clientX)
                setCursorY(e.clientY)
                const cursorWidth = cursorRef.current.offsetWidth;
      const cursorHeight = cursorRef.current.offsetHeight;

      const newX = cursorX - cursorWidth / 2;
                const newY = cursorY - cursorHeight / 2;
                cursorRef.current.style.left = `${newX}px`;
                cursorRef.current.style.top = `${newY}px`;
            })
        }, [cursorX,cursorY])

       



  return (
    <div
    ref={cursorRef}
    aria-label="custom cursor"
    aria-description="Custom cursor effect created with this div"
    className="cursor"
  ></div>
  )
}
