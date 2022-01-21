import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Merchant } from './module/merchant/merchant.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env',
  }),
  SequelizeModule.forRoot({
    dialect: 'mysql',
    host: process.env.DATABASE_HOST,
    port: 3306,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    // models: [Menu],
    autoLoadModels: true,
    synchronize: true,
  }),
    // MenuModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
