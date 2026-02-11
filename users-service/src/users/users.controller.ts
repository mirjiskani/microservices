import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    @MessagePattern({ cmd: 'get_users' })
    async findAll() {
        return this.usersService.findAll();
    }
    @MessagePattern({ cmd: 'get_user_by_id' })
    async findOne(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.findOne(id);
    }
}
