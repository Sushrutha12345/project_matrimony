import React from 'react';
import './Preferences.css'; 

const Preferences = () => {
    return (
        <div className="preferences">
            <h1>Partner Preferences</h1>
            <p>Matches recommended by us are based on Acceptable matches criteria and at times might go slightly beyond your preferences.</p>
            <p>Turn on "Compulsory" to get matches exactly as per your preferences.</p>
            <div className="basic-preferences">
                <h2>Basic Preferences</h2>
                
                <div className="preference-item">
                    <span>Groom's Age</span>
                    <span>21 - 28 years</span>
                </div>
                <div className="preference-item">
                    <span>Height</span>
                    <span>5 Ft - 6 Ft / 152 Cms- 183 Cms</span>
                </div>
                
            </div>
        </div>
    );
};

export default Preferences;
