import React from "react";
import styles from "./project_card.module.scss"
function Card(props){
    const t = props.text;
    const img =props.img;
    return(
        <div className={styles.card}>
            <img src={img}></img>
            <p className={styles.cardName}>{t}</p>
        </div>
    )
}
export default Card