import { All, Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { NextService } from './next.service';

@Controller()
export class NextController {
  constructor(private readonly nextService: NextService) {}

  @Get([
    '_next/*',
    '/',
    '/favicon.ico',
    // TODO: add all Next's route in here
  ])
  next(@Req() req: Request, @Res() res: Response) {
    const handle = this.nextService.getNextServer().getRequestHandler();
    handle(req, res);
  }

  @All('api/*')
  nextApi(@Req() req: Request, @Res() res: Response) {
    const handle = this.nextService.getNextServer().getRequestHandler();
    handle(req, res);
  }
}
