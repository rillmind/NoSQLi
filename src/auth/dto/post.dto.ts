import { IsNotEmpty, IsString } from "class-validator";

export class PostDto {
  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @IsNotEmpty()
  readonly senha: any;
}
