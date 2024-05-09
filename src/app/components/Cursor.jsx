"use client"
import React, { useState, useEffect } from 'react';

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [cursorColor, setCursorColor] = useState('bg-indigo-500');
    const [cursorSize, setCursorSize] = useState('w-24 h-24');

    const halfDimension = (size) => {
        const numericSize = parseInt(size.slice(2), 10);
        const pixelSize = numericSize * 4 / 2;
        return pixelSize / 2;
    }

    const moveCircle = (e) => {
        const size = halfDimension(cursorSize);
        const xPosition = e.pageX - size;
        const yPosition = e.pageY - size;

        setPosition({ x: xPosition, y: yPosition });

        const elem = document.elementFromPoint(e.clientX, e.clientY);

        if (elem && (elem.tagName === 'A' || elem.tagName === 'BUTTON' || getComputedStyle(elem).cursor === 'pointer')) {
            setCursorColor('bg-white')
            setCursorSize('w-14 h-14')
        } else {
            setCursorColor('bg-indigo-500')
            setCursorSize('w-24 h-24')
        }
    };

    useEffect(() => {
        const updatePosition = (e) => moveCircle(e);
        window.addEventListener('mousemove', updatePosition);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
        };
    }, [cursorSize]);

    return (
        <div style={{
            top: `${position.y}px`,
            left: `${position.x}px`,
            pointerEvents: 'none',
            transition: 'width 0.3s ease-in-out, height 0.3s ease-in-out, background-color 0.3s ease-in-out',
            transform: 'translate(-25%, -25%)'
        }} className={`absolute ${cursorSize} ${cursorColor} opacity-60 rounded-full z-20 pointer-events-none`} />
    )
}

export default Cursor
