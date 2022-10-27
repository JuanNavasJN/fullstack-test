import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OCTOKIT } from './constants';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { Octokit } from 'octokit';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: OCTOKIT,
      useFactory: async (config: ConfigService) => {
        return new Octokit({
          auth: config.get('GITHUB_TOKEN'),
        });
      },
      inject: [ConfigService],
    },
  ],
})
export class AppModule {}
