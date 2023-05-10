import React from "react";
import '../../css/exploreBy_category_section.css'
import Dj_Mixer from '../../img/Dj_Mixer.png'
import Bagpipes from '../../img/Bagpipes.png'
import Saxophone from '../../img/Saxophone.png'
import Guitar from '../../img/Guitar.png'
import Trumpet from '../../img/Trumpet.png'

export default function ExploreByCategorySection() {
    return (
        <section className="exploreByCategory_section">
            <div className="exploreByCategory ">
                <h2 className="exploreByCategory_title "><span>Explore</span> By Category</h2>
                <div className="categories horizontal-scroll-wrapper squares">

                    <div className="category category_1">
                        <div className="card">
                            <div className="side front">
                                <img src={Dj_Mixer} alt="" />
                            </div>

                            <div className="side back">
                                <div className="bio">
                                    <h3>Pop</h3>
                                    <p className="text">Duis nec sodales nibh. Proin lectus tortor,
                                        rutrum vel vulputate vitae</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="category category_2">
                        <img src={Bagpipes} alt="" />
                        <h3>Folk</h3>
                        <p className="text">Duis nec sodales nibh. Proin lectus tortor,
                            rutrum vel vulputate vitae</p>
                    </div>
                    <div className="category category_3">
                        <img src={Saxophone} alt="" />
                        <h3>Instrumental</h3>
                        <p className="text">Duis nec sodales nibh. Proin lectus tortor,
                            rutrum vel vulputate vitae</p>
                    </div>
                    <div className="category category_4">
                        <img src={Guitar} alt="" />
                        <h3>Rock</h3>
                        <p className="text">Duis nec sodales nibh. Proin lectus tortor,
                            rutrum vel vulputate vitae</p>
                    </div>
                    <div className="category category_5">
                        <img src={Trumpet} alt="" />
                        <h3>Jazz</h3>
                        <p className="text">Duis nec sodales nibh. Proin lectus tortor,
                            rutrum vel vulputate vitae</p>
                    </div>
                </div>
            </div>
        </section>
    )
}