import React, { useEffect, useState } from "react";
import '../../css/testimonial_section.css'
import Avatar3 from '../../img/Avatar3.png'
import Avatar2 from '../../img/Avatar2.png'
import Avatar1 from '../../img/Avatar1.png'

export default function TestimonialSection() {

    // useEffect(() => {
    //     let xhr = new XMLHttpRequest();
    //     xhr.open('GET', 'https://jsonplaceholder.typicode.com/photos?_limit=3');
    //     xhr.responseType = 'json';
    //     xhr.send();
    //     xhr.onload = function () {
    //         let response = xhr.response;
    //         console.log(response);
    //     };
    // }, [])

    const data = [
        {
            id: 1,
            image: Avatar3,
            name: 'Johnny Doe',
            title: 'ipsum.com',
            quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            id: 2,
            image: Avatar1,
            name: 'Ellie James',
            title: 'ipsum.com',
            quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            id: 3,
            image: Avatar2,
            name: 'Myne Barack',
            title: 'ipsum.com',
            quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },

    ];
    const [people, setPeople] = useState(data);
    const [currentIndex, setcurrentIndex] = useState(0);

    useEffect(() => {
        const lastIndex = people.length - 1;
        if (currentIndex < 0) {
            setcurrentIndex(lastIndex);
        }
        if (currentIndex > lastIndex) {
            setcurrentIndex(0);
        }

    }, [currentIndex, people]);


    useEffect(() => {
        let slider = setInterval(() => setcurrentIndex(prevState => prevState + 1), 5000);

        return () => { clearInterval(slider); }
    }, [currentIndex])


    return (
        <section className="testimonials_section">
            <div className="testimonials_slider_wrapper">
                <div className="testimonials_title">
                    <h1 className="title testimonials_title">Testimonials</h1>
                </div>
                <div className="section-center">
                    {people.map((person, personIndex) => {
                        const { id, image, name, title, quote } = person;
                        let position = 'nextSlide';
                        if (personIndex === currentIndex) {
                            position = 'activeSlide'
                        }
                        if (personIndex === currentIndex - 1 || (currentIndex === 0 && personIndex === people.length - 1)) {
                            position = 'lastSlide'
                        }
                        return (
                            <article className={position} key={id}>
                                <img src={image} alt={name} className='person-img' />
                                <h4 className="">{name}</h4>
                                <p className="testimonials_title">{title}</p>
                                <div className="message">
                                    <p className="autor_message">
                                        {quote}
                                        </p>
                                </div>
                            </article>
                        )
                    })}
                </div>
                <div className="btns_testimonials">
                    <button className="prev" onClick={() => setcurrentIndex(prevState => prevState - 1)}>
                        &#9668;
                    </button>
                    <button className="next" onClick={() => setcurrentIndex(prevState => prevState + 1)}>
                        &#9658;
                    </button>
                </div>
            </div>
        </section>
    )
}