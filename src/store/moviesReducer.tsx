const initialState = {
  moviesCategory: 'nowPlayingMovies',
  nowPlayingMovies: [],
  mostPopularMovies: [],
  topRatedMovies: [],
  upcomingMovies: [],
  moviesByGenres: [],
  searchResults: []
}

const reducer = (state = initialState, action: any) => {
  switch(action.type) {
    case 'NowPlaying':
      return state;
  }
  return state;
};

export default reducer;
