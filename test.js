var email_is_temp = require('./email-is-temporary'),
    assert = require('assert');

var temp_mails = [ 'randomdude@dispostable.com'
                   ,'viki.lase1123@dispostable.com'
                   ,'btrfs30z@sharklasers.com'
                   ,'random.mail@mailinator.com' ];

var ok_mails    = [ 'ivan@gmail.com'
                   ,'sergey@google.com'
                   ,'soichiro.honda@honda.jp' ];

temp_mails.forEach(function(temp_mail) {
  assert.equal( email_is_temp(temp_mail), true );
});

ok_mails.forEach(function(ok_mail) {
  assert.equal( email_is_temp(ok_mail), false );
});

console.log('tests ok');
