import { Image } from "src/app/shared/image.model";
import { Contributor } from "src/app/user/shared/user.model";
import { PlaylistTrack } from "./playlist-track.model";

export interface Playlist {
    description : string
    href : string
    id : string
    name : string
    owner : Contributor
    images : Image[] 
    tracks : PlaylistTrack
}