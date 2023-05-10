import React from "react";
import first_Speaker from '../../img/first_Speaker.png'
import Speaker_2 from '../../img/2_Speaker.png'
import Speaker_3 from '../../img/3_Speaker.png'
import Speaker_4 from '../../img/4_Speaker.png'
import Speaker_5 from '../../img/5_Speaker.png'

const Table = () => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <td>Time</td>
                    <td>Content</td>
                    <td>Speakers</td>
                    <td></td>
                </tr>

            </thead>
            <tbody>
                <tr>
                    <td className="time_speaker">11:00 AM to 12:00 PM</td>
                    <td className="content_speaker">Vestibulum vel eros vel metus lacinia feugiat a nec metus.
                    </td>
                    <td>
                        <div className="sSpeakers">
                            <div className="sSpeaker">
                                <img src={first_Speaker} alt="" />
                                <div className="sSpeker_info">
                                    <h4>Yui Ronald</h4>
                                    <p>Booth: 2F12</p>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td className="last_kek">Preview <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10 19.9999C4.477 19.9999 0 15.5229 0 9.99988C0 4.47688 4.477 -0.00012207 10 -0.00012207C15.523 -0.00012207 20 4.47688 20 9.99988C20 15.5229 15.523 19.9999 10 19.9999ZM10 17.9999C12.1217 17.9999 14.1566 17.157 15.6569 15.6567C17.1571 14.1564 18 12.1216 18 9.99988C18 7.87815 17.1571 5.84331 15.6569 4.34302C14.1566 2.84273 12.1217 1.99988 10 1.99988C7.87827 1.99988 5.84344 2.84273 4.34315 4.34302C2.84285 5.84331 2 7.87815 2 9.99988C2 12.1216 2.84285 14.1564 4.34315 15.6567C5.84344 17.157 7.87827 17.9999 10 17.9999V17.9999ZM8.622 6.41488L13.501 9.66688C13.5559 9.70339 13.6009 9.7529 13.632 9.81099C13.6631 9.86909 13.6794 9.93397 13.6794 9.99988C13.6794 10.0658 13.6631 10.1307 13.632 10.1888C13.6009 10.2469 13.5559 10.2964 13.501 10.3329L8.621 13.5849C8.56083 13.6248 8.49098 13.6476 8.41887 13.651C8.34676 13.6544 8.27507 13.6383 8.21141 13.6042C8.14774 13.5702 8.09448 13.5196 8.05726 13.4577C8.02004 13.3958 8.00025 13.3251 8 13.2529V6.74688C8.00013 6.67453 8.01989 6.60357 8.05716 6.54156C8.09443 6.47955 8.14782 6.42881 8.21165 6.39474C8.27547 6.36067 8.34734 6.34455 8.41961 6.3481C8.49187 6.35165 8.56182 6.37472 8.622 6.41488V6.41488Z"
                            fill="#222222" />
                    </svg>
                    </td>
                </tr>
                <tr>
                    <td className="time_speaker">12:00 PM to 03:00 PM</td>
                    <td className="content_speaker">Duis nec sodales nibh. Proin lectus tortor, rutrum vel
                        vulputate vitae, fringilla id
                        magna. Vestibulum ornare eget urna nec pulvinar. Praesent porttitor convallis
                        blandit.
                        Fusce vel egestas dolor. Donec eu augue enim. Donec rutrum non lacus ac rhoncus.
                        Morbi
                        quis luctus leo, nec cursus ex.</td>
                    <td>
                        <div className="sSpeakers">
                            <div className="sSpeaker">
                                <img src={Speaker_2} alt="" />
                                <div className="sSpeker_info">
                                    <h4>Bob John</h4>
                                    <p>Booth: 3G12</p>
                                </div>
                            </div>
                            <div className="sSpeaker">
                                <img src={first_Speaker} alt="" />
                                <div className="sSpeker_info">
                                    <h4>Yui Ronald</h4>
                                    <p>Booth: 2F12</p>
                                </div>
                            </div>
                            <div className="sSpeaker">
                                <img src={Speaker_3} alt="" />
                                <div className="sSpeker_info">
                                    <h4>Emma Satoshi</h4>
                                    <p>Booth: 2A35</p>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td className="last_kek">Live <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_893_307)">
                            <path
                                d="M16 4C16.2652 4 16.5196 4.10536 16.7071 4.29289C16.8946 4.48043 17 4.73478 17 5V9.2L22.213 5.55C22.288 5.49746 22.3759 5.4665 22.4672 5.4605C22.5586 5.4545 22.6498 5.4737 22.731 5.51599C22.8122 5.55829 22.8802 5.62206 22.9276 5.70035C22.9751 5.77865 23.0001 5.86846 23 5.96V18.04C23.0001 18.1315 22.9751 18.2214 22.9276 18.2996C22.8802 18.3779 22.8122 18.4417 22.731 18.484C22.6498 18.5263 22.5586 18.5455 22.4672 18.5395C22.3759 18.5335 22.288 18.5025 22.213 18.45L17 14.8V19C17 19.2652 16.8946 19.5196 16.7071 19.7071C16.5196 19.8946 16.2652 20 16 20H2C1.73478 20 1.48043 19.8946 1.29289 19.7071C1.10536 19.5196 1 19.2652 1 19V5C1 4.73478 1.10536 4.48043 1.29289 4.29289C1.48043 4.10536 1.73478 4 2 4H16ZM15 6H3V18H15V6ZM7.4 8.829C7.47611 8.82879 7.55069 8.8503 7.615 8.891L11.97 11.663C12.0266 11.6992 12.0731 11.749 12.1054 11.8079C12.1376 11.8668 12.1545 11.9329 12.1545 12C12.1545 12.0671 12.1376 12.1332 12.1054 12.1921C12.0731 12.251 12.0266 12.3008 11.97 12.337L7.615 15.11C7.55434 15.1487 7.48438 15.1703 7.41248 15.1725C7.34059 15.1748 7.26941 15.1576 7.20646 15.1228C7.14351 15.088 7.0911 15.0368 7.05477 14.9747C7.01844 14.9127 6.99951 14.8419 7 14.77V9.23C7 9.009 7.18 8.83 7.4 8.83V8.829ZM21 8.84L17 11.64V12.358L21 15.158V8.84Z"
                                fill="#FC5252" />
                        </g>
                        <defs>
                            <clipPath id="clip0_893_307">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    </td>
                </tr>
                <tr>
                    <td className="time_speaker">03:00 PM to 04:00 PM</td>
                    <td className="content_speaker">Vestibulum vel eros vel metus lacinia feugiat a nec metus.
                    </td>
                    <td>
                        <div className="sSpeakers">
                            <div className="sSpeaker">
                                <img src={Speaker_4} alt="" />
                                <div className="sSpeker_info">
                                    <h4>Bob John</h4>
                                    <p>Booth: 3G12</p>
                                </div>
                            </div>
                            <div className="sSpeaker">
                                <img src={Speaker_5} alt="" />
                                <div className="sSpeker_info">
                                    <h4>Yui Ronald</h4>
                                    <p>Booth: 2F12</p>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td className="last_kek">Upcoming <svg width="24" height="24" viewBox="0 0 24 24"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_893_326)">
                            <path
                                d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM13 12H17V14H11V7H13V12Z"
                                fill="#222222" />
                        </g>
                        <defs>
                            <clipPath id="clip0_893_326">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    </td>
                </tr>

            </tbody>
        </table>
    );
};

export default Table