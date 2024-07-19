function filename(req, file, cb) {
  const time = new Date().toISOString().replace(/:/g, '-');
  const fileName = `${time}-${file.originalname}`;
  cb(null, fileName);
}

export default filename;