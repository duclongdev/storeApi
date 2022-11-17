export const ErrorHandle = (Error, req, res, next) => {
  res.status(Error.status || 500)
  res.send({ "error": true, "message": Error.message || 'Internal server Error' })
}
