import { Module } from '@nestjs/common';
import { MerchantModule } from '@/modules';
import { MerchantService } from '@/services';
import { MerchantController } from '@/controllers';


@Module({
    imports: [MerchantModule],
    providers: [MerchantService],
    controllers: [MerchantController]
})
export class MerchantHttpModule { }
