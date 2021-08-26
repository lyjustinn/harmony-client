import { SongItem } from "src/app/shared/song.model";

export interface PlaylistTrack {
    total : number
    items : SongItem[] | null
}