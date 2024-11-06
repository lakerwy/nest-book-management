import { Module, DynamicModule } from '@nestjs/common';
import { DbService } from './db.service';

export interface DbModuleOptions {
  path: string;
}

// 在 UserModule 里用的时候，path 是 users.json，在 BookModule 用的时候，path 是 books.json。这种需要传参的模块就是动态模块了 DynamicModule
@Module({})
export class DbModule {
  static register(options: DbModuleOptions): DynamicModule {
    return {
      module: DbModule,
      providers: [
        {
          provide: 'OPTIONS',
          useValue: options,
        },
        DbService,
      ],
      exports: [DbService],
    };
  }
}
