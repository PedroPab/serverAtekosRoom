
export const responseMiddleware = (req, res, next) => {
  if (res.data) {
    return res.status(res.rtaStatus || 200).json(res.data);
  }
  next();
};