import { Injectable } from '@nestjs/common';
import { Endpoint } from './interfaces/endpoint.interface';

@Injectable()
export class EndpointsService {
    endpoints = [
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
}
