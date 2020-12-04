export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

export const getImageUrl = (url) => {
  if (process.env.NEXT_PUBLIC_API_URL) {
    return url;
  } else {
    return `http://localhost:1337${url}`;
  }
};
