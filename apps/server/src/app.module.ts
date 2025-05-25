import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MemoryModule } from './memory/memory.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { QuoteModule } from './quote/quote.module';
import { CommentModule } from './comment/comment.module';
import { TimelineModule } from './timeline/timeline.module';
import { SongModule } from './song/song.module';
import { TagModule } from './tag/tag.module';

@Module({
  imports: [MemoryModule, UserModule, AuthModule, QuoteModule, CommentModule, TimelineModule, SongModule, TagModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
