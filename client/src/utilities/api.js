import axios from "axios";

axios({
  method: "GET",
  url: "http://www.nhl.com",
  responseType: "stream"
}).then(function(response) {
  
});

export const getArticles = () => {
  return axios.get("api/articles", data => {
    return data;
  });
};


