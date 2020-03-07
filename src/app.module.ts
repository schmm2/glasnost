import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EndpointsController } from './endpoints/endpoints.controller';
import { EndpointsService } from './endpoints/endpoints.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EndpointsModule } from './endpoints/endpoints.module';
import 'dotenv/config'
import { LoggerMiddleware } from './shared/middlewares/logger.middleware';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI,
    { useNewUrlParser: true, 
      useUnifiedTopology: true,
      useFindAndModify: false }), 
  EndpointsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer){
    consumer.apply(LoggerMiddleware).forRoutes('endpoints');
  }
}
 