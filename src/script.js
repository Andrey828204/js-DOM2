const gallery = document.getElementById('gallery');

const btnLoadMore = document.getElementById('loadMore');
const btnClear = document.getElementById('clear');
const btnRemoveLast = document.getElementById('removeLast');
const btnReverse = document.getElementById('reverse');

let usedIds = new Set(); // щоб не повторювались картинки

// ---- Функція отримання 4 унікальних картинок ----
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

// ---- Додавання картинки в галерею ----
function addImage(url) {
    const img = document.createElement('img');
    img.src = url;
    gallery.appendChild(img);
}

// ---- Кнопки ----

// 1️⃣ Завантажити ще 4
btnLoadMore.addEventListener('click', () => {
    loadImages();
});

// 2️⃣ Очистити галерею
btnClear.addEventListener('click', () => {
    gallery.innerHTML = '';
    usedIds.clear();
});

// 3️⃣ Видалити останню
btnRemoveLast.addEventListener('click', () => {
    if (gallery.lastChild) {
        gallery.removeChild(gallery.lastChild);
    }
});

// 4️⃣ Перевернути галерею
btnReverse.addEventListener('click', () => {
    const items = Array.from(gallery.children).reverse();
    gallery.innerHTML = '';
    items.forEach(el => gallery.appendChild(el));
});

// ---- Завантажити 4 картинки при старті сторінки ----
loadImages();
