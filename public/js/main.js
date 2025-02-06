for (let i = 2; i <= 5; i+=2) {
    document.getElementById('photos_2').innerHTML += `
        <article class="overflow-hidden rounded-lg my-3">
            <img class="h-auto w-100 bg-slate-500 transition-all md:max-w-72 group-hover:brightness-50" src="./assets/img/${i}.jpg" alt="image description">
        </article>
    `;
    document.getElementById('photos_1').innerHTML += `
        <article class="overflow-hidden rounded-lg my-3">
            <img class="h-auto w-100 bg-slate-500 transition-all md:max-w-72 group-hover:brightness-50" src="./assets/img/${i+1}.jpg" alt="image description">
        </article>
    `;
}