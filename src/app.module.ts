import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DATABASE_HOST, DATABASE_NAME, DATABASE_PASSWORD, DATABASE_PORT, DATABASE_USERNAME } from './config/constants';
import { SexoModule } from './sexo/sexo.module';
import { EstadoCivilModule } from './estado-civil/estado-civil.module';
import { EtniaModule } from './etnia/etnia.module';
import { InternoModule } from './interno/interno.module';
import { ZonaResidenciaModule } from './zona-residencia/zona-residencia.module';
import { NacionalidadModule } from './nacionalidad/nacionalidad.module';
import { EstablecimientoProcedenciaModule } from './establecimiento-procedencia/establecimiento-procedencia.module';
import { NivelEducacionModule } from './nivel-educacion/nivel-educacion.module';
import { OficioModule } from './oficio/oficio.module';
import { ReligionModule } from './religion/religion.module';
import { OjosColorModule } from './ojos-color/ojos-color.module';
import { OjosTamanioModule } from './ojos-tamanio/ojos-tamanio.module';
import { NarizTamanioModule } from './nariz-tamanio/nariz-tamanio.module';
import { NarizFormaModule } from './nariz-forma/nariz-forma.module';
import { PeloTipoModule } from './pelo-tipo/pelo-tipo.module';
import { PeloColorModule } from './pelo-color/pelo-color.module';
import { PielModule } from './piel/piel.module';
import { UnidadModule } from './unidad/unidad.module';
import { PabellonModule } from './pabellon/pabellon.module';
import { ReingresoModule } from './reingreso/reingreso.module';
import { TipoCondenaModule } from './tipo-condena/tipo-condena.module';
import { EstadoProcesalModule } from './estado-procesal/estado-procesal.module';
import { TipoDelitoModule } from './tipo-delito/tipo-delito.module';
import { JurisdiccionModule } from './jurisdiccion/jurisdiccion.module';
import { ReincidenciaModule } from './reincidencia/reincidencia.module';
import { JuzgadoModule } from './juzgado/juzgado.module';
import { TipoDefensorModule } from './tipo-defensor/tipo-defensor.module';
import { ProvinciaModule } from './provincia/provincia.module';
import { DepartamentoModule } from './departamento/departamento.module';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';
import { PlanillaAntecedentesModule } from './planilla-antecedentes/planilla-antecedentes.module';
import { MarcaCorporalModule } from './marca-corporal/marca-corporal.module';
import { LocalidadModule } from './localidad/localidad.module';



@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        //host: config.get<string>(DATABASE_HOST),
        host: "b0vnpyobuzc5d4agzfrf-mysql.services.clever-cloud.com",
        //port: parseInt(config.get<string>(DATABASE_PORT),10),
        port: 3306,
        //username: config.get<string>(DATABASE_USERNAME),
        username:"urkheir7tbbo7nfl",
        //password: config.get<string>(DATABASE_PASSWORD),
        password:"5j1D9ucvCyg52BAGofe8",
        //database: config.get<string>(DATABASE_NAME),
        database: "b0vnpyobuzc5d4agzfrf",
        entities: [__dirname + "./**/**/*.entity{.ts,.js}"],
        autoLoadEntities: true,
        synchronize: true
      }) 
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    SexoModule,
    EstadoCivilModule,
    EtniaModule,
    InternoModule,
    ZonaResidenciaModule,
    NacionalidadModule,
    EstablecimientoProcedenciaModule,
    NivelEducacionModule,
    OficioModule,
    ReligionModule,
    OjosColorModule,
    OjosTamanioModule,
    NarizTamanioModule,
    NarizFormaModule,
    PeloTipoModule,
    PeloColorModule,
    PielModule,
    UnidadModule,
    PabellonModule,
    ReingresoModule,
    TipoCondenaModule,
    EstadoProcesalModule,
    TipoDelitoModule,
    JurisdiccionModule,
    ReincidenciaModule,
    JuzgadoModule,
    TipoDefensorModule,
    ProvinciaModule,
    DepartamentoModule,
    UsuarioModule,
    AuthModule,
    PlanillaAntecedentesModule,
    MarcaCorporalModule,
    LocalidadModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
