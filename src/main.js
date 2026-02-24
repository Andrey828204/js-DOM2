import { loadImages } from './api.js';
import { addImages, clearGallery, removeLastImage, reverseGallery } from './gallery.js';

const btnLoadMore = document.getElementById('loadMore');
const btnClear = document.getElementById('clear');
const btnRemoveLast = document.getElementById('removeLast');
const btnReverse = document.getElementById('reverse');

btnLoadMore.addEventListener('click', async () => {
    const photos = await loadImages();
    addImages(photos);
});

btnClear.addEventListener('click', clearGallery);
btnRemoveLast.addEventListener('click', removeLastImage);
btnReverse.addEventListener('click', reverseGallery);


(async () => {
    const photos = await loadImages();
    addImages(photos);
})();