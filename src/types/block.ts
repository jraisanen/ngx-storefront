import { Image } from '../models/image.model';

export interface Block {
  image: Image;
  key: string;
  name: string;
}
