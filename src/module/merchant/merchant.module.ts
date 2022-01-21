import { Module } from '@nestjs/common';
import { MerchantService } from '@/services';
import { MerchantController } from '@/controllers';
import { SequelizeModule } from '@nestjs/sequelize';
import { Merchant } from './merchant.model';

@Module({
  imports: [SequelizeModule.forFeature([Merchant])],
  controllers: [MerchantController],
  providers: [MerchantService]
})
export default class MerchantModule { }
