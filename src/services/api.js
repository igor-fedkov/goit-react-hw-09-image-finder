import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '19237838-f4b2b6be3555293fd9d73593e';
const PER_PAGE = 12;

class apiImages {
  constructor () {
    this.pageNumber = 1;
    this.searchQuery = '';
  }

  getImages = () => {
    const fullURL = `${BASE_URL}?q=${this.searchQuery}&page=${this.pageNumber}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`;
    this.pageNumber++;
    return axios(fullURL);
  }

  getPageNumber = () => {
    return this.pageNumber;
  }

  setQuery = (newSearchQuery) => {
    this.searchQuery = newSearchQuery;
    this.pageNumber = 1;
  }
}

export default apiImages;
