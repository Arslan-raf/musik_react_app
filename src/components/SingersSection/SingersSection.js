import React from "react";
import '../../css/singers_section.css'
import singers_1 from '../../img/singers_1.png'
import singers_2 from '../../img/singers_2.png'
import singers_3 from '../../img/singers_3.png'
import singers_4 from '../../img/singers_4.png'


export default function SingersSection() {
    return (
        <section className="singers_section">
        <div className="container">
            <div className="singers">
                <div className="singers_content">
                    <h2 className="singers_title title">
                        Singers
                    </h2>
                    <p className="singers_text text">
                        Fusce justo mi, vehicula id arcu et, dapibus tristique lectus. Vivamus a elit sodales, tincidunt
                        nunc non, maximus lacus. Fusce a augue sed dolor auctor iaculis vitae id mauris. Integer ut
                        lectus
                        non neque suscipit luctus. Mauris et erat id ipsum condimentum cursus. Sed tempus enim non massa
                        mattis iaculis. In quis massa risus
                    </p>
                    <button className="blue_btn">View All Singers</button>
                </div>
                <div className="singers_imgs">
                    <div className="singers_imgs_top">
                        <img id="singers_1" src={singers_1} alt=""/>
                        <img id="singers_2" src={singers_2} alt=""/>
                    </div>
                    <div className="singers_imgs_bot">
                        <img id="singers_3" src={singers_3} alt=""/>
                        <img id="singers_4" src={singers_4} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}