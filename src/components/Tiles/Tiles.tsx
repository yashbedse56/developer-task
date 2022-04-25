import React from 'react'
import './Tiles.scss'
import superMarket from '../../images/superMarket.svg'

interface props {
    image: string,
    content: string,
    amount: string,
}

export default function Tiles(props: props) {
    return (
        <div className='tile-wrapper'>
            <img src={props.image} alt="tile-img" className="tile-image"></img>
            <div className="tile-card card">
                <span>{props.content}</span>
                <span className="amount">{props.amount}</span>
                <a href="" className='cart-button' >
                    <img width={20} src={superMarket}></img>
                </a>
            </div>
        </div>
    )
}
