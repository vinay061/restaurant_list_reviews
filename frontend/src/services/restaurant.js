import http from "../http-common"

class RestaurantDataService {
    getAll(page = 0) {
        //return http.get(`restaurants?page=${page}`);
        return http.get(`?page=${page}`);
    }

    get(id) {
        //return http.get(`/restaurants?id=${id}`);
        return http.get(`/id/${id}`);
    }

    //find(query, by = "name", page = 0)
    find(query, by, page = 0) {
        console.log(by);
    
        //return http.get(`restaurants?${by}=${query}&page=${page}`);
        return http.get(`?${by}=${query}&page=${page}`);
    }

    createReview(data) {
        //return http.post("/review-new", data);
        return http.post("/review", data);
    }

    updateReview(data) {
        //return http.put("/review-edit", data);
        return http.put("/review", data);
    }

    deleteReview(id) {
        //return http.delete(`/review-delete?id=${id}`, {data:{user_id: userId}});
        return http.delete(`/review?id=${id}`);
    }

    getCuisines(id) {
        return http.get(`/cuisines`);
    }
}

export default new RestaurantDataService();