import React from "react";
import Header from "../../components/Header/Header";
import Counter from "../../components/Counter/Counter";
import styles from "./counter_project.module.scss"

function CounterProject() {
    return(<>
        <Header />
        <div className={styles.container}>
            <Counter />
        </div>
        </>
    )
}
export default CounterProject