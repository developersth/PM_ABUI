import { AppService } from './app.service';
import { Controller, Request, Post, UseGuards,Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
@Controller()
export class AppController {
  // constructor(private readonly authService: AuthService) {}

  @Get()
  getHello(): string {
    return 'Nest JS API!';
  }

  // @UseGuards(LocalAuthGuard)
  // @Post('api/auth/login')
  // async login(@Request() req) {
  //   return this.authService.login(req.user);
  // }
  
}
