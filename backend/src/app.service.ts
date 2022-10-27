import { Injectable, Inject } from '@nestjs/common';
import { OCTOKIT } from './constants';
import { Octokit } from 'octokit';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    @Inject(OCTOKIT) private octokit: Octokit,
    @Inject(ConfigService) private config: ConfigService,
  ) {}

  async getCommits() {
    const res = await this.octokit.request(
      'GET /repos/{owner}/{repo}/commits',
      {
        owner: this.config.get('GITHUB_REPO_OWNER') as string,
        repo: this.config.get('GITHUB_REPO') as string,
      },
    );

    return res.data;
  }
}
