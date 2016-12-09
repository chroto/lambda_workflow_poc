exports.handler = (event, context, callback) => {
  var time = require('time');
  var currentTime = new time.Date();
  currentTime.setTimezone(process.env.TIME_ZONE);

  callback(null, {
    statusCode: '200',
    body: '<h1>Welcome</h1><p>The time is ' + process.env.TIME_ZONE + ' ' + currentTime.toString() + '</p>',
    headers: {
      'Content-Type': 'text/html; charset=utf-8'
    }
  });
};
