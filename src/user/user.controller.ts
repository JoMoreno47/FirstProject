// src/users/users.controller.ts
import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { UsersService } from './user.service';
import { Usuarios } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): Promise<Usuarios[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Usuarios> {
    return this.usersService.findOne(id);
  }

  @Post()
  create(@Body() user: Partial<Usuarios>): Promise<Usuarios> {
    return this.usersService.create(user);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() user: Partial<Usuarios>): Promise<Usuarios> {
    return this.usersService.update(id, user);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.usersService.remove(id);
  }
}
