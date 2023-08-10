import React, { useState, useEffect } from 'react';
import Style from "../../../assets/css/style.module.css";

const Alert = ({ successMessages, setSuccessMessages, background }) => {
    const [isAlertVisible, setIsAlertVisible] = useState(true);

    useEffect(() => {
        if (successMessages.length > 0) {
            setIsAlertVisible(true);
            const timer = setTimeout(() => {
                setSuccessMessages([]); // Clear all success messages after hiding the alert
            }, 5000); // Hide the alert after 5000 milliseconds (5 seconds)
            return () => clearTimeout(timer);
        }
    }, [successMessages, setSuccessMessages]);

    const handleDocumentClick = () => {
        setIsAlertVisible(false);
        setSuccessMessages([]); // Clear all success messages when the user dismisses the alert
    };

    const alertStyle = {
        // background: background,
        position: 'fixed',
        bottom: isAlertVisible ? '30px' : '0', // Apply a 30px margin from the bottom when the alert is visible
        right: '20px',
        transition: 'bottom 0.3s ease-in-out', // Transition the bottom property for smooth animation
        // padding: '15px',
        // borderRadius: '4px',
        color: 'white',
        zIndex: "1111",
        display: "flex",
        flexDirection: "column",
        rowGap: "5px",

    };

    return (
        <>
            {isAlertVisible && successMessages.length > 0 && (
                <div
                    className={Style.alert_container}
                    style={alertStyle}
                    onClick={handleDocumentClick} // Add onClick to allow dismissing the alert by clicking on it
                >
                    {successMessages.map((message, index) => (
                        <div key={index} style={{
                            background: background, padding: "15px", borderRadius: '4px',
                        }} >{message}</div>
                    ))}
                </div>
            )}
        </>
    );
};

export default Alert;
