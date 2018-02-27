# remembrall



### Project Description
I am making a web application to set reminders and will text you those reminders when you specify the date time etc. 


[Work Flow/Trello Board](https://trello.com/b/neaYi7is/remindly).

[Heroku](https://remembrall1.herokuapp.com/).

<img src="remembrall/REMY_wireframes.pdf">

### Approach Taken

I started by building the login because the whole project revolves around that aspect. The I added twilio to the back end and made sure I could send message. Following that I hooked the front end to the back so that the User/Client could make the messages.

### Obstacles

I had some obstacles with some node modules being out of date as well as using CRON.

### Unsolved Problems

Hooking up the front end datepicker to the backend Node-Cron to schedule new messages

### Technologies used

```
React | Redux | MongoDB | Mongoose | Node JS | Express | Passport | Twilio | Axios | Bcrypt | Moment | Cron
```




### Installation
To install and use Redux you need to NPM install Redux and add it to your import functions as follows.
[Redux](https://www.npmjs.com/package/redux)
import moment from 'redux'

To install and use moment you need to NPM install moment and add it to your import functions as follows. Moment allows you to Parse, validate, manipulate, and display dates and times in JavaScript.
[Moment](https://www.npmjs.com/package/moment)
import moment from 'moment'

To install and use react-datepicker you need to NPM install React Datepicker and add it to your import functions as follows.
[react-datepicker](https://www.npmjs.com/package/react-datepicker)
import DatePicker from 'react-datepicker'


To install and use cron you need to NPM install Cron and add it to your import functions as follows. Cron allows you to add scheudling to your messages or scripts.
[node-cron](https://www.npmjs.com/package/node-cron)
import cron from 'node-cron'


To install and use Express.js you need to have Node downloaded and NPM install express inside the project folder you want to use it in. once installed make sure to include it in your header like this.
[Express.js](https://expressjs.com/)
npm init - y
Let express = require('express');

To install and use mongoose you need to have Node downloaded and NPM install Axios inside the project folder you want to use it in. once installed make sure to include it in your header like this.
[Mongoose](https://www.npmjs.com/package/mongoose)
Let mongoose = require('mongoose');

To install and use Axios.js you need to have Node downloaded and NPM install Axios inside the project folder you want to use it in. once installed make sure to include it in your header like this.
[Axios.js](https://www.npmjs.com/package/axios)
Let axios = require('axios');

To install and use Passport.js you need to have Node downloaded and NPM install passport inside the project folder you want to use it in. once installed make sure to include it in your header like this.
[Passport.js](http://www.passportjs.org/)
Let passport = require('passport');


To install and use Twilio you need to have Node downloaded and NPM install passport inside the project folder you want to use it in. once installed make sure to include it in your header like this. You will also need an account on twilio.com
to get an api key and credentials to use.
[Twilio](https://www.twilio.com/)
[Twilio NPM](https://www.npmjs.com/package/twilio)
Let Twilio = require('twilio');






