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
  UseGuards,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateTaskDto, listResponseDto, TaskByIdDto } from "./user.dto";
import { AuthGuard } from "src/core/guards/auth.guard";
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
} from "@nestjs/swagger";
import { NO_ENTITY_FOUND, INTERNAL_SERVER_ERROR } from "../../app.constants";
import { User } from "./user.model";

// swagger tags

@ApiBearerAuth("authorization")
// @UseInterceptors(new TaskInterceptor())
@ApiTags("users apis ")
@UsePipes(
  new ValidationPipe({
    whitelist: true,
    transform: true,
    transformOptions: {
      enableImplicitConversion: true,
    },
  })
)
@Controller("/api/v1/users")
export class UserController {
  constructor(private readonly userService: UserService) { }

  @HttpCode(HttpStatus.OK)
  @ApiConsumes("application/json")
  @ApiNotFoundResponse({ description: NO_ENTITY_FOUND })
  @ApiForbiddenResponse({ description: "UNAUTHORIZED_REQUEST" })
  @ApiUnprocessableEntityResponse({ description: "BAD_REQUEST" })
  @ApiInternalServerErrorResponse({ description: INTERNAL_SERVER_ERROR })
  @ApiOkResponse({
    description: "list retuned successfully",
    type: [listResponseDto],
  })
  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @HttpCode(HttpStatus.CREATED)
  @ApiConsumes("application/json")
  @ApiNotFoundResponse({ description: NO_ENTITY_FOUND })
  @ApiForbiddenResponse({ description: "UNAUTHORIZED_REQUEST" })
  @ApiUnprocessableEntityResponse({ description: "BAD_REQUEST" })
  @ApiInternalServerErrorResponse({ description: INTERNAL_SERVER_ERROR })
  @ApiCreatedResponse({
    description: "task created",
    type: listResponseDto,
  })
  // @UseInterceptors(new TaskInterceptor())
  @Post()
  async craeteTask(@Body() payload: CreateTaskDto) {
    return this.userService.create(payload);
  }
}
/*

@Param('id', ParseIntPipe) id: number // built in pipes 
Body() createItemDto: CreateItemDto // class validator 





*/