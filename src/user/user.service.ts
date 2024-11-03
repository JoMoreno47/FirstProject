// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuarios } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Usuarios)
    private readonly userRepository: Repository<Usuarios>,
  ) {}

  async findAll(): Promise<Usuarios[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<Usuarios> {
    return this.userRepository.findOne({ where: { id } });
  }

  async create(user: Partial<Usuarios>): Promise<Usuarios> {
    const newUser = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }

  async update(id: number, user: Partial<Usuarios>): Promise<Usuarios> {
    await this.userRepository.update(id, user);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {Usuarios
    await this.userRepository.delete(id);
  }
}
