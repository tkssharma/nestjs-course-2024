import { Request } from "express"

export interface UserMetadata {
  permissions: string[],
  roles: string[],
  email: string
}

export interface RequestModel extends Request {
  user: UserMetadata
}