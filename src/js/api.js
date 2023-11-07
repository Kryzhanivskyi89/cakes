import axios from "axios";

export default class SearchImages {
  constructor() {
    this.queryPage = 1;
    this.searchQuery = '';    
  }
  async fetchImages() {
    // const BASE_URL = `https://pixabay.com/ru/${API_KEY}/media/`;
    
    const BASE_URL = "https://pixabay.com/api";
    
    const API_KEY = '33210301-3be20b33fb7f66869d8b0904e';
    // const url = `${BASE_URL}/?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&safesearch=true&orientation=horizontal&per_page=40&page=${this.queryPage}`
    
    const url = `${BASE_URL}/?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&safesearch=true&orientation=horizontal&per_page=40&page=${this.queryPage}`
    
    const response = await axios.get(url);
    this.incrementPage();
    return response.data;
  }
  resetPage() {
    this.queryPage = 1;
  }
  incrementPage() {
    this.queryPage += 1;
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}