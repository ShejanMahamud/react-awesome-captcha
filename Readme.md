# react-simple-captcha

A simple and customizable React CAPTCHA component to validate user inputs.

## Features

- Generates a random CAPTCHA for user validation.
- Indicates input validity with green (valid) and red (invalid) border colors.
- Easy to integrate and use in any React project.

## Installation

```sh
npm install react-simple-captcha
```

## Usage

First, import the `Captcha` component and the `useCaptcha` hook in your React component.

### Example

```javascript
import React, { useState } from "react";
import { Captcha } from "react-simple-captcha";

const App = () => {
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);

  const handleCaptchaValidation = (isValid) => {
    setIsCaptchaValid(isValid);
  };

  return (
    <div>
      <h1>Simple CAPTCHA Component</h1>
      <Captcha onValidate={handleCaptchaValidation} />
      {isCaptchaValid ? <p>Captcha is valid!</p> : <p>Captcha is invalid!</p>}
    </div>
  );
};

export default App;
```

### Captcha Component Props

- `onValidate` (function): A callback function that receives a boolean indicating whether the user input matches the CAPTCHA.

### useCaptcha Hook

The `useCaptcha` hook provides two properties:

- `captcha`: The current CAPTCHA string.
- `generateCaptcha`: A function to generate a new CAPTCHA.

### Example with useCaptcha

```javascript
import React from "react";
import { useCaptcha } from "react-simple-captcha";

const CaptchaComponent = () => {
  const { captcha, generateCaptcha } = useCaptcha();

  return (
    <div>
      <p>CAPTCHA: {captcha}</p>
      <button onClick={generateCaptcha}>Generate New CAPTCHA</button>
    </div>
  );
};

export default CaptchaComponent;
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

MIT

```

### Explanation

- **Installation**: Instructions for installing the package via npm.
- **Usage**: Example of how to use the `Captcha` component and the `useCaptcha` hook in a React application.
- **Props**: Details about the `onValidate` prop.
- **useCaptcha Hook**: Explanation and example usage of the `useCaptcha` hook.
- **Contributing**: Encouragement for contributions.
- **License**: The license under which the package is distributed.

This README provides clear instructions and examples, making it easy for users to understand how to use your package.
```
