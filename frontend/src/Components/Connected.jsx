import React from "react";
import styles from "../style";

const Connected = (props) => {
    return (
        <div className={`${styles.flexCenter} flex-col min-h-screen text-center p-6`}>
            <h1 className={`${styles.heading2} mb-4 text-3xl lg:text-5xl`}>Unlocking the Gateway</h1>
            <h1 className={`${styles.heading2} mb-4`}>Your Metamask Connection</h1>
            <p className={`${styles.paragraph} mb-2`}>Metamask Account: {props.account}</p>


            {props.showButton ? (
                <p className={`${styles.paragraph} mb-2`}>You have already voted</p>
            ) : (
                <div>
                    <input
                        type="number"
                        placeholder="Enter Candidate Index"
                        value={props.number}
                        onChange={props.handleNumberChange}
                        className="mb-2 p-2 border rounded-md w-full"
                    />
                    <button
                        className="py-2 px-4 font-poppins font-medium text-[18px] text-primary bg-gradient-to-r from-cyan-500 to-blue-500 rounded-[10px] outline-none mt-2"
                        onClick={props.voteFunction}
                    >
                        Vote
                    </button>
                </div>
            )}
            <table className="w-full mt-4 border-collapse">
                <thead>
                <tr>
                    <th className="border p-2 text-white bg-primary">Id</th>
                    <th className="border p-2 text-white bg-primary">Candidate Image</th>
                    <th className="border p-2 text-white bg-primary">Candidate Name</th>
                    <th className="border p-2 text-white bg-primary">Candidate Votes</th>
                </tr>
                </thead>
                <tbody>
                {props.candidates.map((candidate, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}>
                        <td className="border p-2">{candidate.index}</td>
                        <td className="border p-2">
                            <img
                                className="max-w-[100px] m-4"
                                alt={`Uploaded #${index + 1}`}
                                src={candidate.image}
                            />
                        </td>
                        <td className="border p-2">{candidate.name}</td>
                        <td className="border p-2">{candidate.voteCount}</td>
                    </tr>
                ))}
                </tbody>

            </table>

        </div>
    );
}

export default Connected;
