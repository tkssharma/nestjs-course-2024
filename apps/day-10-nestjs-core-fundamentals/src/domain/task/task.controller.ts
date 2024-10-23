import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.model';
import {
  CreateTaskDto,
  listResponseDto,
  TaskByIdDto,
  TaskQueryParamDto,
} from './task.dto';
import { AuthGuard } from 'src/core/guards/auth.guard';
import {
  ApiBearerAuth,
  ApiConsumes,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { NO_ENTITY_FOUND, INTERNAL_SERVER_ERROR } from '../../app.constants';
import { EmailValidationPipe } from '../../core/pipes/custom.pipe';

// swagger tags

@ApiBearerAuth('authorization')
// @UseInterceptors(new TaskInterceptor())
@ApiTags('tasks apis ')
@UsePipes(
  new ValidationPipe({
    whitelist: true,
    transform: true,
    transformOptions: {
      enableImplicitConversion: true,
    },
  }),
)
@Controller('/api/v1/tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @HttpCode(HttpStatus.OK)
  @ApiConsumes('application/json')
  @ApiNotFoundResponse({ description: NO_ENTITY_FOUND })
  @ApiForbiddenResponse({ description: 'UNAUTHORIZED_REQUEST' })
  @ApiUnprocessableEntityResponse({ description: 'BAD_REQUEST' })
  @ApiInternalServerErrorResponse({ description: INTERNAL_SERVER_ERROR })
  @ApiOkResponse({
    description: 'list retuned successfully',
    type: [listResponseDto],
  })
  @UseGuards(AuthGuard)
  @Get()
  async findAll(): // @Query() param: TaskQueryParamDto,
  // @Query('email', EmailValidationPipe) email: string
  Promise<Task[]> {
    return this.taskService.findAll();
  }

  @HttpCode(HttpStatus.CREATED)
  @ApiConsumes('application/json')
  @ApiNotFoundResponse({ description: NO_ENTITY_FOUND })
  @ApiForbiddenResponse({ description: 'UNAUTHORIZED_REQUEST' })
  @ApiUnprocessableEntityResponse({ description: 'BAD_REQUEST' })
  @ApiInternalServerErrorResponse({ description: INTERNAL_SERVER_ERROR })
  @ApiCreatedResponse({
    description: 'task created',
    type: listResponseDto,
  })
  // @UseInterceptors(new TaskInterceptor())
  @UseGuards(AuthGuard)
  @Post()
  async craeteTask(@Body() payload: CreateTaskDto) {
    return this.taskService.create(payload);
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  async updateTask(
    @Param() param: TaskByIdDto,
    @Body() payload: CreateTaskDto,
  ) {
    return this.taskService.updateTask(param.id, payload);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  @UseGuards(AuthGuard)
  async deleteTask(@Param() param: TaskByIdDto) {
    return this.taskService.deleteTask(param.id);
  }
}

/*
ParseIntPipe: Converts a string to an integer.
ParseFloatPipe: Converts a string to a floating-point number.
ValidationPipe: Performs automatic data validation based on decorators such as @Body(), @Query(), and more.

*/
