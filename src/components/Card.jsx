import React from 'react'

export default function Card(props) {
    let obj = props.obj
    return (
        <div className='card'>
            <img src={obj.imageUrl} alt="" />
            <div className="info">
                <h3>{obj.title}</h3>
                <p className="date">{obj.date}</p>
                <p className="content">{obj.content}</p>
                <p className="author">by {obj.author}</p>

                <a href={obj.readMoreUrl} target="_blank" rel="noreferrer">Read more</a>
            </div>
        </div>
    )
}
