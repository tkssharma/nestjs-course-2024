import {
  Body,
  Controller,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { createMovieDto, ShowsByIdDto } from './app.dto';

class ShowDTO {
  id: number;
  name: string;
  rating: number;
  type: string;
}

@UsePipes(
  new ValidationPipe({
    whitelist: true,
    transform: true,
    transformOptions: {
      enableImplicitConversion: true,
    },
  }),
)
@Controller('users')
export class AppController {
  @Post('')
  createUser(@Body() data: Record<string, any>) {
    console.log(data);
    return data;
  }

  @Post('/shows')
  createShow(@Body('name') name: string) {
    console.log(name);
    return name;
  }

  @Post('/shows')
  createShows(@Body('name') name: string, @Body('play') play: string) {
    console.log(name, play);
    return { name, play };
  }

  @Post('shows/:id/movies')
  craeteMovie(@Param() param: ShowsByIdDto, @Body() movie: createMovieDto) {
    console.log(movie, param.id);
    return movie;
  }
}
