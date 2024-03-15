import React, { useEffect, useState } from 'react'

function Time() {


    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(interval);
    }, []); // Se ejecutará solo una vez al montar el componente

    return (<h1>{time}</h1>)
}

export default Time