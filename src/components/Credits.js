import React, { useState, useEffect } from "react";

function Credits(props) {
    const { accountBalance, setCredits, credits } = props;

    const getCredits = async () => {
        try {
            const response = await fetch("https://moj-api.herokuapp.com/credits");
            console.log(response);

            const jsonData = await response.json();
            console.log(jsonData);

            setCredits(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getCredits();
    }, []);

    return (
        <div>
            <h1>Credits</h1>

            {credits.map((element) => {
                    return (
                        <div key = { element.id }>
                            <ul>
                                <li>{ element.description }</li>
                                <li>${ element.amount }</li>
                                <li>{ element.date }</li>
                            </ul>
                        </div>
                    )
                })}
        </div>
    )
}

export default Credits;