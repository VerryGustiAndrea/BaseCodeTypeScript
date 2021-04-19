import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { Menu } from './menu.model';


@Injectable()
export class MenuService {
  constructor(
    @InjectModel(Menu)
    private menuModel: typeof Menu,
  ) { }

  create(createMenuDto: CreateMenuDto) {
    return 'This action adds a new menu';
  }


  async findAll(): Promise<Menu[]> {
    return this.menuModel.findAll();
  }

  async findOne(id: number): Promise<Menu | false> {
    const response = await this.menuModel.findOne({ where: { id: id } });
    if (response) {
      return response
    } else {
      return false
    }
  }

  update(id: number, updateMenuDto: UpdateMenuDto) {
    return `This action updates a #${id} menu`;
  }

  remove(id: number) {
    return `This action removes a #${id} menu`;
  }
}
