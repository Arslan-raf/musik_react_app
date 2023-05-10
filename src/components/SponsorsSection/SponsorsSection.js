import React from "react";
import '../../css/sponsors_section.css'
import google from '../../img/google.png'
import microsoft from '../../img/microsoft.png'
import airbnb from '../../img/airbnb.png'
import axure from '../../img/axure.png'
import apple from '../../img/apple.png'
import facebook from '../../img/facebook.png'
import nokia from '../../img/nokia.png'
import oracle from '../../img/oracle.png'
import pink_arrow from '../../img/pink_arrow.png'
import blue_triangle_with_dots from '../../img/blue_triangle_with_dots.png'


export default function SponsorsSection() {
    return (
        <section className="sponsors_section">
            <div className="container">
                <div className="sponsors_content">
                    <h1 className="title sponsors_title">Our Sponsors</h1>
                    <div className="sponsors_items">

                        <img src={google} alt="" />
                        <img src= {microsoft} alt="" />
                        <img src= {airbnb} alt="" />
                        <img src= {axure}  alt="" />


                        <img src= {apple} alt="" />
                        <img src= {facebook} alt="" />
                        <img src= {nokia} alt="" />
                        <img src= {oracle} alt="" />

                    </div>
                    <button className="blue_btn">Become a Sponsor</button>
                </div>
            </div>

            <img className="blue_triangle_with_dots" src= {blue_triangle_with_dots} alt="" />
            <img className="pink_arrow" src={pink_arrow} alt="" />
        </section>
    )
}