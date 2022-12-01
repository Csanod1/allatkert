import { Controller, Get, Query, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('form')
  getHello(
    @Query('animalName') animalName: string,
    @Query('animalAge') animalAge: number,
  ): object {
    const errors: any = {};
    if (animalAge === null) {
      errors.animalAge = 'nincs kitöltve a mező';
    }
    if (animalName === '') {
      errors.animalName = 'nincs kitöltve a mező';
    }
    return { animalName, animalAge, errors };
  }
}
