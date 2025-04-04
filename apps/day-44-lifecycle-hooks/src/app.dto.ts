import { ApiProperty, ApiResponseProperty, PartialType } from '@nestjs/swagger';
import {
  IsString,
  IsDefined,
  MinLength,
  IsOptional,
  IsUUID,
  ValidateNested,
  IsObject,
  IsArray,
  ArrayMinSize,
  IsNumber,
  Min,
  IsBoolean,
} from 'class-validator';
import { Transform, Type, Type as ValidateType } from 'class-transformer';

export class DeleteTaskByIdDto {
  @ApiProperty({
    name: 'taskid',
    required: true,
    example: 'uuid',
  })
  @IsUUID()
  id: string;
}

export class CreateTaskInfoDto {
  @ApiProperty({
    name: 'taskid',
    required: true,
    example: 'uuid',
  })
  @IsUUID()
  task_id: string;

  @ApiProperty({
    name: 'taskid',
    required: false,
    example: 'name',
  })
  @IsOptional()
  @IsString()
  task_name: string;
}

export class FileDto {
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
    name: 'info',
    required: true,
    example: [
      {
        task_id: '36af5080-eba2-4485-b886-13deb9cd87cb',
        task_name: 'hello',
      },
    ],
  })
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested()
  @ValidateType(() => CreateTaskInfoDto)
  public info!: CreateTaskInfoDto[];

  @ApiProperty({
    description: 'The files associated with the document',
    required: true,
    type: [FileDto],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @ValidateType(() => FileDto)
  public files!: FileDto[];
}
export class UpdateTaskDto extends PartialType(CreateTaskDto) {}

export class ListTaskResponseDto {
  @ApiResponseProperty({
    example: 'name',
  })
  name: string;

  @ApiResponseProperty({
    example: 'desc',
  })
  description: string;

  @ApiResponseProperty({
    example: [
      {
        task_id: '36af5080-eba2-4485-b886-13deb9cd87cb',
        task_name: 'hello',
      },
    ],
  })
  info: string;
}

// /search?tags=sdcs,wsdeces,sdc&page=1&limit=45
export class SeachQueryDto {
  @ApiProperty({
    description: 'tags',
    required: false,
    example: 'helom,sdxs,wasdx,cwa,dsdcs',
  })
  @IsString({ each: true })
  @IsOptional()
  // sdcs,wsdeces,sdc
  @Transform((val: string) => (typeof val === 'string' ? val.split(',') : val))
  public tags?: string[];

  @ApiProperty({
    description: 'ids',
    required: false,
    example: '3453543-3dscw34r3wed',
  })
  @IsString({ each: true })
  @IsOptional()
  @Transform((val: string) => (typeof val === 'string' ? val.split(',') : val))
  public ids?: string[];

  @ApiProperty({
    description: 'is_active',
    required: false,
    example: true,
  })
  @IsOptional()
  @IsBoolean()
  @Transform((val: string | boolean) => val === 'true' || val === true)
  is_active: boolean = false;

  @ApiProperty({
    description: 'is_active',
    required: false,
    example: true,
  })
  @IsOptional()
  @IsBoolean()
  @Transform((val: string | boolean) => val === 'true' || val === true)
  is_confirmed: boolean = false;

  @ApiProperty({
    description: 'page number for request',
    required: false,
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  public page?: number;

  @ApiProperty({
    description: 'number of records in a request',
    required: false,
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  public limit?: number;
}

export class listTaskDto {
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
    name: 'task_id',
    required: true,
    example: 'description long text',
  })
  @IsUUID()
  task_id: string;
}
