import { CommitsDto } from './dto/commits.dto';

export class GitHubTransform {
  getCommitsResponse(repositoryName, commitsResponse): CommitsDto {
    return {
      repositoryName: repositoryName,
      repositoryUrl: `https://github.com/${repositoryName}`,
      commits: commitsResponse.data.map((item) => ({
        sha: item.sha,
        message: item.commit.message,
        url: item.html_url,
        author: item.commit.author,
      })),
    };
  }
}
