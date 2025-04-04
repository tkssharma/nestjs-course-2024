import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDTO, listResponseDto } from './app.dto';
import {
  ApiConsumes,
  ApiNotFoundResponse,
  ApiForbiddenResponse,
  ApiUnprocessableEntityResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
} from '@nestjs/swagger';

let USERS = [];
// mock users
@UsePipes(
  new ValidationPipe({
    whitelist: true,
    transform: true,
    transformOptions: {
      enableImplicitConversion: true,
    },
  }),
)
@Controller('/users')
export class UsersController {
  @Post()
  createUser(@Body() createUserDto: CreateUserDTO) {
    USERS.push(createUserDto);
    return { message: 'User created' };
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiConsumes('application/json')
  @ApiNotFoundResponse({ description: 'NO_ENTITY_FOUND' })
  @ApiForbiddenResponse({ description: 'UNAUTHORIZED_REQUEST' })
  @ApiUnprocessableEntityResponse({ description: 'BAD_REQUEST' })
  @ApiInternalServerErrorResponse({ description: 'INTERNAL_SERVER_ERROR' })
  @ApiOkResponse({
    description: 'list users successfully',
    type: [listResponseDto],
  })
  findAllUsers() {
    return USERS;
  }

  @Get(':id')
  findUserById(@Param('id', ParseIntPipe) id: number) {
    const user = USERS.find((user) => user.id === +id);

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }

  @Put(':id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: CreateUserDTO,
  ) {
    const userId = USERS.findIndex((user) => user.id === +id);

    if (!userId) {
      throw new NotFoundException();
    }

    USERS[userId] = updateUserDto;

    return { message: 'User updated' };
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    USERS = USERS.filter((user) => user.id !== +id);

    return { message: 'User deleted' };
  }
}
