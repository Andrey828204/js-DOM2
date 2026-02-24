const gallery = document.getElementById('gallery');

let usedIds = new Set();

export function addImages(photos) {
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

export function clearGallery() {
    gallery.innerHTML = '';
    usedIds.clear();
}

export function removeLastImage() {
    if (gallery.lastChild) {
        gallery.removeChild(gallery.lastChild);
    }
}

export function reverseGallery() {
    const items = Array.from(gallery.children).reverse();
    gallery.innerHTML = '';
    items.forEach(el => gallery.appendChild(el));
}