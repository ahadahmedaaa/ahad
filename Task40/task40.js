function make_album(artistname, albumtitle, numTracks) {
    var album = { artist: artistname, title: albumtitle };
    if (numTracks !== undefined) {
        album.tracks = numTracks;
    }
    return album;
}
console.log(make_album("A.R. Rahman", "Slumdog Millionaire (Soundtrack from the Motion Picture)", 12));
console.log(make_album("Arijit Singh", "Tum Hi Ho - The Love Anthem"));
console.log(make_album("Lata Mangeshkar", "Lata - A Musical Journey", 10));
