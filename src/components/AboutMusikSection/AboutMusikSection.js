import React from "react";
import '../../css/about_musik_section.css'
import  about_musik_bg from '../../img/about_musik_bg.png'
import  about_musik from '../../img/about_musik.png'

export default function AboutMusikSection(){
    return(
        <section className="about_musik_section">
        <div className="container">
            <div className="about_musik">
                <img src={about_musik_bg} alt="" className="second_img"/>
                <img src={about_musik} alt="" className="first_img"/>
                <div className="about_musik_content">
                    <h2 className="about_musik_title title">
                        About Musik
                    </h2>
                    <p className="about_musik_text text">
                        Fusce justo mi, vehicula id arcu et, dapibus tristique lectus. Vivamus a elit sodales, tincidunt
                        nunc non, maximus lacus. Fusce a augue sed dolor auctor iaculis vitae id mauris. Integer ut
                        lectus
                        non neque suscipit luctus. Mauris et erat id ipsum condimentum cursus. Sed tempus enim non massa
                        mattis iaculis. In quis massa risus
                    </p>
                    <button className="blue_btn">Learn More</button>
                </div>
            </div>
        </div>
    </section>
    )
}