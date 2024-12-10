// utils.js
export const normalizeCinema = (cinema) => {
    const normalizedCinema = {};
    Object.keys(cinema).forEach((key) => {
        const trimmedKey = key.trim();
        normalizedCinema[trimmedKey] = cinema[key];
    });
    return normalizedCinema;
};
    