import { useContext, useState } from "react"
import { GameContext } from "../App"

import { motion } from 'framer-motion';

import '../styles.css';


export default function SaveComponent(props) {
    const [erasePrompt, setErasePrompt] = useState("Erase progress");


    const askToErase = () => {
        if(erasePrompt == "Are you sure?"){
            setErasePrompt("Erase Progress")
            props.eraseProgress();
        }
        else{
            setErasePrompt("Are you sure?");
        }
    }

    return (
        <div className='save-container'>
            <motion.div whileTap={{ y: 7, boxShadow: "0px 0px 0px" }} initial={{ y: 0, boxShadow: "0px 5px 0px" }}
                onClick={props.saveProgress} className="bulb-upgrade-btn">
                <span>Save progress</span>
            </motion.div>
            <motion.div whileTap={{ y: 7, boxShadow: "0px 0px 0px" }} initial={{ y: 0, boxShadow: "0px 5px 0px" }}
                onClick={askToErase} className="bulb-upgrade-btn">
                <span>{erasePrompt}</span>
            </motion.div>
        </div>
    )
}