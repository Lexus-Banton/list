export function renderFriends(friend) {
    const friendEl = document.createElement('div');
    const nameEl = document.createElement('h3');
    const occupationEl = document.createElement('p');

    friendEl.classList.add('friend');
    nameEl.textContent = friend.name;
    occupationEl.textContent = `works as a ${friend.occupation} that is hard work`;

    friendEl.append(nameEl, occupationEl);

    return friendEl;
}