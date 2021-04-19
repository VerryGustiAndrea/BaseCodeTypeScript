import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Menu } from './menu/menu.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { MenuModule } from './menu/menu.module';


@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'redrubyg_redruby',
      models: [Menu],
      autoLoadModels: true,
      synchronize: true,
    }), MenuModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
