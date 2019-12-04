import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RenderModule } from 'nest-next';
import Next from 'next';
import "reflect-metadata"
async function bootstrap() {
  const dev = process.env.NODE_ENV !== 'production';
  const app = Next({ dev });
  const server = await NestFactory.create(AppModule);
  await app.prepare();

  const renderer = server.get(RenderModule);
  renderer.register(server, app);

  await server.listen(3000);
}
bootstrap();
