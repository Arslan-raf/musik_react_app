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

                        <a href="https://about.google/?utm_source=google-RU&utm_medium=referral&utm_campaign=hp-footer&fg=1" target="_blank"> <img src={google} alt="" /></a>
                        <a href="https://www.microsoft.com/ru-ru" target="_blank"><img src={microsoft} alt="" /></a>
                        <a href="https://www.airbnb.ru/" target="_blank"><img src={airbnb} alt="" /></a>
                        <a href="https://www.axure.com/" target="_blank"><img src={axure} alt="" /></a>


                        <a href="https://www.apple.com/" target="_blank"><img src={apple} alt="" /></a>
                        
                        <div className="facebook">
                            <a href="" target="_blank"><img src={facebook} alt="" />
                                <div className="warning_wrapper">
                                    <p className="warning_text">
                                        *В соответствии с ч. 1 ст. 11 ФЗ от 01.07.2021 № 236-ФЗ «О деятельности иностранных
                                        лиц в информационно-телекоммуникационной сети «Интернет» на территории Российской Федерации»,
                                        Роскомнадзором принято решение об информировании пользователей en.wikipedia.org, что иностранное лицо,
                                        владеющее информационным ресурсом, является нарушителем законодательства Российской Федерации.
                                    </p>
                                </div>
                            </a>
                        </div>
                        <a href="https://www.nokia.com/" target="_blank"><img src={nokia} alt="" /></a>
                        <a href="https://www.oracle.com/" target="_blank"><img src={oracle} alt="" /></a>

                    </div>

                    <button className="blue_btn">Become a Sponsor</button>
                </div>
            </div>

            <img className="blue_triangle_with_dots" src={blue_triangle_with_dots} alt="" />
            <img className="pink_arrow" src={pink_arrow} alt="" />
        </section>
    )
}

/*В соответствии с ч. 1 ст. 11 ФЗ от 01.07.2021 № 236-ФЗ «О деятельности иностранных 
лиц в информационно-телекоммуникационной сети «Интернет» на территории Российской Федерации», 
Роскомнадзором принято решение об информировании пользователей en.wikipedia.org, что иностранное лицо,
 владеющее информационным ресурсом, является нарушителем законодательства Российской Федерации. */