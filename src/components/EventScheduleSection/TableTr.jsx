import React from "react";
import first_Speaker from '../../img/first_Speaker.png'
import Speaker_2 from '../../img/2_Speaker.png'
import Speaker_3 from '../../img/3_Speaker.png'

export default function TableTr({ dataItem }) {

    const speakers = [
        {
            id: 1,
            speakerName: "Yui Ronald",
            xs: "Booth: 2F12",
            src: first_Speaker
        },
        {
            id: 2,
            speakerName: "Bob John",
            xs: "Booth: 3G12",
            src: Speaker_2
        },
        {
            id: 3,
            speakerName: "Emma Satoshi",
            xs: "Booth: 2A35",
            src: Speaker_3
        }
    ]

    return (
        <tr>
            <td className="time_speaker">{dataItem.id}</td>
            <td className="content_speaker">
                {dataItem.body}
            </td>
            <td>
                <div className="sSpeakers">
                    <div className="sSpeaker">
                        {
                            speakers.map((speaker)=>{
                                if(speaker.id === dataItem.userId){
                                  return (
                                        <>
                                            <img src={speaker.src}/>
                                            <p>{speaker.speakerName}</p>
                                            <p>{speaker.xs}</p>
                                        </>
                                    )  
                                }
                            })
                        }
                    </div>
                </div>
            </td>
            <td className="last_kek">Preview<svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10 19.9999C4.477 19.9999 0 15.5229 0 9.99988C0 4.47688 4.477 -0.00012207 10 -0.00012207C15.523 -0.00012207 20 4.47688 20 9.99988C20 15.5229 15.523 19.9999 10 19.9999ZM10 17.9999C12.1217 17.9999 14.1566 17.157 15.6569 15.6567C17.1571 14.1564 18 12.1216 18 9.99988C18 7.87815 17.1571 5.84331 15.6569 4.34302C14.1566 2.84273 12.1217 1.99988 10 1.99988C7.87827 1.99988 5.84344 2.84273 4.34315 4.34302C2.84285 5.84331 2 7.87815 2 9.99988C2 12.1216 2.84285 14.1564 4.34315 15.6567C5.84344 17.157 7.87827 17.9999 10 17.9999V17.9999ZM8.622 6.41488L13.501 9.66688C13.5559 9.70339 13.6009 9.7529 13.632 9.81099C13.6631 9.86909 13.6794 9.93397 13.6794 9.99988C13.6794 10.0658 13.6631 10.1307 13.632 10.1888C13.6009 10.2469 13.5559 10.2964 13.501 10.3329L8.621 13.5849C8.56083 13.6248 8.49098 13.6476 8.41887 13.651C8.34676 13.6544 8.27507 13.6383 8.21141 13.6042C8.14774 13.5702 8.09448 13.5196 8.05726 13.4577C8.02004 13.3958 8.00025 13.3251 8 13.2529V6.74688C8.00013 6.67453 8.01989 6.60357 8.05716 6.54156C8.09443 6.47955 8.14782 6.42881 8.21165 6.39474C8.27547 6.36067 8.34734 6.34455 8.41961 6.3481C8.49187 6.35165 8.56182 6.37472 8.622 6.41488V6.41488Z"
                    fill="#222222" />
            </svg>
            </td>
        </tr>
    )
}