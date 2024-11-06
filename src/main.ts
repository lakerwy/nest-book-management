import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ transform: true })); // 全局安装ValidationPipe管道参数验证-使用 ValidationPipe需要安装所需的依赖包 class-validator 和 class-transformer：
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
