import { Image } from "src/app/shared/image.model";

export interface Contributor {
    id : string
    href : string
    uri : string
    display_name : string
}

export interface Artist {
    id : string
    uri : string
    name : string
}

export interface CurrentUser {
    display_name : string
    id : string
    images : Image[]
}