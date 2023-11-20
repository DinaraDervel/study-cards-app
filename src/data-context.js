import { useState, useEffect } from "react";
import React from 'react';

const DataContext = React.createContext();

function DataContextProvider(props) {
    let [data, setData] = useState([]);
    let [isLoading, setLoading] = useState(false);
    let [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch('/api/words')
            .then((response) => {
                if (response.ok) return response.json();
                else throw new Error(response.status);
            })
            .then((response) => {
                setData(response);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            })
    }, []);


    function updateData(newData, editedWord) {
        setData(newData);
        fetch('/api/words/' + editedWord.id + '/update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editedWord)
        })
    }

    return (
        <DataContext.Provider value={{ data, isLoading, error, updateData }}>
            {props.children}
        </DataContext.Provider>

    );
}

export { DataContextProvider, DataContext };