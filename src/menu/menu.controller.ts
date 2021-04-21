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

  @Get('recomend')
  async getMenuRecomend() {
    const response = await this.menuService.getMenuRecomend();
    if (response !== false) {
      return Response(response, 'Success', 200);
    } else {
      return Response(null, 'Data Not Found!', 204);
    }
  }

  @Get('category/:id')
  async findByCategory(@Param('id') id: string) {
    const response = await this.menuService.findByCategory(+id);
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
    const response = await this.menuService.create(file, createMenuDto);
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
    return await this.menuService.update(id, updateMenuDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const execute = await this.menuService.remove(+id);
    if (execute == false) {
      return ErrorResponse('Error Delete Data', 500);
    } else if (execute == true) {
      return Response(null, 'Successfully Deleted', 201);
    }
  }
}
