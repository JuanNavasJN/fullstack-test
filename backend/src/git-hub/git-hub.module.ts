import { Module } from '@nestjs/common';
import { OCTOKIT, GITHUB_TOKEN } from '../constants';
import { ConfigService } from '@nestjs/config';
import { Octokit } from 'octokit';
import { GitHubService } from './git-hub.service';
import { GitHubRepository } from './git-hub.repository';
import { GitHubTransform } from './git-hub.transform';
import { GitHubController } from './git-hub.controller';

@Module({
  providers: [
    {
      provide: OCTOKIT,
      useFactory: async (config: ConfigService) => {
        return new Octokit({
          auth: config.get(GITHUB_TOKEN),
        });
      },
      inject: [ConfigService],
    },
    GitHubService,
    GitHubRepository,
    GitHubTransform,
  ],
  controllers: [GitHubController],
})
export class GitHubModule {}
