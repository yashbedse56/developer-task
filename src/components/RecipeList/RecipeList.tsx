import React from 'react'
import Tiles from '../Tiles/Tiles'
import tile1 from '../../images/tile1.png'
import tile3 from '../../images/tile3.png'
import next from '../../images/next.svg'
import previous from '../../images/previous.svg'

import { Container } from 'react-bootstrap'
import './RecipeList.scss'
export default function RecipeList() {
    return (
        <div className="recipe-wrapper">
            <h1 className="latest-recipes">Latest Recipes</h1>
            <div className="w-100 next-previous">
                <img className="next " src={next}></img>
                <img className="previous " src={previous}></img>
            </div>
            <Container>
                <Tiles image={tile1} content="Portobello Baked Eggs with avocado & bread" amount='€8'></Tiles>
                <Tiles image={tile3} content="Summery salmon, beetroot & spicy mix" amount='€15'></Tiles>
                <Tiles image={tile3} content="Portobello Baked Eggs with avocado & bread" amount='€8'></Tiles>
            </Container>
        </div>
    )
}
