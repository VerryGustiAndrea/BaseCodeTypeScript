import { Module } from '@nestjs/common';
import { MenuModule } from './menu.module';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';

@Module({
    imports: [MenuModule],
    providers: [MenuService],
    controllers: [MenuController]
})
export class MenuHttpModule { }
