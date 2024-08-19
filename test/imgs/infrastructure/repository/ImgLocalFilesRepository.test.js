const fs = require('fs');

import ImgLocalFilesRepository from '../../../../src/imgs/infrastructure/repository/ImgLocalFilesRepository.js';


describe('ImgLocalFilesRepository', () => {
  const imageTestDir = 'img-test';
  const urlPublicRoot = './../../../../public/img-test'


  // usamos publish para publicar una imagen
  it('publish', async () => {
    const repository = new ImgLocalFilesRepository({ directoryFolder: imageTestDir });

    const buffer = Buffer.from('test');

    const fileName = 'test.jpg';
    const result = await repository.publish({ buffer, fileName });

    expect(result).toEqual({
      urlPublic: `/${imageTestDir}/${fileName}`,
      urlPrivate: `/${imageTestDir}/${fileName}`
    });
  });
});
