import React from "react";
import styles from "../style";

const Login = (props) => {
    return (
        <div className={`${styles.flexCenter} flex-row min-h-screen p-6 animate-fadeIn`}>
            <div className="flex-1 flex flex-col items-start">
                <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">Your Gateway to Decentralized </h1>
                <span className ="text-gradient flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]" >Voting</span>
                <button
                    className="py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-gradient-to-r from-cyan-500 to-blue-500 rounded-[10px] outline-none"
                    onClick={props.connectWallet}
                >
                    Get Started
                </button>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <img

                    src="../robot-removebg-preview.png"
                    alt="Illustration"
                    className="max-w-full h-auto"
                />
            </div>
        </div>
    );
}

export default Login;
