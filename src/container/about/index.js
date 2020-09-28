import React, { useState } from 'react';
import Header from '../../components/header'

function About() {
    const year = new Date().getFullYear()

    const [names, setNames] = useState(['Vasya', 'Kolya']);

    const nameItems = names.map((item, i) => <li key={i}>{item}</li>)

    const handleAddItem = () => {
        const data = [...names, 'Text']
        setNames(data);
    }


    return (
        <div className="about">
            <button onClick={handleAddItem}>Add item</button>
            <ul>
                {nameItems}
            </ul>
            <Header />
            About
        </div>
    )
}

export default About;