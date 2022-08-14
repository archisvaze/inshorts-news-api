import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setNews } from '../slices/mySlice';
import Card from './Card';


export default function Main() {
    const dispatch = useDispatch();
    const state = useSelector(state => state.myState);
    let category = "world";
    useEffect(() => {
        fetch(`https://inshorts.deta.dev/news?category=${category}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.data)
                dispatch(setNews(data.data))
            })
        // eslint-disable-next-line
    }, [])




    return (
        <div className={'main-container ' + state.theme}>
            <div style={{ display: state.news.length === 0 ? "flex" : "none" }} className="loading">
                <div className="dots-container">
                    <div className="dot dot1"> </div>
                    <div className="dot dot2"></div>
                    <div className="dot dot3"></div>
                </div>
            </div>
            <div className="main">
                {state.news.map(obj => {
                    return (
                        <Card key={obj.id} obj={obj} />
                    )
                })}
            </div>
        </div>
    )
}
