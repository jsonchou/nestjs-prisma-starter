
import {Post} from './post.entity'


export class User {
  id: number ;
email: string ;
name: string  | null;
posts?: Post[] ;
}
