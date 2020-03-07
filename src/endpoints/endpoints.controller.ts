import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { EndpointsService } from './endpoints.service';
import { CreateEndpointDto } from './dto/create-endpoint.dto';
import { ApiTags, ApiParam } from '@nestjs/swagger'

@ApiTags('endpoints')
@Controller('endpoints')
export class EndpointsController {

constructor(private endpointsService: EndpointsService) {}

    @Get()
    getEndpoints(){
        return this.endpointsService.getEndpoints();
    }

    @ApiParam({name: 'id'})
    @Get(':id')
    getEndpoint(@Param('id') id){
        return this.endpointsService.getEnpoint(id);
    }

    @Post()
    createEndpoints(@Body() createEndpointDto: CreateEndpointDto): any {
        return this.endpointsService.createEndpoints(createEndpointDto);
    }

}

