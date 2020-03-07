import { Module } from '@nestjs/common';
import { EndpointsController } from './endpoints.controller';
import { EndpointsService } from './endpoints.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EndpointSchema } from './schemas/endpoint.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Endpoint', schema: EndpointSchema }])
    ],
    controllers: [EndpointsController],
    providers: [EndpointsService]
})
export class EndpointsModule {}
