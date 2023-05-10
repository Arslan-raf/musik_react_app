import React from "react";
import '../../css/contacts_section.css'

export default function ContactsSection() {
    return (
        <section className="contacts_section">
        <div className="contact_us_block">
            <h2 className="contact_us_block_title">Contact us</h2>
            <p className="contact_us_block_sub_title">Have an inquiry? We'll be happy to assist you</p>


            <ul className="contacts">
                <li className="item_contact">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M18 13.42V16.956C18.0001 17.2092 17.9042 17.453 17.7316 17.6382C17.559 17.8234 17.3226 17.9363 17.07 17.954C16.633 17.984 16.276 18 16 18C7.163 18 0 10.837 0 2C0 1.724 0.015 1.367 0.046 0.93C0.0637224 0.677444 0.176581 0.441011 0.361804 0.268409C0.547026 0.0958068 0.790823 -0.000114433 1.044 2.56579e-07H4.58C4.70404 -0.000125334 4.8237 0.045859 4.91573 0.12902C5.00776 0.212182 5.0656 0.326583 5.078 0.45C5.101 0.68 5.122 0.863 5.142 1.002C5.34073 2.38892 5.748 3.73783 6.35 5.003C6.445 5.203 6.383 5.442 6.203 5.57L4.045 7.112C5.36445 10.1865 7.81455 12.6365 10.889 13.956L12.429 11.802C12.4919 11.714 12.5838 11.6509 12.6885 11.6237C12.7932 11.5964 12.9042 11.6068 13.002 11.653C14.267 12.2539 15.6156 12.6601 17.002 12.858C17.141 12.878 17.324 12.9 17.552 12.922C17.6752 12.9346 17.7894 12.9926 17.8724 13.0846C17.9553 13.1766 18.0012 13.2961 18.001 13.42H18Z"
                            fill="#FFA3A3" />
                    </svg>
                    <a className="" href="#">
                        +92 333 6527366
                    </a>
                </li>
                <li className="item_contact">
                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1 0H19C19.2652 0 19.5196 0.105357 19.7071 0.292893C19.8946 0.48043 20 0.734784 20 1V17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0ZM10.06 8.683L3.648 3.238L2.353 4.762L10.073 11.317L17.654 4.757L16.346 3.244L10.061 8.683H10.06Z"
                            fill="#FFA3A3" />
                    </svg>
                    <a href="#">
                        abuzer@greelogix.com
                    </a>
                </li>
                <li className="item_contact">
                    <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15.364 15.3639L9 21.7279L2.636 15.3639C1.37734 14.1052 0.520187 12.5016 0.172928 10.7558C-0.17433 9.00995 0.00390685 7.20035 0.685099 5.55582C1.36629 3.91129 2.51984 2.50569 3.99988 1.51677C5.47992 0.527838 7.21998 0 9 0C10.78 0 12.5201 0.527838 14.0001 1.51677C15.4802 2.50569 16.6337 3.91129 17.3149 5.55582C17.9961 7.20035 18.1743 9.00995 17.8271 10.7558C17.4798 12.5016 16.6227 14.1052 15.364 15.3639V15.3639ZM9 10.9999C9.53044 10.9999 10.0391 10.7892 10.4142 10.4141C10.7893 10.0391 11 9.53035 11 8.99992C11 8.46949 10.7893 7.96078 10.4142 7.58571C10.0391 7.21064 9.53044 6.99992 9 6.99992C8.46957 6.99992 7.96086 7.21064 7.58579 7.58571C7.21072 7.96078 7 8.46949 7 8.99992C7 9.53035 7.21072 10.0391 7.58579 10.4141C7.96086 10.7892 8.46957 10.9999 9 10.9999Z"
                            fill="#FFA3A3" />
                    </svg>
                    <a href="#">
                        Plot 252, Block L Phase 2 Johar Town, Lahore, PK
                    </a>
                </li>
            </ul>
        </div>

        <div className="contact_form_block">
            <div className="form_detalis">
                <h3 className="form_heading">Fill in your details</h3>
                <form action="#">
                    <div className="entryarea">
                        <input type="text" name="name" id="name" required autoComplete="off" />
                        <div className="labelline">Enter your name</div>
                    </div>

                    <div className="entryarea">
                        <input type="text" name="email" id="email" required autoComplete="off"/>
                        <div className="labelline">Enter your email</div>
                    </div>

                    <div className="entryarea">
                        <input type="text" name="message" id="message" required autoComplete="off"/>
                        <div className="labelline">Enter your message</div>
                    </div>

                    <input type="submit" value="Submit" id="btn"/>
                </form>
            </div>
            {/* <svg width="72" height="48" viewBox="0 0 72 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 48C24 21.4903 45.4903 0 72 0V48H24Z" fill="#FFA3A3" />
                <path d="M0 0C26.5097 0 48 21.4903 48 48H0V0Z" fill="#84C4FF" />
                <g style="mix-blend-mode:overlay">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M24 47.9999H48C48 35.8265 43.4684 24.7116 36 16.25C28.5316 24.7116 24 35.8265 24 47.9999Z"
                        fill="#84C4FF" />
                </g>
            </svg> */}

        </div>
    </section>
    )
}