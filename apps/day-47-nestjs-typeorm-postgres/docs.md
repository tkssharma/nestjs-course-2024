## **NestJS & TypeORM: Basic Introduction**

### **What is NestJS?**
NestJS is a progressive Node.js framework for building efficient, scalable, and maintainable server-side applications. It is built with TypeScript and heavily inspired by Angular, utilizing decorators and dependency injection.

### **What is TypeORM?**
TypeORM is an Object-Relational Mapping (ORM) library for TypeScript and JavaScript. It allows developers to work with databases using object-oriented programming principles instead of writing raw SQL queries.

---

## **Setting Up NestJS with TypeORM**
### **1. Install NestJS CLI (if not installed)**
```bash
npm install -g @nestjs/cli
```

### **2. Create a New NestJS Project**
```bash
nest new my-nest-project
cd my-nest-project
```

### **3. Install TypeORM and Database Driver**
For PostgreSQL:
```bash
npm install @nestjs/typeorm typeorm pg
```
For MySQL:
```bash
npm install @nestjs/typeorm typeorm mysql2
```
For SQLite:
```bash
npm install @nestjs/typeorm typeorm sqlite3
```

### **4. Configure TypeORM in `app.module.ts`**
Modify `src/app.module.ts` to include TypeORM settings:
```typescript
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // Change this to 'mysql' or 'sqlite' if needed
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'mydb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Auto sync DB schema (disable in production)
    }),
  ],
})
export class AppModule {}
```

---

## **Creating an Entity (Model)**
Entities define how database tables should look.

### **1. Create a `User` Entity**
Inside `src/user/user.entity.ts`:
```typescript
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
}
```

### **2. Register the Entity in `app.module.ts`**
```typescript
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'mydb',
      entities: [User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User]), // Register User entity
  ],
})
export class AppModule {}
```

---

## **Creating a Service & Repository**
The service will handle database operations using TypeORM's repository.

### **1. Generate a User Module, Service, and Controller**
```bash
nest generate module user
nest generate service user
nest generate controller user
```

### **2. Implement User Service**
Modify `src/user/user.service.ts`:
```typescript
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  create(userData: Partial<User>) {
    const user = this.userRepository.create(userData);
    return this.userRepository.save(user);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  update(id: number, userData: Partial<User>) {
    return this.userRepository.update(id, userData);
  }

  delete(id: number) {
    return this.userRepository.delete(id);
  }
}
```

---

## **Creating API Endpoints**
Modify `src/user/user.controller.ts`:
```typescript
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() userData: Partial<User>) {
    return this.userService.create(userData);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() userData: Partial<User>) {
    return this.userService.update(id, userData);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.userService.delete(id);
  }
}
```

---

## **Testing the API**
Start the server:
```bash
npm run start
```

### **Use Postman or Curl to Test:**
- **Create User:**  
  ```http
  POST /users
  Content-Type: application/json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "securepass"
  }
  ```
- **Get All Users:**  
  ```http
  GET /users
  ```
- **Get User by ID:**  
  ```http
  GET /users/1
  ```
- **Update User:**  
  ```http
  PUT /users/1
  Content-Type: application/json
  {
    "name": "Updated Name"
  }
  ```
- **Delete User:**  
  ```http
  DELETE /users/1
  ```

---

## **Conclusion**
This was a basic introduction to using **NestJS with TypeORM** for database interactions. You learned:
✅ Setting up NestJS and TypeORM  
✅ Defining an entity (User)  
✅ Using a service to interact with the database  
✅ Creating API endpoints with a controller  

Want to go deeper? Learn about **migrations**, **relations (OneToMany, ManyToOne)**, and **custom repositories** next! 🚀