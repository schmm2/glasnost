import { Injectable } from '@nestjs/common';
import { Endpoint } from './interfaces/endpoint.interface';
import { CreateEndpointDto } from './dto/create-endpoint.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class EndpointsService {
    constructor(
        @InjectModel('Endpoint') private readonly endpointModel: Model<Endpoint>
    ) {}
    
    endpoints: Endpoint[] = [
        {
            title: 'dd',
            url: '',
            public: false
        }
    ]

    getEndpoints(): Endpoint[] { 
        return this.endpointModel.find().exec();
    }

    getEnpoint(id: string): Endpoint {
        return this.endpoints.find(endpoint => endpoint.id === id);
    }

    createEndpoint(endpoint: Endpoint){
        const newEndpoint = this.endpointModel(endpoint);
        return newEndpoint.save();
    }

    updateEndpoint(id: string, updateEndpointDto: CreateEndpointDto): Endpoint{
        const data = this.endpoints.find(endpoint => endpoint.id === id);
        data.title = updateEndpointDto.title ? updateEndpointDto.title : data.title;
        data.url = updateEndpointDto.url ? updateEndpointDto.url : data.url;
        return data;
    }
    
    deleteEndpoint(id: string): Endpoint{
        return this.endpoints.find(endpoint => endpoint.id === id);
    }
}
