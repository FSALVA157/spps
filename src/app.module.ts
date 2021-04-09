import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DATABASE_HOST, DATABASE_NAME, DATABASE_PASSWORD, DATABASE_PORT, DATABASE_USERNAME } from './config/constants';
import { SexoModule } from './sexo/sexo.module';
import { EstadoCivilModule } from './estado-civil/estado-civil.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get<string>(DATABASE_HOST),
        //host: "127.0.0.1",
        port: parseInt(config.get<string>(DATABASE_PORT),10),
        //port: 3306,
        //username: config.get<string>(DATABASE_USERNAME),
        username:"root",
        //password: config.get<string>(DATABASE_PASSWORD),
        password:"spps",
        //database: config.get<string>(DATABASE_NAME),
        database: "spps_db",
        entities: [__dirname + "./**/**/*.entity{.ts,.js}"],
        autoLoadEntities: true,
        synchronize: true,
      }) 
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    SexoModule,
    EstadoCivilModule


  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
