# is-even-ai

Uses the power of artificial intelligence to return true if the given number is even.

This package leverages the `is-odd-ai` package for its operation, which in turn utilises OpenAI's API, so you will need to provide an API key.

## Installation

```bash
npm install is-even-ai
```

## Usage

You'll need to create a `.env` file in your project's root directory and specify your OpenAI API key.

### Setup the `.env` file

In your project folder, create a `.env` file with the following content:

```env
OPENAI_API_KEY=your-api-key
```

Replace `your-api-key` with your actual OpenAI API key.

### Example

```javascript
const isEvenAI = require('is-even-ai');

async function checkNumber() {
  const number = 4;
  const result = await isEvenAI(number);

  if (result) {
    console.log(`${number} is even!`);
  } else {
    console.log(`${number} is odd!`);
  }
}

checkNumber();
```

### API

`is-even-ai(i)`

- **`i`**: A number you want to check for evenness.
- **Returns**: A `Promise` that resolves to `true` if the number is even, or `false` if it's odd.

## License

This project is licensed under the Apache 2.0 License.
