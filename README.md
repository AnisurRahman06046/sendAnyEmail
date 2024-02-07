# 

```markdown
# easy-mailer

Easy Mailer is a simple and convenient Node.js library for sending emails using Nodemailer. It provides an easy-to-use interface to send emails with minimal configuration.

## Installation

Install the package using npm:

```bash
npm install easy-mailer

```

## Usage

### Setting up your environment variables

Before using Easy Mailer, make sure to set the following environment variables:

- `NODEMAIL_SERVICE`: The email service provider (e.g., "gmail", "yahoo").
- `NODEMAIL_EMAIL`: Your email address.
- `NODEMAIL_PASSWORD`: Your email account password.

### Example

```jsx
const { sendAnyEmail } = require('easy-mailer');

const email = 'recipient@example.com';
const subject = 'Test Email';
const htmlContent = '<p>Hello, this is a test email!</p>';

// Sending an email
sendAnyEmail(email, subject, htmlContent);

```

### API Reference

### `sendAnyEmail(email, subject, htmlContent)`

- `email` (string): The recipient's email address.
- `subject` (string): The subject of the email.
- `htmlContent` (string): The HTML content of the email.

Sends an email using the configured email service.

### Contributing

Contributions are welcome! Please follow the [Contributing Guidelines](https://www.notion.so/CONTRIBUTING.md) for details.

### Issues

If you encounter any issues or have questions, please [open an issue](https://github.com/yourusername/easy-mailer/issues).

### License

This project is licensed under the MIT License - see the [LICENSE](https://www.notion.so/LICENSE) file for details.

### Acknowledgments

- Easy Mailer is built on top of the Nodemailer library.
- Special thanks to the open-source community for their contributions.

## Author

Md Anisur Rahman, Nahid Hassan Bulbul

Feel free to customize this template further based on your project's specific features and requirements.