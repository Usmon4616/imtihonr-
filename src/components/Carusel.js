
import React from 'react';


const Carusel = () => {
    return (
        <>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        {/* <img src="..." class="d-block w-100" alt="..."> */}
                       <img class="d-block w-100 h-50" src="https://www.myshopsy.com/wp-content/uploads/2021/10/stylish_mens_model_wallpaper.jpg" alt="" />
                    </div>
                    <div class="carousel-item">
                        {/* <img src="..." class="d-block w-100" alt="..."> */}
                        <img class="d-block w-100 h-50" src="https://tvcenter.ru/wp-content/uploads/2016/07/Егор-Крид1.jpeg" alt="" />
                    </div>
                    <div class="carousel-item">
                        {/* <img src="..." class="d-block w-100" alt="..."> */}
                        <img class="d-block w-100 h-50" src="https://avatars.mds.yandex.net/i?id=3b40f5b3bd37fe0f0c4012a6a7f1264a-5734795-images-thumbs&n=13" alt="" />
                        
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

export default Carusel;
