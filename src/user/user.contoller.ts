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
  @Post()
  async create(@Body() body: CreateUserDto) {
    return { body };
  }

  @Get()
  async read() {
    return { users: [] };
  }

  @Get(':id')
  async readOne(@Param() param) {
    return { user: [], param };
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
