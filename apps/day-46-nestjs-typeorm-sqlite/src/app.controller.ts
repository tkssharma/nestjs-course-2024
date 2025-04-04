import { Controller, Get, Query, Headers } from '@nestjs/common';
import { ApiHeader, ApiProperty } from '@nestjs/swagger';

export class AlbumQueryParams {
  @ApiProperty({
    name: 'size',
  })
  size: number;

  @ApiProperty({
    name: 'title',
  })
  title: string;
}

export enum origin {
  'app-dev' = 'app-dev',
}
// common header on all methods
@ApiHeader({
  name: 'x-api-token',
  description: 'pass x-api-token value ',
  example: 'dev-origin',
  enum: origin,
  required: false,
})
@Controller('users')
export class AppController {
  // @Example 1: Query Params Object
  @Get('')
  getVideos(
    @Headers('x-api-origin') origin: string,
    @Query() params: Record<string, any>,
  ) {
    console.log(params);
    console.log(origin);
    return params;
  }

  @Get('/shows')
  getShows(@Query('name') name: string) {
    console.log(name);
    return { title: name };
  }

  @Get('latest-movies')
  getLatestMovies(
    @Query('name') name: string,
    @Query('rating') rating: number, // allways come as string
  ) {
    return { name, rating };
  }

  @Get('albums')
  getAlbums(@Query() params: AlbumQueryParams) {
    return {
      message: 'You albums group',
      title: params.title,
      size: params.size,
    };
  }
}
