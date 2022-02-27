import { User as _User } from './user';
import { UserRelations as _UserRelations } from './user_relations';
import { Post as _Post } from './post';
import { PostRelations as _PostRelations } from './post_relations';

export namespace PrismaModel {
  export class User extends _User {}
  export class UserRelations extends _UserRelations {}
  export class Post extends _Post {}
  export class PostRelations extends _PostRelations {}

  export const extraModels = [User, UserRelations, Post, PostRelations];
}
