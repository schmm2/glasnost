import { Controller, Get, Post, Body } from '@nestjs/common';
import { EndpointsService } from './endpoints.service';
import { CreateEndpointDto } from './dto/create-endpoint.dto';
import { ApiTags } from '@nestjs/swagger'

@ApiTags('endpoints')
@Controller('endpoints')
export class EndpointsController {

constructor(private endpointsService: EndpointsService) {}

    @Get()
    getEndpoints(){
        return this.endpointsService.getEndpoints();
    }

    @Post()
    createEndpoints(@Body() createEndpointDto: CreateEndpointDto): any {
        return this.endpointsService.createEndpoints(createEndpointDto);
    }

}

