import { useState } from "react";

function App(){
    return (
        <>
            <div style={{background: "#dfe6e9", height: "100vh" }}>
                <ToggleMessage/>
                <ToggleMessage/>
                <ToggleMessage/>
            </div>
        </>
    )
}

function ToggleMessage(){
    const [notificationCount,setNotificationCount]=useState(0);

    function handleIncrease(){
        setNotificationCount(notificationCount=>notificationCount+1);
    }

    return (
        <>
            <div>
                <button onClick={handleIncrease} style={{margin: 20}}>increase count</button>
                {notificationCount}
            </div>
        </>
    )
}

export default App;