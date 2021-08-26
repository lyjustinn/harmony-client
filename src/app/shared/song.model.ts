import { Album } from "./album.model";
import { Artist, Contributor } from "./user.model";

export interface SongTrack {
    name : string
    id : string
    artists : Artist[]
    album : Album
    duration_ms : number
}

export interface SongItem {
    track : SongTrack
    added_by : Contributor
}