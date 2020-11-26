import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey = process.env.REACT_APP_ALAN_KEY;
const newsApiKey = process.env.REACT_APP_NEWS_API_KEY;

const App = () => {

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command }) => {
                if(command === 'testCommand') {
                    alert('this code was exucuted');
                }
            }
        })
    });

    return (
        <div>
            <h1>ALAN AI News Application</h1>
        </div>
    );
}

export default App;