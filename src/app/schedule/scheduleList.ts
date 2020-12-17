import { Schedule } from '../models/schedule';
import { Song } from '../models/song';

export const SCHEDULE_LIST: Schedule[] = [
    new Schedule(
        new Date(2020, 11, 23),
        [
            new Song('Fake Plastic Trees', 'Radiohead', '<iframe src="https://open.spotify.com/embed/track/73CKjW3vsUXRpy3NnX4H7F" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'),
            new Song('Mr. Brightside', 'The Killers', '<iframe src="https://open.spotify.com/embed/track/7oK9VyNzrYvRFo7nQEYkWN" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'),
            new Song('Sultans of Swing', 'Dire Straights', '<iframe src="https://open.spotify.com/embed/track/6cr6UDpkjEaMQ80OjWqEBQ" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>')
        ]
    )
]