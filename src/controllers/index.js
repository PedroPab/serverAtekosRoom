export const getHome = (req, res) => {
  const body = req.body;
  console.log(body)
  res.json(body)
};

export const getAbout = (req, res) => {
  res.send('Welcome to the About Page!');
};