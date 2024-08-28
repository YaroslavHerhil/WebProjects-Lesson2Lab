import { CurrentBulbContext } from "../App"
import { useState, useContext } from "react"

import '../styles.css';

export default function BulbComponent(props) {
    const currentBulbPair = useContext(CurrentBulbContext);
    const [bulbStyle, setBulbStyle] = useState({});

    const handleBulbClick = () => {
        // Generate random rotation and skew values
        const randomRotation = Math.random() * 20 - 10; 
        const randomSkewX = Math.random() * 10 - 5; 
        const randomSkewY = Math.random() * 10 - 5; 
        const randomMoveX = Math.random() * 10 - 5; 
        const randomMoveY = Math.random() * 10 - 5; 

        // Apply the transformation
        setBulbStyle({
            transform: `rotate(${randomRotation}deg) skew(${randomSkewX}deg, ${randomSkewY}deg) translate(${-50 + randomMoveX}%, ${-50 + randomMoveY}%)`,
            transition: "transform 0.1s ease-out",
        });

        // Reset the transformation after the animation
        setTimeout(() => {
            setBulbStyle({
                transform: "rotate(0deg) skew(0deg, 0deg) translate(-50%, -50%)",
                transition: "transform 0.1s ease-out",
            });
        }, 200); // The duration should match the CSS transition duration
        props.bulbClick();
    }


    return (
        <div className="bulb-zone" onClick={handleBulbClick}>
            <img style={bulbStyle} className="bulb-img" src={`bulb${currentBulbPair.currentBulb.type}${currentBulbPair.currentBulb.sprite}`}></img>
        </div>
    )
}