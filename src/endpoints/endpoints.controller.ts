import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
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
    createEndpoint(@Body() createEndpointDto: CreateEndpointDto): string {
        return this.endpointsService.createEndpoint(createEndpointDto);
    }

    @ApiParam({name: 'id'})
    @Put(':id')
    updateEndpoint(@Param('id') id, @Body() updateEndpointDto: CreateEndpointDto): Endpoint{
        return this.endpointsService.updateEndpoint(id, updateEndpointDto);
    }

    @ApiParam({name: 'id'})
    @Delete(':id')
    deleteEndpoint(@Param('id') id){
        return this.endpointsService.deleteEndpoint(id);
    }
}

