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

export class CreateMenuDto {
    // @IsOptional()
    @IsNumber()
    id?: number;

    @IsNotEmpty()
    @MinLength(5)
    // @IsOptional()
    @IsAlphanumeric()
    name?: string;

    // @IsOptional()
    @IsNumber()
    m_category_menu?: number;

    // @IsOptional()
    @IsNumber()
    price?: number;

    // @IsOptional()
    @IsNumber()
    stock?: number;

    // @IsOptional()
    @IsAlphanumeric()
    image?: string;

    // @IsOptional()
    @IsAlphanumeric()
    menu_details?: string;

    // @IsOptional()
    @IsNumber()
    discount?: number;

    // @IsOptional()
    @IsNumber()
    recomend?: number;

}
