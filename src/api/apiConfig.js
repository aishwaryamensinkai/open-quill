const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "your-api-key", // Replace with your actual API key
  // apiKey: "b7f92695a2205e8be97222fad88e8773",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
