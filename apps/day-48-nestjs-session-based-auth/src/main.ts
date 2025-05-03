import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import session from 'express-session'; // ✅ Default import
import passport from 'passport';
import { RedisService } from './redis/redis.service';
import RedisStore from 'connect-redis'; // new code

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const redisService = app.get(RedisService);
  const redisClient = redisService.getClient();

  const store = new RedisStore({
    client: redisClient,
    prefix: 'session:',
  });

  // Set up express-session
  app.use(
    session({
      store,
      secret: process.env.SESSION_SECRET || 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: false, // false when not using HTTPS (true only for production)
        sameSite: 'lax', // Lax option helps with cross-site requests
        maxAge: 1000 * 60 * 60, // Set the cookie to expire in 1 hour
      },
    }),
  );

  // Initialize passport
  app.use(passport.initialize());
  app.use(passport.session());

  // Enable CORS to allow cross-origin requests (from frontend, etc.)
  app.enableCors({
    origin: 'http://localhost:3000', // Your frontend URL
    credentials: true, // Allow cookies to be sent across origins
  });

  await app.listen(process.env.PORT || 3000);
}

bootstrap();
