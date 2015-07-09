// Generated by CoffeeScript 1.9.3
(function() {
  var func_comment;

  func_comment = __F('job/comment');

  module.exports = function(req, res, next) {
    var condition, count, page;
    condition = {
      job_id: req.params.id
    };
    page = req.query.page || 1;
    count = req.query.count || 30;
    return func_comment.count(condition, function(error, _count) {
      if (error) {
        return next(error);
      } else {
        if (!req.query.page && _count > 30) {
          page = Math.ceil(_count / 30);
        }
        res.locals.total = _count;
        res.locals.totalPage = Math.ceil(_count / count);
        res.locals.page = page || 1;
        return func_comment.getAll(page, count, condition, "id", function(error, comments) {
          if (error) {
            return next(error);
          } else {
            res.locals.comments = comments;
            return next();
          }
        });
      }
    });
  };

}).call(this);