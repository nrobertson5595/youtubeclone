import axios from "axios";

const KEY = "AIzaSyDKZu2JxfKgr4R3oVfwq49k7Vc9rB1Fntk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 10,
    key: KEY,
  },
});
