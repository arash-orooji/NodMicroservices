import { IsNotEmpty, IsString } from 'class-validator';
export class GetUserDto {
    @IsString()
    @IsNotEmpty()
    userId: string;
}
