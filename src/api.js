export async function loadImages(count = 4) {
    const response = await fetch(
        `https://picsum.photos/v2/list?page=${Math.floor(Math.random()*100)}&limit=${count}`
    );
    return response.json();
}