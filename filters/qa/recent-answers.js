// Generated by CoffeeScript 1.9.3
(function() {
  module.exports = function(req, res, next) {
    return (__F('answer')).getAllWithQuestion(1, 10, null, "id desc", function(error, answers) {
      res.locals.recent_answers = answers;
      return next();
    });
  };

}).call(this);
