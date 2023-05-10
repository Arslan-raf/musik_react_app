import React from "react";
import cl from './MyModal.module.css';

const MyModal = ({ children, visible, setVisible }) => {

    const rootClasses = [cl.myModal]

    if (visible) {
        rootClasses.push(cl.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
                <div className="contact_form_block">
                    <div className="form_detalis">
                        <h3 className="form_heading">Fill in your details</h3>
                        <form action="#">
                            <div className="entryarea">
                                <input type="text" name="name" id="name" required autoComplete="off" />
                                <div className="labelline">Enter your name</div>
                            </div>

                            <div className="entryarea">
                                <input type="text" name="email" id="email" required autoComplete="off" />
                                <div className="labelline">Enter your email</div>
                            </div>

                            <div className="entryarea">
                                <input type="text" name="message" id="message" required autoComplete="off" />
                                <div className="labelline">Enter your message</div>
                            </div>

                            <input type="submit" value="Submit" id="btn" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyModal