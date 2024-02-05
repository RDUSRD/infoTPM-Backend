import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  ParseIntPipe,
  UseInterceptors,
  UploadedFile,
  HttpException,
  HttpStatus,
  Res,
  NotFoundException,
} from '@nestjs/common';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';

import multer from 'multer';
import { diskStorage } from 'multer';
import { StopService } from './paradas.service';
import { createStopsDto, updateStopsDto } from './paradas.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import * as path from 'path';
import { imageFilter, renameImage } from 'src/helpers/image.helper';
import { RAILWAY_VOLUME_MOUNT_PATH } from 'src/config';
import { readFileSync } from 'fs';
import { Response } from 'express';

@ApiTags('Stops')
@Controller('stops')
export class StopsController {
  constructor(private stopsService: StopService) {}

  @Get()
  home() {
    return this.stopsService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.stopsService.findById(id);
  }

  @Get('/image/:imageName')
  async serveImage(
    @Res() res: Response,
    @Param('imageName') imageName: string,
  ) {
    // Verificamos que me manda un path adecuado y que ya existe el archivo
    if (imageName === undefined || imageName === null) {
      throw new HttpException('No image Name', HttpStatus.BAD_REQUEST);
    }
    const filePath = path.join(
      RAILWAY_VOLUME_MOUNT_PATH,
      '/images/stops',
      imageName,
    ); // Ruta del archivo relativa a la raíz del proyecto
    try {
      const file = readFileSync(filePath);
      if (!file) {
        throw new HttpException('Image not found', HttpStatus.NOT_FOUND);
      }
      return res.sendFile(filePath);
    } catch {
      throw new HttpException('Image not found', HttpStatus.NOT_FOUND);
    }
  }

  @Post('create')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileInterceptor('par_img', {
      storage: diskStorage({
        destination: path.join(RAILWAY_VOLUME_MOUNT_PATH, '/images/stops'),
        filename: renameImage,
      }),
      fileFilter: imageFilter,
    }),
  )
  async create(
    @UploadedFile() par_img: multer.Multer.File,
    @Body() payload: createStopsDto,
  ) {
    if (par_img) {
      // Editamos use_img.path para que solo envie el nombre eliminando los primeros 11 digitos:
      const path = `${par_img?.filename}`;
      payload.par_img = path;
    }
    return this.stopsService.create(payload);
  }

  @Put(':id')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileInterceptor('use_img', {
      storage: diskStorage({
        destination: path.join(RAILWAY_VOLUME_MOUNT_PATH, '/images/stops'),
        filename: renameImage,
      }),
      fileFilter: imageFilter,
    }),
  )
  async update(
    @Param('id', ParseIntPipe) id: number,
    @UploadedFile() par_img: multer.Multer.File,
    @Body() payload: updateStopsDto,
  ) {
    const stop = await this.stopsService.findById(id);
    if (!stop) {
      throw new NotFoundException(`Stop #${id} not found`);
    }

    if (par_img) {
      const path1 = `${par_img?.filename}`;
      if (stop.par_img) {
        const filePath = path.join(
          RAILWAY_VOLUME_MOUNT_PATH,
          '/images/stops',
          stop.par_img,
        );
        await this.stopsService.deleteImage(filePath);
      }
      payload.par_img = path1;
    } else if (payload.par_img && stop.par_img !== payload.par_img) {
      if (stop.par_img) {
        const filePath = path.join(
          RAILWAY_VOLUME_MOUNT_PATH,
          '/images/stops',
          stop.par_img,
        );
        await this.stopsService.deleteImage(filePath);
      }
    }

    return this.stopsService.update(id, payload);
  }
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.stopsService.delete(id);
  }
}
