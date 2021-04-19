// import { ApiProperty } from '@nestjs/swagger';

import {
  Column,
  Table,
  AutoIncrement,
  DataType,
  AllowNull,
  Model,
  ForeignKey,
  BelongsTo,
  PrimaryKey,
} from 'sequelize-typescript';

@Table
export class Menu extends Model {
  // @ApiProperty()
  @AutoIncrement
  @PrimaryKey
  @Column
  // ({ type: DataType.BIGINT })
  id: number;

  // @ApiProperty()
  @Column
  // ({ type: DataType.STRING })
  name: string;

  // @ApiProperty()
  @Column
  // ({ type: DataType.BIGINT })
  m_category_menu: number;

  // @ApiProperty()
  @Column
  // ({ type: DataType.BIGINT })
  price: number;

  // @ApiProperty()
  @Column
  // ({ type: DataType.BIGINT })
  stock: number;

  // @ApiProperty()
  @Column
  // ({ type: DataType.TEXT })
  image: string;

  // @ApiProperty()
  @Column
  // ({ type: DataType.STRING })
  menu_details: string;

  // @ApiProperty()
  @Column
  // ({ type: DataType.BIGINT })
  discount: number;

  // @ApiProperty()
  @Column
  // ({ type: DataType.BIGINT })
  recomend: number;

}
