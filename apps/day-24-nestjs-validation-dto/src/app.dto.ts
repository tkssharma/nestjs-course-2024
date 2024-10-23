import { ApiProperty } from '@nestjs/swagger';
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
} from 'class-validator';
import { Transform, Type as ValidateType } from 'class-transformer';

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
}
