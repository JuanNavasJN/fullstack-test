import { Inject, Injectable } from '@nestjs/common';
import { Octokit } from 'octokit';
import { ConfigService } from '@nestjs/config';
import { OCTOKIT, GITHUB_REPO_OWNER, GITHUB_REPO } from '../constants';

@Injectable()
export class GitHubRepository {
  constructor(
    @Inject(OCTOKIT) private octokit: Octokit,
    @Inject(ConfigService) private config: ConfigService,
  ) {}

  getCommits() {
    return this.octokit.request('GET /repos/{owner}/{repo}/commits', {
      owner: this.config.get(GITHUB_REPO_OWNER) as string,
      repo: this.config.get(GITHUB_REPO) as string,
    });
  }

  getName() {
    return `${this.config.get(GITHUB_REPO_OWNER)}/${this.config.get(
      GITHUB_REPO,
    )}`;
  }
}
