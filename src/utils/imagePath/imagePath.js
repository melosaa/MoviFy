const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p';

export const getTmdbImage = (path, size = 'w780') => {
  if (!path) return null;
  return { uri: `${TMDB_IMAGE_BASE}/${size}${path}` };
};
