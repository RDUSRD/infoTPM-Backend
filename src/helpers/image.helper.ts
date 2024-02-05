import { HttpException, HttpStatus } from '@nestjs/common';

export const renameImage = (req, file, callback) => {
  const ext = file.mimetype.split('/')[1];
  const name = file.originalname.split('.')[0];
  const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
  callback(null, name + '-' + uniqueSuffix + '.' + ext);
};

export const imageFilter = (req, file, callback) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif|pdf)$/)) {
    return callback(
      new HttpException(
        'Only image files are allowed!',
        HttpStatus.BAD_REQUEST,
      ),
      false,
    );
  }
  callback(null, true);
};
