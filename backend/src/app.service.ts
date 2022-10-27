import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { OCTOKIT, GITHUB_API_ERROR } from './constants';
import { Octokit } from 'octokit';
import { ConfigService } from '@nestjs/config';
import { CommitsDto } from './dto/commits.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject(OCTOKIT) private octokit: Octokit,
    @Inject(ConfigService) private config: ConfigService,
  ) {}

  async getCommits(): Promise<CommitsDto> {
    try {
      const res = await this.octokit.request(
        'GET /repos/{owner}/{repo}/commits',
        {
          owner: this.config.get('GITHUB_REPO_OWNER') as string,
          repo: this.config.get('GITHUB_REPO') as string,
        },
      );

      const repositoryName = `${this.config.get(
        'GITHUB_REPO_OWNER',
      )}/${this.config.get('GITHUB_REPO')}`;

      return {
        repositoryName: repositoryName,
        repositoryUrl: `https://github.com/${repositoryName}`,
        commits: res.data.map((item) => ({
          sha: item.sha,
          message: item.commit.message,
          url: item.html_url,
          author: item.commit.author,
        })),
      };
    } catch (err) {
      console.log(err);
      throw new HttpException(
        GITHUB_API_ERROR,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
