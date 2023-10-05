export default {
    getAll() {
        return fetch("http://localhost:5000/api/v1/panier/", {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
        }).then(res => res.json())
    },
    getId(id) {
        return fetch("http://localhost:5000/api/v1/panier/" + id, {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
        }).then(res => res.json())
    },
}
