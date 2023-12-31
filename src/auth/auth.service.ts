import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';
import { PostDto } from './dto/post.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('User')
    private userModel: Model<User>,
  ) {}

  public async signup(
    postDto: PostDto,
  ): Promise<{ id: any; username: string }> {
    const { username, senha } = postDto;
    const user = await this.userModel.create({
      username,
      senha,
    });
    return { id: user._id, username };
  }

  public async signin(
    postDto: PostDto,
  ): Promise<{ id: any; username: string }> {
    const { username, senha } = postDto;
    const document = await this.userModel.findOne({
      username: username,
    });
    if (!document) {
      throw new NotFoundException('Not Found.');
    }
    if (document.senha != senha) {
      throw new UnprocessableEntityException('Senha incorreta!');
    }
    return { id: document._id, username: username };
  }
}
