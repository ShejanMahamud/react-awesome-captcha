// useCaptcha.js
import { useState } from 'react';

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const useCaptcha = () => {
    const [captcha, setCaptcha] = useState('');

    const generateCaptcha = () => {
        let result = '';
        const charactersLength = characters.length;
        
        for (let i = 0; i < 6; i++) {
          const randomIndex = Math.floor(Math.random() * charactersLength);
          result += characters.charAt(randomIndex);
        }
        
        setCaptcha(result);
    };

    return { captcha, generateCaptcha };
};

export default useCaptcha;
