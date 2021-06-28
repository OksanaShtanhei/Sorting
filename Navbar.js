import React from 'react'
import './App.css'

const Navbar = ({sort, accordion, data, uniques}) => {
   
    return (
        <div className="nav">
            <button onClick={sort}>New</button>
            <button onClick={sort}>Price desended</button>
            <button onClick={sort}>Price acsended</button>
            <div className="list">
                <button onMouseEnter={accordion}>Product type</button>
                <ul className="type-list">
                    {uniques.length > 0 && uniques.map((el, index) => {
                        return <li key={index} onClick={sort}>{el}</li>
                    })}
                </ul>    
            </div>
        </div>
    )
}
export default Navbar