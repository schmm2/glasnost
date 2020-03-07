import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EndpointsController } from './endpoints/endpoints.controller';
import { EndpointsService } from './endpoints/endpoints.service';

@Module({
  imports: [],
  controllers: [AppController, EndpointsController],
  providers: [AppService, EndpointsService],
})
export class AppModule {}
