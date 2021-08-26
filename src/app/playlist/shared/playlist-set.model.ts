import { Playlist } from "./playlist.model";

export interface PlaylistSet {
    items : Playlist[]
    total : number
    uid : string
}