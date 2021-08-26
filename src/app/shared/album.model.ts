import { Image } from "./image.model";

export interface Album {
    name : string
    id : string
    images : Image[]
}