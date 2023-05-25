import React, { useEffect, useState } from "react";
import '../../css/event_schedule_section.css'
import Table from "./Table";
import Loader from "../UI/Loader/Loader";


export default function EventScheduleSection() {

    const [data, setData] = useState()

    const limit = 5;
    const [page, setPage] = useState(1);
    const [isPostsLoading, setIsPostsLoading] = useState(false)

    useEffect(() => { fetchPosts() }, [page])

    async function fetchPosts() {
        setIsPostsLoading(true)
        setTimeout(async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
                .then(response => response.json())

            setData(response)
            setIsPostsLoading(false)

        }, 100)

    }

    return (
        <section className="eventSchedule_section">
            <div className="container">
                <div className="eventSchedule_wrapper">
                    <h2 className="title">Event Schedule</h2>
                    <div className="eventSchedule_days">
                        <div onClick={() => setPage(1)} className={(page === 1) ? "eventSchedule_day eventSchedule_day_oppacity1" : "eventSchedule_day   eventSchedule_day_oppacity0"}>
                            <h3 className="dDay">Day 01</h3>
                            <p className="date">16 August</p>
                            <hr className="hr-line" />
                        </div>
                        <div onClick={() => setPage(2)} className={(page === 2) ? "eventSchedule_day  eventSchedule_day_oppacity1" : "eventSchedule_day   eventSchedule_day_oppacity0"}>
                            <h3 className="dDay">Day 02</h3>
                            <p className="date">17 August</p>
                            <hr className="hr-line" />
                        </div>
                        <div onClick={() => { setPage(3); }} className={(page === 3) ? "eventSchedule_day  eventSchedule_day_oppacity1" : "eventSchedule_day   eventSchedule_day_oppacity0"}>
                            <h3 className="dDay">Day 03</h3>
                            <p className="date">18 August</p>
                            <hr className="hr-line" />
                        </div>
                    </div>


                    <div className="myTable1">
                        {
                            isPostsLoading
                                ? <Loader></Loader>
                                : <Table data={data}></Table>
                        }

                    </div>

                </div>
            </div>
        </section>
    )
}