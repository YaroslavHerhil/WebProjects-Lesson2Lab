import { useContext, useState } from "react"
import { GameContext } from "../App"
import { BulbsLibraryContext } from "../App"

import '../styles.css';

import { motion } from 'framer-motion';



export default function UpgradesComponent(props) {
    const gameStatePair = useContext(GameContext);
    const bulbsLibraryPair = useContext(BulbsLibraryContext)

    // i really shoul put all of the upgrades into a seperate file but later ok?????? 
    const levelUp = () => {
        debugger
        if (gameStatePair.gameState.money < gameStatePair.gameState.upgradeCost) {
            return;
        }
        else {

            let bonus = 0;
            if ((gameStatePair.gameState.level + 1) % 10 == 0) {
                bonus = 2 * gameStatePair.gameState.level / 10;
            }

            gameStatePair.setGameState((prevGameState) => ({
                ...prevGameState,
                money: prevGameState.money - prevGameState.upgradeCost,
                level: prevGameState.level + 1,
                power: prevGameState.power + 1 + bonus,
                upgradeCost: Math.floor(prevGameState.upgradeCost * 2.5)
            }))
        }
    }

    const levelUpBulb = (bulbIndex) => {
        debugger;
        if (gameStatePair.gameState.money < bulbsLibraryPair.bulbsLibrary[bulbIndex].upgradeCost) {
            return;
        }
        else {

            let bonus = 0;
            if ((bulbsLibraryPair.bulbsLibrary[bulbIndex].level + 1) % 10 == 0) {
                bonus = 2 * Math.log10((bulbsLibraryPair.bulbsLibrary[bulbIndex].level));
            }

            let newBulbs = bulbsLibraryPair.bulbsLibrary.map((element, index) => {
                if (element.type === bulbIndex) {
                    element.level += 1;
                    element.payout = Math.floor(element.payout * (1.25 * (bonus == 0 ? 1 : bonus)));
                    element.upgradeCost = Math.floor(element.upgradeCost * 1.4);
                    if (bonus !== 0 && element.type !== 0) {
                        element.rarity = element.rarity * 1.1;
                    }
                }
                return element;
            });
            bulbsLibraryPair.setBulbsLibrary(newBulbs);
        }
    }




    const [availableUpgrades, setAvailableUpgrades] = useState();
    const [availableBulbUpgrades, setAvailableBulbUpgrades] = useState();


    const renderBulbUpgrades = (bulbsLibrary) => {

        return bulbsLibrary.map((element, index) => {
            if (element.level != 0) {
                return (
                    <div key={element.type} className="bulb-upgrade">
                        <img src={`bulb${element.type}/s1.png`} alt='this here is a sprite for the bulb' />
                        <div className="bulb-wrapper">
                            <span className="bulb-name" >{element.name}</span>
                            <span className="bulb-level">{element.level} Lvl.</span>
                            <span className="bulb-cost">Upgrade Cost: {element.upgradeCost} L</span>

                            <motion.div whileTap={{ y: 7, boxShadow: "0px 0px 0px" }} initial={{ y: 0, boxShadow: "0px 5px 0px" }}
                                onClick={() => { levelUpBulb(element.type) }} className="bulb-upgrade-btn">
                                <span>Upgrade</span>
                            </motion.div>
                        </div>
                    </div>
                );
            }
            else if(element.bulbsRequired <= gameStatePair.gameState.bulbsBroken){
                return (
                    <div key={element.type} className="bulb-upgrade">
                        <img src={`question.png`} alt='this here is a sprite for the bulb' />
                        <div className="bulb-wrapper">
                            <span className="bulb-name" >????</span>
                            <span className="bulb-level">0 Lvl.</span>
                            <span className="bulb-cost">Unlock Cost: {element.upgradeCost} L</span>

                            <motion.div whileTap={{ y: 7, boxShadow: "0px 0px 0px" }} initial={{ y: 0, boxShadow: "0px 5px 0px" }}
                                onClick={() => { levelUpBulb(element.type) }} className="bulb-upgrade-btn">
                                <span>Unlock</span>
                            </motion.div>
                        </div>
                    </div>
                );
            }

        })
    }

    return (
        <div className="upgrade-zone">
            <motion.div whileTap={{ y: 0, boxShadow: "0px 0px 0px" }} initial={{ y: -10, boxShadow: "0px 7px 0px" }}
                onClick={levelUp} className="main-upgrade">
                <span>Upgrade Power</span>
                <span className="main-upg-cost">{gameStatePair.gameState.upgradeCost} L</span>
            </motion.div>
            <div className="bulb-upgrades">
                {renderBulbUpgrades(bulbsLibraryPair.bulbsLibrary)}
            </div>
        </div>
    )


}