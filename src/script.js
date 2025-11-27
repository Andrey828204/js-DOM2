const gallery = document.getElementById('gallery');

const btnLoadMore = document.getElementById('loadMore');
const btnClear = document.getElementById('clear');
const btnRemoveLast = document.getElementById('removeLast');
const btnReverse = document.getElementById('reverse');

let usedIds = new Set(); 


async function loadImages(count = 4) {
    const response = await fetch(`https://picsum.photos/v2/list?page=${Math.floor(Math.random()*100)}&limit=${count}`);
    const photos = await response.json();

    photos.forEach(photo => {
        if (!usedIds.has(photo.id)) {
            usedIds.add(photo.id);
            addImage(photo.download_url);
        }
    });
}

function addImage(url) {
    const img = document.createElement('img');
    img.src = url;
    gallery.appendChild(img);
}

btnLoadMore.addEventListener('click', () => {
    loadImages();
});

btnClear.addEventListener('click', () => {
    gallery.innerHTML = '';
    usedIds.clear();
});

btnRemoveLast.addEventListener('click', () => {
    if (gallery.lastChild) {
        gallery.removeChild(gallery.lastChild);
    }
});

btnReverse.addEventListener('click', () => {
    const items = Array.from(gallery.children).reverse();
    gallery.innerHTML = '';
    items.forEach(el => gallery.appendChild(el));
});

loadImages();
