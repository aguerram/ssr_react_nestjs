import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { RenderableResponse } from 'nest-next';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() res:RenderableResponse) {
    res.render("Index",{
      message:"Hello from server"
    })
  }
}
