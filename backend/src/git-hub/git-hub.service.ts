import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { CommitsDto } from './dto/commits.dto';
import { GITHUB_API_ERROR } from '../constants';
import { GitHubRepository } from './git-hub.repository';
import { GitHubTransform } from './git-hub.transform';

@Injectable()
export class GitHubService {
  constructor(
    @Inject(GitHubRepository) private githubRepository: GitHubRepository,
    @Inject(GitHubTransform) private githubTransform: GitHubTransform,
  ) {}

  async getCommits(): Promise<CommitsDto> {
    try {
      const commitsResponse = await this.githubRepository.getCommits();

      const repositoryName = this.githubRepository.getName();

      return this.githubTransform.getCommitsResponse(
        repositoryName,
        commitsResponse,
      );
    } catch (err) {
      console.log(err);
      throw new HttpException(
        GITHUB_API_ERROR,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
