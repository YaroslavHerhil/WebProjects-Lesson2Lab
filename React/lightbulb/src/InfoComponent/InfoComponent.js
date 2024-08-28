import { useContext } from "react"
import { GameContext } from "../App"

import '../styles.css';

export default function InfoComponent(props){
    const gameStatePair = useContext(GameContext)
    return(
        <div className="info-ui">
            <span>Lux: </span><span>{gameStatePair.gameState.money} L</span>
            <span>Power: </span><span>{gameStatePair.gameState.power}</span>
            <span>Bulbs Broken: </span><span>{gameStatePair.gameState.bulbsBroken}</span>
        </div>
    )
}