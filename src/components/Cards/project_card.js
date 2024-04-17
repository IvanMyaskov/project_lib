import React from "react";
import styles from "./project_card.module.scss"
import counter from "./counter.png"
function Card(){
    return(
        <div className={styles.card}>
            <img src={counter}></img>
            <p className={styles.cardName}>Counter</p>
        </div>
    )
}
export default Card