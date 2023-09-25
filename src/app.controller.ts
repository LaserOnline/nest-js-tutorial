import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private func:any
  constructor(private readonly appService: AppService) {
    this.func = this.appService.getHello()
  }

  @Get()
  getHello() {
    return this.func.function1()
  }
}
