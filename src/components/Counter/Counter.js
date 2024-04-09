import React from "react";
import styles from "./Counter.module.scss"
import { useState } from "react";

function Counter(){
    const [count, setCount]= useState(0);

    function plus(){
        setCount(count+1)
    }
    
    function minus(){
        setCount(count-1)
    }
    function reset(){
        setCount(0)
    }
    return(
        <div className={styles.container}>
            <div className={styles.result}>{count}</div>
            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={minus}>-</button>
                <button className={styles.button} onClick={reset}>reset</button>
                <button className={styles.button} onClick={plus}>+</button>
            </div>
        </div>
    )
}
export default Counter