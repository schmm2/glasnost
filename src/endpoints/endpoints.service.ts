import { Injectable } from '@nestjs/common';
import { Endpoint } from './interfaces/endpoint.interface';

@Injectable()
export class EndpointsService {

    getEndpoints(): string { 
        return "hello endpoints 2";
    }

    createEndpoints(endpoint: Endpoint){
        return `Endpoint title ${endpoint.title}`;
    }
}
