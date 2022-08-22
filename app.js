// import functions and grab DOM elements
import { games } from './games-data.js';
const gamesEl = document.getElementById('games');
import { shows } from './anime-data.js';
const showsEl = document.getElementById('shows');
import { friends } from './friends-data.js';
const friendsEl = document.getElementById('friends');

import { renderFriends } from './render-friends.js';

// initialize global state

for (let game of games) {
    const p = document.createElement('p');
    p.textContent = game.name;
    
    gamesEl.append(p);
}

for (let anime of shows) {
    const p = document.createElement('p');
    p.textContent = anime;

    showsEl.append(p);
}

for (let friend of friends) {
    const friendEl = renderFriends(friend);
    

    friendsEl.append(friendEl);
  

}