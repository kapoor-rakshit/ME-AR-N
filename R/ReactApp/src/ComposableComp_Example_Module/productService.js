import axios from 'axios';

class ProductService {
    /* LOCAL DATA */
    static getAllProducts_LOCAL() {
        return (
            { 
                "productsDATA": [
                {
                    "id": 2,
                    "name": "iPhone",
                    "quantity": 3,
                    "price": 110000
                },
                {
                    "id": 3,
                    "name": "iPad",
                    "quantity": 2,
                    "price": 30000
                }
                ]
            }
        );
    }

    /* SERVER DATA */
    static getAllProducts(cbFn) {
        axios.get("http://localhost:3000/productsData")
            .then((res) => {
                return cbFn(res.data);
            })
            .catch((err) => {
                if (err.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                    console.log(err.config);
                    throw err;
                  } else if (err.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(err.request);
                    console.log(err.config);
                    throw err;
                  } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', err.message);
                    console.log(err.config);
                    throw err;
                  }
            })
            .then(() => {
                console.log(`CALL TO API COMPLETED`);
            });
    }
}
export default ProductService;