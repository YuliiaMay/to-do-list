import React from "react";

const Statistics = ({ total, complited }) => (
    <>
        <p>Total tasks: {total}</p>
        <p>Have done: {complited}</p>
    </>
)

export default Statistics;