import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from "@nestjs/common";
import { Response, NextFunction } from "express";
import { RequestModel } from "../interfaces/user";
// import { UserConflictException } from "../exceptions/user.conflict.exception";

@Injectable()
export class AuthorizationMiddleware implements NestMiddleware {
  constructor() { }
  use(req: RequestModel, res: Response, next: NextFunction) {
    // access request and
    // CASE 2
    const { authorization } = req.headers;
    if (!authorization) {
      throw new UnauthorizedException();
    }
    // Beaer <JWT TOKEN>
    if (!authorization.startsWith('Bearer')) {
      throw new UnauthorizedException()
    }
    try {
      // check validity of token 
      // get sesion data 
      req.user = {
        permissions: [],
        roles: [],
        email: "ok@gmail.com"
      };
      next()
    } catch (err) {

      throw new UnauthorizedException()
    }
  }
}
