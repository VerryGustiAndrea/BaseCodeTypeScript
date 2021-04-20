import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, UploadedFiles, } from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { Menu } from './menu.model';
import { Response, ErrorResponse } from '../library';
import { json } from 'sequelize';

import {
  FileFieldsInterceptor,
  FileInterceptor,
} from '@nestjs/platform-express';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) { }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body() createMenuDto: CreateMenuDto
  ) {
    const response = await this.menuService.create(file, createMenuDto);
    if (response === false) {
      return ErrorResponse('Error Insert Data', 500);

    } else {
      return Response(response, 'Successfully Added', 201);

    }
  }

  @Get()
  async getMenu() {
    const response = await this.menuService.findAll();
    return Response(response, 'Success', 200);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const response = await this.menuService.findOne(+id);
    if (response !== false) {
      return Response(response, 'Success', 200);
    } else {
      return Response(null, 'Data Not Found!', 204);
    }

  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMenuDto: UpdateMenuDto) {
    return this.menuService.update(+id, updateMenuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menuService.remove(+id);
  }
}
