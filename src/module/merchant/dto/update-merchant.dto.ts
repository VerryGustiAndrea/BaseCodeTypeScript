import { PartialType } from '@nestjs/mapped-types';
import { CreateMenuDto } from './create-merchant.dto';

export class UpdateMenuDto extends PartialType(CreateMenuDto) { }
