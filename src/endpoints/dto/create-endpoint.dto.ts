import { ApiProperty } from "@nestjs/swagger";

export class CreateEndpointDto {
    @ApiProperty()
    readonly title: string; 

    @ApiProperty()
    readonly  url: string;

    @ApiProperty()
    readonly public: boolean;
}