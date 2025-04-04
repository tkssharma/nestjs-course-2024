import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';
import { IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateUserDTO {
  @ApiProperty({
    name: 'name',
  })
  @IsString()
  name: string;

  @ApiProperty({
    name: 'age',
  })
  @Min(18)
  @Max(70)
  @IsNumber()
  age: number;

  @ApiProperty({
    name: 'id',
  })
  @IsNumber()
  id: number;
}

export class listResponseDto {
  @ApiResponseProperty({
    example: 'name',
  })
  name: string;

  @ApiResponseProperty({
    example: 'name',
  })
  age: string;
}
