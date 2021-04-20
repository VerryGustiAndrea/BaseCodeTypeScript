import {
    IsEmail,
    IsString,
    IsNumber,
    IsOptional,
    IsMobilePhone,
    IsDateString,
    IsEthereumAddress,
    IsBtcAddress,
    IsNotEmpty,
    ValidateNested,
    IsAlphanumeric,
    IsAlpha,
    MinLength,
    MaxLength,
    isAlphanumeric,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateMenuDto {
    // @IsOptional()

    @IsNotEmpty()
    @MinLength(5)
    // @IsOptional()
    @IsAlphanumeric()
    name?: string;

    // @IsOptional()
    @Type(() => Number)
    @IsNumber()
    m_category_menu?: number;

    // @IsOptional()
    @Type(() => Number)
    @IsNumber()
    price?: number;

    // @IsOptional()
    @Type(() => Number)
    @IsNumber()
    stock?: number;

    // @IsOptional()
    @IsAlphanumeric()
    image?: string;

    // @IsOptional()
    @IsAlphanumeric()
    menu_details?: string;

    // @IsOptional()
    @Type(() => Number)
    @IsNumber()
    discount?: number;

    // @IsOptional()
    @Type(() => Number)
    @IsNumber()
    recomend?: number;

}

export class CreateMenuImage {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    buffer: Buffer;
}

//  class CreateMenuImage {
//     file: Images[];
// }
