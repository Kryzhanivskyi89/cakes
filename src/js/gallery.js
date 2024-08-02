import {gallery} from '../data/gallery'

const refs = {
    gallery: document.querySelector(".container__gallery"),
};
console.log(gallery)

function createCard() {
    const card = gallery.map(({ id, deskPhoto, deskPhoto2x, tabPhoto, tabPhoto2x, mobPhoto, mobPhoto2x, alt, title, description }) => {
        return `        
            <li class="card" key=${id}>                
                
                    <div class="face face1">
                        <div class="content">
                            <picture>
                                <source srcset="
                                    ${deskPhoto} 1x, 
                                    ${deskPhoto2x} 2x"
                                    media="(min-width:1200px)"/>
                                <source srcset="
                                    ${tabPhoto} 1x, 
                                    ${tabPhoto2x} 2x" 
                                    media="(min-width:768px)"/>
                                <source srcset="
                                    ${mobPhoto} 1x, 
                                    ${mobPhoto2x} 2x" 
                                    media="(max-width:767px)"/>
                                <img
                                    src=${deskPhoto} 
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
