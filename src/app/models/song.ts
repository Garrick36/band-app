import { SafeHtml } from '@angular/platform-browser';

export class Song {
    title: string;
    artist: string;
    spotifyUrl: string | SafeHtml;

    constructor(
        title: string,
        artist: string,
        spotifyUrl: string
    ) {
        this.title = title;
        this.artist = artist;
        this.spotifyUrl = spotifyUrl;
    }
}