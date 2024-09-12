import { UserService } from './user.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdatePutUserDto } from './dto/update-put.dto';
import { UpdatePatchUserDto } from './dto/update-patch-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() data: CreateUserDto) {
    return this.userService.create(data);
  }

  @Get()
  async list() {
    return this.userService.list();
  }

  @Get(':id')
  async show(@Param('id', ParseIntPipe) id: number) {
    return this.userService.show(id);
  }

  @Put(':id')
  async update(
    @Body() { name, email, password }: UpdatePutUserDto,
    @Param() params,
  ) {
    return {
      method: 'put',
      email,
      name,
      password,
      params,
    };
  }

  @Patch(':id')
  async updatePartial(
    @Body() { name, email, password }: UpdatePatchUserDto,
    @Param() params,
  ) {
    return {
      method: 'patch',
      name,
      email,
      password,
      params,
    };
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id) {
    return {
      id,
    };
  }
}
