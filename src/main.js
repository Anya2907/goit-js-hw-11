import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { renderImages } from './js/render-functions';
import { getImage } from './js/pixabay-api';

const formEl = document.querySelector('.js-search');
const list = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

loader.style.display = 'none';

formEl.addEventListener('submit', e => {
  e.preventDefault();
  const value = e.target.elements.search.value; 
  loader.style.display = '';

  getImage(value).then(image => {
    loader.style.display = 'none';
        if (!value.trim()) {
          list.innerHTML = '';
          iziToast.error({
            title: 'Error',
            message: 'Please enter a value in the search field!',
            position: 'topRight',
        });
            return;
        }
        if (image.hits.length === 0) {
            iziToast.error({
            title: 'Error',
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
        });
        }
        
      list.innerHTML = renderImages(image);

        const refreshPage = new SimpleLightbox('.gallery a', {
        captions: true,
        captionsData: 'alt',
        captionDelay: 250,
        });
      refreshPage.refresh();
    }).catch((err) => {
      loader.style.display = 'none';
      console.log(err);
    })
  
    formEl.reset();    
})



