🚨 **Heads Up! Important Update!** 🚨

⚠️ **`react-awesome-captcha` is now DEPRECATED** ⚠️  
This package is no longer actively maintained, and we strongly recommend migrating to the **new and improved** solution for better performance, security, and customization options:

👉 **[ReCAPTZ - Modern CAPTCHA for React](https://www.npmjs.com/package/recaptz)**

💥 Why switch?
- **Faster & more reliable**  
- **Enhanced security**  
- **Advanced customization**  
- **Typescript Support**

🔧 Don't wait! Update now to stay up-to-date with the latest features and improvements. Thank you for using React Awesome Captcha!


## Features

- **Generate CAPTCHA**: Automatically generates a random CAPTCHA string.
- **Easy Integration**: Seamless integration into any React project.
- **Customizable**: Customize styles and behavior according to your application's needs.

## Installation

You can install `react-awesome-captcha` using npm:

```sh
npm install react-awesome-captcha
```

## Usage

### Example: Using `AwesomeCaptcha` Component

Import the `AwesomeCaptcha` component and use it in your React application:

```jsx
import React, { useState } from "react";
import { AwesomeCaptcha } from "react-awesome-captcha";

const App = () => {
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);

  const handleCaptchaValidation = (isValid) => {
    setIsCaptchaValid(isValid);
  };

  return (
    <div>
      <h1>Simple CAPTCHA Component</h1>
      <AwesomeCaptcha onValidate={handleCaptchaValidation} />
      {isCaptchaValid ? <p>Captcha is valid!</p> : <p>Captcha is invalid!</p>}
    </div>
  );
};

export default App;
```

### Props

- **`onValidate` (function)**: A callback function that receives a boolean indicating whether the user input matches the CAPTCHA.

- **`className` (tailwind style)**: Add tailwind css classes for styling

- **`vertical` (boolean)**: Vertical Captcha Form

### Example: Using `captcha` and `generateCaptcha` Utilities

You can also use the `captcha` and `generateCaptcha` utilities directly:

```jsx
import React, { useState } from "react";
import { captcha, generateCaptcha } from "react-awesome-captcha";

const CaptchaComponent = () => {
  const [userInput, setUserInput] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setUserInput(value);
    setIsValid(value === captcha);
  };

  const handleGenerateCaptcha = () => {
    generateCaptcha();
    setUserInput("");
    setIsValid(false);
  };

  return (
    <div>
      <h1>Simple CAPTCHA Example</h1>
      <p>CAPTCHA: {captcha}</p>
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        placeholder="Enter CAPTCHA"
      />
      <button onClick={handleGenerateCaptcha}>Generate New CAPTCHA</button>
      {isValid ? <p>Valid CAPTCHA</p> : <p>Invalid CAPTCHA</p>}
    </div>
  );
};

export default CaptchaComponent;
```

### Utilities

#### `captcha`

The `captcha` utility is a string variable that holds the current CAPTCHA value generated by the `generateCaptcha` function.

#### `generateCaptcha()`

The `generateCaptcha` function is used to generate a new random CAPTCHA string and update the `captcha` variable. It does not take any arguments and is typically called when initializing the CAPTCHA or when the user requests a new CAPTCHA.

## Contributing

Contributions are welcome! If you have any improvements or new features to suggest, feel free to open an issue or submit a pull request. Please ensure that your contributions align with the code of conduct and are appropriately licensed.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.
