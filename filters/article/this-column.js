// Generated by CoffeeScript 1.9.3
(function() {
  var func_article;

  func_article = __F('article/article');

  module.exports = function(req, res, next) {
    return func_article.getAll(1, 6, {
      column_id: res.locals.article.column_id
    }, 'id desc', function(error, column_articles) {
      res.locals.column_articles = column_articles;
      return next();
    });
  };

}).call(this);