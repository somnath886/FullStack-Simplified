import React, {useState, useEffect, createContext} from 'react'

const IndividualContext = createContext()

const IndividualProvider = (props) => {
    const [res, setRes] = useState([])

    function fetchData() {
        fetch("http://localhost:5000/")
        .then(result => result.json())
        .then(data => {
            setRes(data)})
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <IndividualContext.Provider
            value={{res}}
        >
            {props.children}
        </IndividualContext.Provider>
    )
}

export {IndividualContext, IndividualProvider}