// CaptchaComponent.js
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import useCaptcha from './useCaptcha';

const Captcha = ({ onValidate }) => {
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
            <div className='w-full flex gap-5 items-start'>
                <div className='flex flex-col items-start gap-2 mt-5'>
                    <h1 className='text-sm text-[#18191C]'>Recaptcha</h1>
                    <input
                        disabled
                        type="text"
                        className='px-4 py-2 rounded-lg bg-transparent border border-[#E4E5E8] focus:outline-none italic tracking-widest'
                        name='captcha'
                        value={captcha}
                    />
                    <h1 onClick={generateCaptcha} className='text-sm text-primary cursor-pointer'>Reset Recaptcha</h1>
                </div>
                <div className='flex flex-col items-start gap-2 mt-5'>
                    <h1 className='text-sm text-[#18191C]'>Submit Recaptcha</h1>
                    <input
                        type="text"
                        className={`px-4 py-2 rounded-lg bg-transparent border ${isValid ? 'border-green-500' : 'border-red-500'} focus:outline-none`}
                        name='recaptcha'
                        required
                        placeholder='Enter Captcha'
                        value={userInput}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    );
};

Captcha.propTypes = {
    onValidate: PropTypes.func.isRequired
};

export default Captcha;