function Playlist() {
  this.songs = [];
}

Playlist.prototype.addSong = function ({ song }) {
  this.songs.push(song);
  return this.songs;
};

const playlist = new Playlist();
console.log(playlist.addSong({ song: "Teri meri kahani- XYZ" }));
