import {gallery} from '../data/gallery'

const refs = {
    gallery: document.querySelector(".container__gallery"),
};
console.log(gallery)

function createCard() {
    const card = gallery.map(({ id, photo, photo2x, alt, title, description }) => {
        return `        
            <li class="card" key=${id}>                
                
                    <div class="face face1">
                        <div class="content">
                            <picture>
                                <source srcset="" type="image/webp" />
                                <source srcset="" type="image/jpeg" />
                                <img
                                    src=${photo} 
                                    alt=${alt} 
                                    style="object-fit: cover;"
                                    crossorigin="anonymous" 
                                    decoding="auto"
                                    class="x5yr21d xu96u03 x10l6tqk x13vifvy x87ps6o xh8yej3"
                                    width="250" 
                                    height="200" 
                                    loading="lazy"
                                    sizes="226.8046875px"
                                    / >
                            </picture>
                        </div>
                    </div>
                    <div class="face face2">
                        <div class="content">
                            <h3>${title}</h3>
                            <p>${description}</p>
                        </div>
                    </div>
                 
            </li>        
        `;
    }).join("")


    refs.gallery.insertAdjacentHTML("beforeend", card);  
}


createCard(gallery)
