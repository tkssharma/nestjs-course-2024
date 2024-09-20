import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from "@nestjs/common";
import { Response, NextFunction } from "express";
import { RequestModel } from "../interfaces/user";
import { UserConflictException } from "../exceptions/user.conflict.exception";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor() {}
  use(req: RequestModel, res: Response, next: NextFunction) {
    // access request and
    // CASE 2
    const { authorization } = req.headers;
    if (!authorization) {
      throw new UnauthorizedException();
    }
    // we will add this service
    // const { role, email, permissions } = this.authService.authenticateUser(authorization);
    req.user = {
      roles: ["admin"],
      email: "admin@ok.com",
      permissions: ["editor"],
    };
    next();
  }
}
