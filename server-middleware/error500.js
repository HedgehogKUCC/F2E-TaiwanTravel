module.exports = function (req, res, next) {
  if (req.method.toLowerCase() === 'get' && req.originalUrl === '/api/error500') {
    res.statusCode = 500
    res.end(JSON.stringify({ message: 'Internal Server Error' }))
  } else {
    next()
  }
}
