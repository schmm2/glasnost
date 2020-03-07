import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EndpointsController } from './endpoints/endpoints.controller';
import { EndpointsService } from './endpoints/endpoints.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EndpointsModule } from './endpoints/endpoints.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI), EndpointsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
