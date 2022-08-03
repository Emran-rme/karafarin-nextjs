import config from "./config.json";
import http from "./httpService";

export const initMain = (take = "all") =>  http.get(`${config.karafarinApi}/?take=${take}`);

export const getPosts = (postId) => http.get(`${config.karafarinApi}/?category-id=${postId}`)

export const commentForPage = (id, pageNum) =>  http.get(`${config.karafarinApi}/comments/${id}?page=${pageNum}`);


export const addNewComment = (data) =>  http.post(`${config.karafarinApi}/comments`, data);


export const initScoreForPage = (pageId) =>  http.get(`${config.karafarinApi}/score/${pageId}`);


export const newScoreForPage = (data, pageId) =>  http.post(`${config.karafarinApi}/score/${pageId}`, data);


export const dynamicallyCatURL = (slug) =>  http.get(
    `${config.karafarinApi}/dynamically-cat/${encodeURIComponent(slug)}`
  );


export const dynamicallyPageURL = (catSlug, pageId, pageSlug) =>  http.get(
    `${config.karafarinApi}/dynamically-page/${encodeURIComponent(
      catSlug
    )}/${pageId}/${encodeURIComponent(pageSlug)}`
  );


export const popularPage = (catSlug, take) =>  http.get(
    `${config.karafarinApi}/popular/${encodeURIComponent(catSlug)}?take=${take}`
  );

