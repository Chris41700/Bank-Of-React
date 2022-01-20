import React, { useState, useEffect } from 'react'

function Debits(props) {
    const { setAccountBalance, accountBalance, setDebits, debits } = props;
    const [ newDebits, setNewDebits ] = useState([]);
    const [ description, setDescription ] = useState("");
    const [ amount, setAmount ] = useState(0);
    const currentDate = new Date().toISOString();

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

    const onChangeDescription = (e) => {
        setDescription(e.target.value);
        console.log(e.target.value);
    }

    const onChangeAmount = (e) => {
        setAmount(parseFloat(e.target.value));
        console.log(e.target.value);
    }

    const addDebit = () => {
        const newAddition = [...newDebits];
        newAddition.push({amount, description, currentDate});
        setAccountBalance((amt) => amt+=amount) 
        setNewDebits(newAddition);
    }

    useEffect(() => {
        getDebits();
    }, []);

    return (
        <div>
            <h1>Debits</h1>

            {debits.map((element) => {
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

            {newDebits.map((element, index) => {
                return (
                    <div>
                        <ul>
                            <li>{ element.description }</li>
                            <li>${ element.amount }</li>
                            <li>{ element.currentDate }</li>
                        </ul>
                    </div>
                )
            })}

            <h3>Account Balance: ${accountBalance}</h3>
            <input onChange={onChangeDescription} type="text" placeholder="Description" />
            <input onChange={onChangeAmount} type="number" placeholder="Amount" />
            <button onClick={addDebit}>New Debit</button>
        </div>
    )
}

export default Debits