import http from ".";

const categoryApi = {
  getCategories() {
    return http.get("categories");
  },
};

export default categoryApi;
