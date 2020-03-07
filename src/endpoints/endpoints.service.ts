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

    async getEndpoints(): Promise<Endpoint[]> { 
        return await this.endpointModel.find().exec();
    }

    async getEnpoint(id: string): Promise<Endpoint> {
        return await this.endpointModel.findById(id);
    }

    createEndpoint(endpoint: Endpoint){
        const newEndpoint = this.endpointModel(endpoint);
        return newEndpoint.save();
    }
 
    async updateEndpoint(id: string, updateEndpointDto: CreateEndpointDto): Promise<Endpoint>{
        return await this.endpointModel.findByIdAndUpdate(id,updateEndpointDto,{
            new: true
        });
    }
    
    async deleteEndpoint(id: string): Promise<any>{
        return await this.endpointModel.findByIdAndRemove(id)
    }
}
