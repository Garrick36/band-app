import { Song } from './song';

export class Schedule {
    date: Date;
    songs: Song[];

    constructor(date: Date, songs: Song[]) {
        this.date = date;
        this.songs = songs;
    }
}