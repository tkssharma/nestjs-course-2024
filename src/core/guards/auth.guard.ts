import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";


@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {

    const request = context.switchToHttp().getRequest();
    // i have request now 
    // check user role set by middleware here 
    const roles = request.user.roles;
    console.log("assigned role" + roles.join(","));
    if (roles.includes("admin")) {
      return true
    }
    return false
  }
}