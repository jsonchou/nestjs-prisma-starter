import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User as UserModel } from '@prisma/client';
import { UserService } from './user.service';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  async getUserById(@Param('id') id: number): Promise<UserModel> {
    console.log(4444, id);
    return this.userService.user({ id });
  }

  @Post()
  async signupUser(
    @Body() userData: { name?: string; email: string },
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @Get('list')
  async getAllUser(): Promise<UserModel[]> {
    return this.userService.users({
      skip: 0,
      take: 100,
    });
  }
}
