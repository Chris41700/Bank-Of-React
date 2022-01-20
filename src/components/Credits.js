import React, { useState, useEffect } from "react";

function Credits(props) {
    const { setAccountBalance, accountBalance, setCredits, credits } = props;
    const [ newCredits, setNewCredits ] = useState([]);
    const [ description, setDescription ] = useState("");
    const [ amount, setAmount ] = useState(0);

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

    const onChangeDescription = (e) => {
        setDescription(e.target.value);
        console.log(e.target.value);
    }

    const onChangeAmount = (e) => {
        setAmount(parseInt(e.target.value));
        console.log(e.target.value);
    }

    const addDebit = () => {
        const newAddition = [...newCredits];
        newAddition.push({amount, description});
        setAccountBalance((amt) => amt-=amount) 
        setNewCredits(newAddition);
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

            {newCredits.map((element, index) => {
                return (
                    <div>
                        <ul>
                            <li>{ element.description }</li>
                            <li>${ element.amount }</li>
                            <li>{ element.date }</li>
                        </ul>
                    </div>
                )
            })}

            <h3>Account Balance: ${accountBalance}</h3>
            <input onChange={onChangeDescription} type="text" placeholder="Description" />
            <input onChange={onChangeAmount} type="number" placeholder="Amount" />
            <button onClick={addDebit}>New Creditnp</button>
        </div>
    )
}

export default Credits;