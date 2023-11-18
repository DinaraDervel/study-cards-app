import { useState, useEffect } from "react";
import React from 'react';
import defaultData from "./data/data.json";

const DataContext = React.createContext();

function DataContextProvider(props) {
    let [data, setData] = useState([defaultData]);
    useEffect(() => {
        fetch('/api/words')
            .then((response) => response.json())
            .then((response) => setData(data = response))
    }, []);
    function updateData(newData) {
        setData(newData);
    }

    return (
        <DataContext.Provider value={{ data, updateData }}>
            {props.children}
        </DataContext.Provider>

    );
}

export { DataContextProvider, DataContext };