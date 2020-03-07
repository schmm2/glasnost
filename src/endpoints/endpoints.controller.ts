import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { EndpointsService } from './endpoints.service';
import { CreateEndpointDto } from './dto/create-endpoint.dto';
import { ApiTags, ApiParam } from '@nestjs/swagger'
import { Endpoint } from './interfaces/endpoint.interface';

@ApiTags('endpoints')
@Controller('endpoints')
export class EndpointsController {

constructor(private endpointsService: EndpointsService) {}

    @Get()
    getEndpoints(): Endpoint[]{
        return this.endpointsService.getEndpoints();
    }

    @ApiParam({name: 'id'})
    @Get(':id')
    getEndpoint(@Param('id') id): Endpoint{
        return this.endpointsService.getEnpoint(id);
    }

    @Post()
    createEndpoints(@Body() createEndpointDto: CreateEndpointDto): any {
        return this.endpointsService.createEndpoints(createEndpointDto);
    }

}

