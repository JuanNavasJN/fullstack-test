import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiResponse } from '@nestjs/swagger';
import { GITHUB_API_ERROR } from './constants';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('commits')
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error - GitHub API Response',
    schema: { example: { statusCode: 500, message: GITHUB_API_ERROR } },
  })
  getCommits() {
    return this.appService.getCommits();
  }
}
