# email is temporary
Checks email address for being temporary.
Handy is you want to prevent these from signing up.

## Installation
`npm install email-is-temporary`

## Usage
```javascript
var email_is_temp = require('email-is-temporary')

email_is_temp('dsfa@10minutemail.com') // true
email_is_temp('mike@microsoft.com')    // false
email_is_temp('not an email')          // throws Error('Invalid email')
```
