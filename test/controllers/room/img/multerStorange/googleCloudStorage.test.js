import upload from '../../../../../src/controllers/img/multerStorage/googleCloudStorage.js';
import bucketGoogleCloudStorage from 'multer-cloud-storage';
const MulterGoogleCloudStorage = bucketGoogleCloudStorage.default;

jest.mock('multer-cloud-storage');

describe('upload', () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    MulterGoogleCloudStorage.mockClear();
  });

  it('MulterGoogleCloudStorage class constructor was called', () => {
    expect(MulterGoogleCloudStorage).toHaveBeenCalledTimes(1);
  });

  it('MulterGoogleCloudStorage was instantiated with correct arguments', () => {
    expect(MulterGoogleCloudStorage).toHaveBeenCalledWith({
      projectId: 'atekos-369512',
      keyFilename: '.servicesKeyBucket.json',
      bucket: 'server-atekos-bucket',
      filename: expect.any(Function),
      destination: 'img'
    });
  });

  it('upload is instance of MulterGoogleCloudStorage', () => {
    expect(upload).toBeInstanceOf(MulterGoogleCloudStorage);
  });
});