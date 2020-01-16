<<<<<<< HEAD
{

album.songs.forEach( ( song, index) => {
song.element = $(`
<tr>
	<td>
	 <button>
=======
 {
   album.songs.forEach( (song, index) => {
     song.element = $(`
       <tr>
       
       <td>
          <button>
>>>>>>> 3ab3d810195adada201f9bd4126ba61f773f30d1
            <span class="song-number">${index + 1}</span>
            <span class="ion-play"></span>
            <span class="ion-pause"></span>
          </button>
<<<<<<< HEAD
</td>
	<td>${song.title}</td>
    <td>${song.duration}</td>
	</tr>
`);
	song.element.on('click', event => {
		player.playPause(song);
	});

	
	$ ('#song-list').append(song.element);
});	
}
=======
        </td>
         <td>${song.title}</td>
         <td>${song.duration}</td>
        </tr>
     `);

     song.element.on('click', event => {
       player.playPause(song);
     });

     $('#song-list').append(song.element);    
   });
 }
>>>>>>> 3ab3d810195adada201f9bd4126ba61f773f30d1
