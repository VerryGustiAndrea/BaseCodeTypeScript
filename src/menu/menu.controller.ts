import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { Menu } from './menu.model';
import { Response, ErrorResponse } from '../library';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) { }

  @Post()
  create(@Body() createMenuDto: CreateMenuDto) {
    return this.menuService.create(createMenuDto);
  }

  @Get()
  getMenu() {
    return this.menuService.findAll();
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
