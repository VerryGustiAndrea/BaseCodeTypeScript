import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, UploadedFiles, } from '@nestjs/common';
import { MerchantService } from '@/services';
import { CreateMenuDto } from './dto/create-merchant.dto';
import { UpdateMenuDto } from './dto/update-merchant.dto';
import { Merchant } from './merchant.model';
import { Response, ErrorResponse } from '../../library';
import { json } from 'sequelize';

import {
  FileFieldsInterceptor,
  FileInterceptor,
} from '@nestjs/platform-express';

@Controller('merchant')
export default class MerchantController {
  constructor(private readonly merchantService: MerchantService) { }



  @Get()
  async getMenu() {
    const response = await this.merchantService.findAll();
    return Response(response, 'Success', 200);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const response = await this.merchantService.findOne(+id);
    if (response !== false) {
      return Response(response, 'Success', 200);
    } else {
      return Response(null, 'Data Not Found!', 204);
    }
  }

  @Get('recomend')
  async getMenuRecomend() {
    const response = await this.merchantService.getMenuRecomend();
    if (response !== false) {
      return Response(response, 'Success', 200);
    } else {
      return Response(null, 'Data Not Found!', 204);
    }
  }

  @Get('category/:id')
  async findByCategory(@Param('id') id: string) {
    const response = await this.merchantService.findByCategory(+id);
    if (response !== false) {
      return Response(response, 'Success', 200);
    } else {
      return Response(null, 'Data Not Found!', 204);
    }
  }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body() createMenuDto: CreateMenuDto
  ) {
    if (!file) {
      return ErrorResponse('Error Image not found', 500);
    }
    const response = await this.merchantService.create(file, createMenuDto);
    if (response === false) {
      return ErrorResponse('Error Insert Data', 500);
    } else {
      return Response(response, 'Successfully Added', 201);

    }
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateMenuDto: UpdateMenuDto) {
    // if (!file) {
    // return ErrorResponse('Error Image not found', 500);
    // }
    const execute = await this.merchantService.update(id, updateMenuDto);
    if (execute == false) {
      return ErrorResponse('Error Update Data', 500);
    } else if (execute) {
      return Response(execute, 'Successfully Update Data', 200);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const execute = await this.merchantService.remove(+id);
    if (execute == false) {
      return ErrorResponse('Error Delete Data', 500);
    } else if (execute == true) {
      return Response(null, 'Successfully Deleted', 201);
    }
  }
}
