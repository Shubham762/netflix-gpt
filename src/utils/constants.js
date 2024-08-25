export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const PHOTOURL =
  "https://avatars.githubusercontent.com/u/44369765?s=400&u=bfe3d6129dd3467d8752f97c562e3c738a6b7a87&v=4";
export const PageImage =
  "https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer "+process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_CDN = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", language_name: "English" },
  { identifier: "hindi", language_name: "hindi" },
  { identifier: "spanish", language_name: "spanish" },
];

//export const OPEN_AI_GPT_KEY="nN8SJUNNcF20hcsnaCTaWs27xau-YA"

export const OPEN_AI_GPT_KEY=process.env.REACT_APP_OPEN_AI_GPT_KEY;
