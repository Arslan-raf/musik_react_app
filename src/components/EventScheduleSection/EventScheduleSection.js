import React, { useState } from "react";
import '../../css/event_schedule_section.css'
import Table from "./Table";
import PostService from '../../API/PostService'

export default function EventScheduleSection() {
    const [posts, setPosts] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    ///общее кол-во постов:
    const [totalPages, setTotalPages] = useState(0);
    
    const getPageCount = (totalCount, limit) => {
        return Math.ceil(totalCount / limit)
    }
    
    // const kek = async () => {
    //     const response = await PostService.getAll(limit, page);
    //     console.log(response.data);
    //     setPosts(response.data);
    //     const totalCount = response.headers['x-total-count'];
    //     setTotalPages(getPageCount(totalCount, limit));
    // }
    // kek()

    return (
        <section className="eventSchedule_section">
            <div className="container">
                <div className="eventSchedule_wrapper">
                    <h2 className="title">Event Schedule</h2>
                    <div className="eventSchedule_days">
                        <div className="eventSchedule_day eventSchedule_day1">
                            <h3 className="dDay">Day 01</h3>
                            <p className="date">16 August</p>
                            <hr className="hr-line" />
                        </div>
                        <div className="eventSchedule_day  eventSchedule_day2 eventSchedule_day_oppacity0">
                            <h3 className="dDay">Day 02</h3>
                            <p className="date">17 August</p>
                            <hr className="hr-line" />
                        </div>
                        <div className="eventSchedule_day eventSchedule_day3 eventSchedule_day_oppacity0">
                            <h3 className="dDay">Day 03</h3>
                            <p className="date">18 August</p>
                            <hr className="hr-line" />
                        </div>
                    </div>


                    <div className="myTable1">
                        <Table></Table>
                    </div>

                </div>
            </div>
        </section>
    )
}