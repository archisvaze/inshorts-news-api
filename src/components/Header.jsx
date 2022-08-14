import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import sun from "../icons/sun.svg"
import moon from "../icons/moon.svg"
import icon from "../icons/journalism.png"
import inshorts_icon from "../icons/inshorts.png"
import { toggleTheme } from "../slices/mySlice"
import github_black from "../icons/github_black.svg"
import github_white from "../icons/github_white.svg"

export default function Header() {
    const dispatch = useDispatch();
    const state = useSelector(state => state.myState)
    return (
        <div className={'header-container ' + state.theme}>

            <div className="header">

                <div className="left">
                    <img src={icon} alt="" className="icon" />
                    <h2>News in short daily
                        <div className="attribution">
                            <img src={inshorts_icon} alt="" />
                            <p>Powered by Inshorts API</p>
                        </div>
                    </h2>

                </div>

                <div className="right">
                    <img className='toggle' style={{ cursor: "Pointer" }} onClick={() => dispatch(toggleTheme())} src={state.theme === "light" ? sun : moon} alt="" />
                    <a href="https://github.com/archisvaze" target="_blank" rel="noopener noreferrer">
                        <img src={state.theme === "light" ? github_black : github_white} alt="" className="github" />
                    </a>

                </div>

            </div>
        </div>
    )
}
