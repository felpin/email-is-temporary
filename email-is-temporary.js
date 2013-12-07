var email_is_valid = require('email-validator').validate,
    temp_mail_regex_list = require('./temp-mail-list');

module.exports = function(email) {
  if (!email_is_valid(email))
    throw new Error('Invalid email');
  var cache = temp_mail_regex_list,
      i = cache.length;
  while(--i >= 0) {
    if ( !!email.match(cache[i]) )
      return true;
  }
  return false;
};
