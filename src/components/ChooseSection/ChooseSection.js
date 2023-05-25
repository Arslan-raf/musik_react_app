import React, {useState} from "react";
import '../../css/choose_section.css'
// import first_Speaker from '../../img/first_Speaker.png'
// import Speaker_2 from '../../img/2_Speaker.png'
import MyModal from "../UI/MyModal/MyModal";


export default function ChooseSection() {
    const [modal, setModal] = useState(false);
    
    return (
        <section className="choose_section">
            <div className="container">
                <h2 className="title choose_title">Choose a Tier that`s right for you</h2>
                <div className="choose_items" >
                    <div className="choose_item choose_item_1">
                        <h3 className="">Basic</h3>
                        <h1>$100</h1>
                        <p>1 Seat Available</p>
                        <p>Access to Wifi Router</p>
                        <p className="">Free Food & Coffee</p>
                        <button className="white_btn_2" onClick={() => { setModal(true) }}>Get Tickets</button>
                    </div>
                    <div className="choose_item choose_item_2">
                        <h3>Free Food & Coffee</h3>
                        <h1>$150</h1>
                        <p>1 Seat Available</p>
                        <p className="">Access to Wifi Router</p>
                        <p className="">Free Food & Coffee</p>
                        <button className="blue_btn" onClick={() => { setModal(true) }}>Get Tickets</button>
                    </div>
                    <div className="choose_item choose_item_3">
                        <h3>Premium</h3>
                        <h1>$200</h1>
                        <p>2 Seats Available</p>
                        <p className="">Access to Wifi Router</p>
                        <p className="">Free Food & Coffee</p>
                        <button className="white_btn_2" onClick={() => { setModal(true) }}>Get Tickets</button>
                    </div>
                </div>
            </div>

            <MyModal visible={modal} setVisible={setModal}/>
        </section>
    )
}