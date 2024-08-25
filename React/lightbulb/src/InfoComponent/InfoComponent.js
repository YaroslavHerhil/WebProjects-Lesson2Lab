import { useContext } from "react"
import { GameContext } from "../App"

export default function InfoComponent(props){
    const gameState = useContext(GameContext)
    return(
        <div>
            <p>money: {gameState.money}</p>
            <p>bulbs broken: {gameState.bulbsBroken}</p>
        </div>
    )
}