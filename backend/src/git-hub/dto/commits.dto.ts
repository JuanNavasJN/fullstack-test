import { CommitDto } from './commit.dto';

export class CommitsDto {
  repositoryName: string;

  repositoryUrl: string;

  commits: CommitDto[];
}
