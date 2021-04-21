import { Injectable, Param } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { exec } from 'node:child_process';
import { exception } from 'node:console';

import { CreateMenuDto, CreateMenuImage } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { Menu } from './menu.model';


@Injectable()
export class MenuService {
  constructor(
    @InjectModel(Menu)
    private menuModel: typeof Menu,
  ) { }




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

  async getMenuRecomend(): Promise<Menu[] | false> {
    const response = await this.menuModel.findAll({ where: { recomend: 1 } });
    if (response.length == 0) {
      return false
    } else if (response) {
      console.log("disini")
      return response
    } else {
      return false
    }
  }

  async findByCategory(id: number): Promise<Menu[] | false> {
    const response = await this.menuModel.findAll({ where: { m_category_menu: id } });
    if (response.length == 0) {
      return false
    } else if (response) {
      console.log("disini")
      return response
    } else {
      return false
    }
  }

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

  async update(id: number, updateMenuDto: UpdateMenuDto): Promise<{} | false> {

    const updatedMenu = {
      name: updateMenuDto.name,
      m_category_menu: Number(updateMenuDto.m_category_menu),
      price: Number(updateMenuDto.price),
      stock: Number(updateMenuDto.stock),
      image: 'file.originalname',
      menu_details: updateMenuDto.menu_details,
      discount: Number(updateMenuDto.discount),
      recomend: Number(updateMenuDto.recomend)
    }

    try {
      const execute = await this.menuModel.update(updatedMenu, { where: { id: id } });
      return updatedMenu
    } catch (error) {
      return false
    }
  }

  async remove(id: number) {

    try {
      const execute = await this.menuModel.destroy({ where: { id: id } })
      console.log(execute)
      return true
    } catch (error) {
      return false
    }
    // return `This action removes a #${id} menu`;
  }
}
