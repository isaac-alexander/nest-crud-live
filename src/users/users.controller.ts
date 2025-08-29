import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    // get all users
    @Get()
    async findAll(): Promise<User[]> {
        return await this.usersService.findall();
    }

    //get one user
    @Get(':id')
    async findOne(@Param('id') id: number): Promise<User> {
       const user = await this.usersService.findOne(id); 
       if (!user) {
        throw new Error('User not found');
       } else {
        return user;
       }
    }

    // create user 
    @Post()
    async create(@Body() user: User): Promise<User> {
        return await this.usersService.create(user);
    }
}
