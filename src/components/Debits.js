import React, { useState, useEffect } from 'react'

function Debits(props) {
    const [debits, setDebits] = useState([]);

    const getDebits = async () => {
        try {
            const response = await fetch("https://moj-api.herokuapp.com/debits");
            console.log(response);

            const jsonData = await response.json();
            console.log(jsonData);

            setDebits(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getDebits();
    }, []);

    return (
        <div>
            <h1>Debits</h1>

            {debits.map((element) => {
                return(
                    <div key = {element.id}>
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

export default Debits