export function renderAnime(show) {
    const pTag = document.createElement('p');
    pTag.textContent = (show);
    pTag.classList.add('anime');

    return pTag;
}
