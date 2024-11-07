import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalPipes(new ValidationPipe({ transform: true })); // 全局安装ValidationPipe管道参数验证-使用 ValidationPipe需要安装所需的依赖包 class-validator 和 class-transformer：

  app.enableCors(); // 允许跨域

  app.useStaticAssets(join(__dirname, '../uploads'), { prefix: '/uploads' }); // 将uploads文件夹下设为静态资源

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
