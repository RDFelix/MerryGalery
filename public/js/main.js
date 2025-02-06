for (let i = 2; i <= 5; i++) {
    document.getElementById('photos').innerHTML += `
        <article class="group m-5 overflow-hidden rounded-lg">
            <h5 class="z-50 absolute m-2 text-sm font-light italic opacity-0 hidden group-hover:block group-hover:opacity-100">Tomada por: <span class="font-bold">Felix Gabriel</span></h5>
            <div class="w-72 z-50 grid-cols-2 gap-2 absolute mt-[325px] p-[10px] backdrop-blur-2xl bg-slate-400 bg-opacity-50 transition-all opacity-0 hidden group-hover:grid group-hover:opacity-100">
                <div class="flex flex-col items-center transition-all hover:translate-y-[-5px]">
                    <svg class="w-[25px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000">
                        <title>Me gusta</title>
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z" stroke="#f72b69" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </g>
                    </svg>
                    <h6 class="text-xs underline">5</h6>
                </div>
                <div class="flex flex-col items-center transition-all hover:translate-y-[-5px]">
                    <svg class="w-[25px]" fill="#6699ff" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#6699ff">
                        <title>Descargar imagen</title>
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M0 16q0 2.912 1.824 5.088t4.576 2.752q0.032 0 0.032-0.032v-0.064t0.032-0.032q0.544-1.344 1.344-2.176t2.208-1.184v-2.336q0-2.496 1.728-4.256t4.256-1.76 4.256 1.76 1.76 4.256v2.336q1.376 0.384 2.176 1.216t1.344 2.144l0.096 0.288h0.384q2.464 0 4.224-1.76t1.76-4.224v-2.016q0-2.464-1.76-4.224t-4.224-1.76q-0.096 0-0.32 0.032 0.32-1.152 0.32-2.048 0-3.296-2.368-5.632t-5.632-2.368q-2.88 0-5.056 1.824t-2.784 4.544q-1.152-0.352-2.176-0.352-3.296 0-5.664 2.336t-2.336 5.664v1.984zM10.016 25.824q-0.096 0.928 0.576 1.6l4 4q0.576 0.576 1.408 0.576t1.408-0.576l4-4q0.672-0.672 0.608-1.6-0.064-0.32-0.16-0.576-0.224-0.576-0.736-0.896t-1.12-0.352h-1.984v-5.984q0-0.832-0.608-1.408t-1.408-0.608-1.408 0.608-0.576 1.408v5.984h-2.016q-0.608 0-1.12 0.352t-0.736 0.896q-0.096 0.288-0.128 0.576z"></path>
                        </g>
                    </svg>
                    <h6 class="text-xs underline">Descargar</h6>
                </div>
            </div>
            <img class="h-auto max-w-72 bg-slate-500 transition-all group-hover:rotate-2 group-hover:scale-[1.1]" src="./assets/img/${i}.jpg" alt="image description">
        </article>
    `;
}