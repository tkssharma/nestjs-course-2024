import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
export class ShowsByIdDto {
  @ApiProperty({
    name: 'id',
  })
  @IsString()
  id: string;
}

export class createMovieDto {
  @ApiProperty({
    name: 'id',
  })
  @IsNumber()
  id: number;

  @ApiProperty({
    name: 'name',
  })
  @IsString()
  name: string;

  @ApiProperty({
    name: 'rating',
  })
  @IsNumber()
  rating: number;

  @ApiProperty({
    name: 'type',
  })
  @IsString()
  type: string;
}
