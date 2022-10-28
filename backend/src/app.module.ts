import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GitHubModule } from './git-hub/git-hub.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), GitHubModule],
})
export class AppModule {}
