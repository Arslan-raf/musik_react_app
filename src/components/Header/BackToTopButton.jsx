import React, { useEffect, useState } from "react";

export default function BackToTopButton() {

    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if (window.scrollY > 100) {
                setBackToTopButton(true)
            }
            else{
                setBackToTopButton(false)
            }
        })
    },[])

    const scrollUp = () =>{
        window.scrollTo({
            top:0,
            behavior:"smooth" //Элемент прокручивается плавно
        })
    }

    return (
        <div>
            {backToTopButton && (
                <button 
                    className="backToTopButton"
                    style={{
                        position: "fixed",
                        bottom: "50px",
                        right: "50px",
                        height: "50px",
                        width: "50px",
                        fontSize: "50px",
                        zIndex: 10
                    }}
                    onClick={scrollUp}
                >
                    <box-icon type='solid' name='up-arrow' id="up-arrow"></box-icon>
                </button>
            )}
        </div>
    )
}