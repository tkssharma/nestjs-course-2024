import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class TaskByIdDto {
  @ApiProperty({
    name: 'id',
    required: true,
    example: 'id',
  })
  @IsNumber()
  @IsDefined()
  id: number;
}
export class CreateTaskDto {
  @ApiProperty({
    name: 'name',
    required: true,
    example: 'name',
  })
  @IsString()
  @IsDefined()
  @MinLength(4)
  name: string;

  @ApiProperty({
    name: 'description',
    required: true,
    example: 'description long text',
  })
  @IsString()
  @IsDefined()
  @MinLength(10)
  description: string;

  @ApiProperty({
    name: 'id',
    required: false,
    example: 'uuid',
  })
  @IsOptional()
  id?: number;
}

export class TaskQueryParamDto {
  @ApiProperty({
    name: 'email',
    required: true,
    example: 'ok@gmai.com',
  })
  @IsEmail()
  email: string;
}

export class listResponseDto {
  @ApiResponseProperty({
    example: 'name',
  })
  name: string;

  @ApiResponseProperty({
    example: 'name',
  })
  description: string;
}
