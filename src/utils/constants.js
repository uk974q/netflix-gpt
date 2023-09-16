export const API_MOVIES_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOGM2YTBiODg4MmI1Mjc2OWE2MzRhMjVjZDcyMGIzYyIsInN1YiI6IjY1MDQ4ZWRjYTIyZDNlMDEzMDYwOTAwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GHD179XRUrADfmEx57ULD0CJsizrxbEf_pi45LqaKXw'
    }
  };

  export const NOW_PLAYING_MOVIES = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
  export const LATEST_MOVIE = "https://api.themoviedb.org/3/movie/latest"
  export const TRENDING_MOVIE = "https://api.themoviedb.org/3/trending/movie/day?language=en-US"
  export const VIDEO_PREFIX = "https://api.themoviedb.org/3/movie/"
  export const VIDEO_SUFFIX = "/videos?language=en-US'"
  export const YOUTUBE_LINK = "https://www.youtube.com/embed/"
  export const YOUTUBE_LINK_SUFFIX = "?autoplay=1&mute=1"
  export const HERO_TYPE = "Trailer"
  export const IMAGE_PATH = "https://image.tmdb.org/t/p/w185/"
