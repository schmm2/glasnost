import { Injectable } from '@nestjs/common';
import { Endpoint } from './interfaces/endpoint.interface';
import { CreateEndpointDto } from './dto/create-endpoint.dto';

@Injectable()
export class EndpointsService {
    endpoints: Endpoint[] = [
        {
            id: '1',
            title: 'MS Graph',
            public: false,
            url: 'www'
        }
    ]

    getEndpoints(): Endpoint[] { 
        return this.endpoints;
    }

    getEnpoint(id: string): Endpoint {
        return this.endpoints.find(endpoint => endpoint.id === id);
    }

    createEndpoints(endpoint: Endpoint){
        return `Endpoint title ${endpoint.title}`;
    }

    updateEndpoint(id: string, updateEndpointDto: CreateEndpointDto){
        const data = this.endpoints.find(endpoint => endpoint.id === id);
        data.title = updateEndpointDto.title ? updateEndpointDto.title : data.title;
        data.url = updateEndpointDto.url ? updateEndpointDto.url : data.url;
        return data;
    }
}
