class CommitDto {
  sha: string;
  message: string;
  url: string;
  author: {
    name?: string;
    email?: string;
    date?: string;
  };
}

export class CommitsDto {
  repositoryName: string;

  repositoryUrl: string;

  commits: CommitDto[];
}
