// Generated by CoffeeScript 1.9.3
(function() {
  module.exports = function(req, res, next) {
    if (res.locals.user) {
      return (__F('book')).getByUserId(res.locals.user.id, function(error, books) {
        res.locals.mybooks = books;
        return next();
      });
    } else {
      return next();
    }
  };

}).call(this);