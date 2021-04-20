import { Injectable, Param } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { CreateMenuDto, CreateMenuImage } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { Menu } from './menu.model';


@Injectable()
export class MenuService {
  constructor(
    @InjectModel(Menu)
    private menuModel: typeof Menu,
  ) { }

  async create(file: CreateMenuImage, createMenuDto: CreateMenuDto): Promise<Menu | false> {
    const createdMenu = new this.menuModel({
      name: createMenuDto.name,
      m_category_menu: createMenuDto.m_category_menu,
      price: createMenuDto.price,
      stock: createMenuDto.stock,
      image: file.originalname,
      menu_details: createMenuDto.menu_details,
      discount: createMenuDto.discount,
      recomend: createMenuDto.recomend
    })

    try {
      await createdMenu.save()
      return createdMenu
    } catch (error) {
      return false
    }

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
