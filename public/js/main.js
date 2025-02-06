for (let i = 2; i <= 5; i+=2) {
    document.getElementById('photos_2').innerHTML += `
        <article class="mb-4 w-full">
            <img class="rounded-lg hover:brightness-75 h-auto transition-all" src="./assets/img/${i}.jpg" alt="image description">
            <div class="flex justify-between mt-2 items-center">
                <h5 class="text-xs tracking-wider md:text-base"><span class="bg-pink-400 p-1 rounded-full shadow-lg">🌷</span> Felix Gabriel Ruiz</h5>
            </div>
        </article>
    `;
    document.getElementById('photos_1').innerHTML += `
        <article class="mb-4 w-full">
            <img class="rounded-lg hover:brightness-75 h-auto transition-all" src="./assets/img/${i+1}.jpg" alt="image description">
            <div class="flex justify-between mt-2 items-center">
                <h5 class="text-xs tracking-wider md:text-base"><span class="bg-pink-400 p-1 rounded-full shadow-lg">🌷</span> Felix Gabriel Ruiz</h5>
            </div>
        </article>
    `;
}