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
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import {
  CreateTaskDto,
  DeleteTaskByIdDto,
  listTaskDto,
  ListTaskResponseDto,
  SeachQueryDto,
  UpdateTaskDto,
} from './app.dto';
import {
  ApiBadRequestResponse,
  ApiBasicAuth,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiHeader,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import {
  INTERNAL_SERVER_ERROR,
  PARAMETERS_FAILED_VALIDATION,
} from './app.const';
import { ApiFilterQuery } from './filter.dto';

@UsePipes(
  new ValidationPipe({
    whitelist: true,
    transform: true,
    transformOptions: {
      enableImplicitConversion: true,
    },
  }),
)
@Controller('/api/v1/task')
@ApiTags('task')
@ApiBearerAuth('authorization')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/list')
  @HttpCode(HttpStatus.OK)
  @ApiFilterQuery('filter', listTaskDto)
  @ApiOperation({
    summary: 'list all tasks',
    description: 'list al tasks',
  })
  @ApiOkResponse({
    description: 'list al tasks',
    type: [ListTaskResponseDto],
  })
  // ?filter[name]=uuid&filter[desc]=uuid&filter[name]=sdcs
  @ApiBadRequestResponse({ description: PARAMETERS_FAILED_VALIDATION })
  @ApiInternalServerErrorResponse({
    description: INTERNAL_SERVER_ERROR,
  })
  list(@Query('filter') filter: listTaskDto): string {
    console.log(filter);
    return this.appService.getHello();
  }

  @Get('/search')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'list all tasks',
    description: 'list al tasks',
  })
  @ApiOkResponse({
    description: 'list al tasks',
    type: [ListTaskResponseDto],
  })
  @ApiBadRequestResponse({ description: PARAMETERS_FAILED_VALIDATION })
  @ApiInternalServerErrorResponse({
    description: INTERNAL_SERVER_ERROR,
  })
  search(@Query() query: SeachQueryDto): string {
    console.log(query);
    return this.appService.getHello();
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'list all tasks',
    description: 'list al tasks',
    tags: ['task', 'user'],
  })
  @ApiOkResponse({
    description: 'list al tasks',
    type: [ListTaskResponseDto],
  })
  @ApiBadRequestResponse({ description: PARAMETERS_FAILED_VALIDATION })
  @ApiInternalServerErrorResponse({
    description: INTERNAL_SERVER_ERROR,
  })
  getHello(): string {
    return this.appService.getHello();
  }

  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'create a  new task',
    description: 'list al tasks',
    tags: ['task', 'user'],
  })
  @ApiCreatedResponse({
    description: 'create a tasks',
    type: ListTaskResponseDto,
  })
  @ApiBadRequestResponse({ description: PARAMETERS_FAILED_VALIDATION })
  @ApiInternalServerErrorResponse({
    description: INTERNAL_SERVER_ERROR,
  })
  @Post()
  createTask(@Body() body: CreateTaskDto) {
    console.log(body);
    return;
  }
  @Put(':id')
  update(
    @Param() param: DeleteTaskByIdDto,
    @Body() body: UpdateTaskDto,
  ): string {
    return this.appService.getHello();
  }

  @Delete(':id')
  delete(@Param() param: DeleteTaskByIdDto) {
    console.log(param);
    return;
  }
}
