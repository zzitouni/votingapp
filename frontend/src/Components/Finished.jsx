import React from "react";
import styles from "../style";

const Finished = (props) => {
    return (
        <div className={`${styles.flexCenter} flex-col min-h-screen text-center`}>
            <h1 className={`${styles.heading2} mb-4`}>Voting is Finished</h1>
        </div>
    );
}

export default Finished;
