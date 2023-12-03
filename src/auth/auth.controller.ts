import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PostDto } from './dto/post.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("signup")
  @HttpCode(HttpStatus.CREATED)
  public async create(@Body() postDto: PostDto) {
    const document = await this.authService.signup(postDto);
    return document;
  }

  @Post("signin")
  @HttpCode(HttpStatus.OK)
  public async login(@Body() postDto: PostDto) {
    const document = await this.authService.signin(postDto);
    return document;
  }
}
