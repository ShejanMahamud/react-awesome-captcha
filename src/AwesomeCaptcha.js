// CaptchaComponent.js
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import './index.css';
import useCaptcha from './useCaptcha';

const AwesomeCaptcha = ({ onValidate, className, vertical }) => {
    const { captcha, generateCaptcha } = useCaptcha();
    const [userInput, setUserInput] = useState('');
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        generateCaptcha();
    }, []);

    const handleChange = (e) => {
        const value = e.target.value;
        setUserInput(value);
        if (value === captcha) {
            setIsValid(true);
            onValidate(true);
        } else {
            setIsValid(false);
            onValidate(false);
        }
    };

    return (
        <div>
            <div className={`w-full flex items-start ${className} ${vertical ? 'flex-col gap-2' : 'flex-row gap-5'}`}>
                <div className='flex flex-col items-start gap-2 mt-5 no-select'>
                    <h1 className='text-sm text-[#18191C]'>Captcha</h1>
                    <input
                        disabled
                        type="text"
                        className='px-4 py-2 rounded-lg bg-transparent border border-[#E4E5E8] focus:outline-none italic tracking-widest off'
                        name='captcha'
                        value={captcha}
                    />
                    <h1 onClick={generateCaptcha} className='text-sm text-primary cursor-pointer select-none'>Reset Captcha</h1>
                </div>

                <div className='flex flex-col items-start gap-2 mt-5'>
                    <h1 className='text-sm text-[#18191C]'>Submit Captcha</h1>
                    <input
                        type="text"
                        className={`px-4 py-2 rounded-lg bg-transparent border focus:outline-none ${userInput && isValid ? 'border-green-500' : 'border-ini'}`}
                        name='captcha'
                        value={userInput}
                        onChange={handleChange}
                        placeholder='Enter Captcha'
                    />
                </div>
            </div>
        </div>
    );
};

AwesomeCaptcha.propTypes = {
    onValidate: PropTypes.func.isRequired,
    className: PropTypes.string,
    vertical: PropTypes.bool,
};

export default AwesomeCaptcha;
