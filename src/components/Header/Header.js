import React from "react";
import '../../css/header.css';
import HeaderTop from "./HeaderTop";
import Timer from "./Timer";
import BackToTopButton from "../Header/BackToTopButton";

export default function Header() {


    return (
        <header className="header">
            <div className="container">

                <HeaderTop></HeaderTop>
                <div className="header_content">
                    <div className="header_content_first">
                        <h1 className="header_content_title">The Best experience of <span>music</span> in 2021</h1>
                        <p className="header_content_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            vitae ligula <br></br> placerat,
                            eleifend ex non, vehicula libero. Suspendisse eget tellus lectus.
                        </p>
                        <div className="header_getStarted">
                            <button className="red_btn">
                                Get Started
                            </button>
                            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_893_173)">
                                    <path
                                        d="M28.0001 51.3333C15.1131 51.3333 4.66675 40.887 4.66675 28C4.66675 15.113 15.1131 4.66663 28.0001 4.66663C40.8871 4.66663 51.3334 15.113 51.3334 28C51.3334 40.887 40.8871 51.3333 28.0001 51.3333ZM28.0001 46.6666C32.9508 46.6666 37.6987 44.7 41.1994 41.1993C44.7001 37.6986 46.6668 32.9507 46.6668 28C46.6668 23.0493 44.7001 18.3013 41.1994 14.8006C37.6987 11.3 32.9508 9.33329 28.0001 9.33329C23.0494 9.33329 18.3014 11.3 14.8008 14.8006C11.3001 18.3013 9.33342 23.0493 9.33342 28C9.33342 32.9507 11.3001 37.6986 14.8008 41.1993C18.3014 44.7 23.0494 46.6666 28.0001 46.6666ZM24.7847 19.635L36.1691 27.223C36.2971 27.3082 36.4021 27.4237 36.4747 27.5592C36.5473 27.6948 36.5853 27.8462 36.5853 28C36.5853 28.1537 36.5473 28.3051 36.4747 28.4407C36.4021 28.5763 36.2971 28.6918 36.1691 28.777L24.7824 36.365C24.642 36.458 24.479 36.5114 24.3108 36.5193C24.1425 36.5273 23.9753 36.4895 23.8267 36.4101C23.6782 36.3307 23.5539 36.2126 23.467 36.0682C23.3802 35.9239 23.334 35.7587 23.3334 35.5903V20.4096C23.3337 20.2408 23.3798 20.0752 23.4668 19.9305C23.5538 19.7859 23.6783 19.6675 23.8273 19.588C23.9762 19.5085 24.1439 19.4709 24.3125 19.4791C24.4811 19.4874 24.6443 19.5413 24.7847 19.635Z"
                                        fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_893_173">
                                        <rect width="56" height="56" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <h4>Watch Video</h4>
                        </div>
                    </div>
                    <Timer />
                </div>
            </div>

            <BackToTopButton></BackToTopButton>
        </header>

    )
}