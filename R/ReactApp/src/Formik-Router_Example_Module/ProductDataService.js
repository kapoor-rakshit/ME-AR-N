import axios from 'axios';

class ProductDataService {
    /* SERVER DATA */
    static getAllProducts(cbFn) {
        axios.get(`http://localhost:3000/inventoryData`)
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
                // ALWAYS executed , similar to finally in try-catch-finally block
                console.log(`CALL TO API COMPLETED`);
            });
    }

    static getProduct(cbFn, reqDATA) {
        axios.get(`http://localhost:3000/inventoryData/${reqDATA}`)
            .then((respDATA) => {
                return cbFn(respDATA.data);
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

    static addProduct(cbFn, reqDATA) {
        axios.post(`http://localhost:3000/inventoryData`, reqDATA)
            .then((respDATA) => {
                return cbFn(respDATA.data);
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

    static saveProduct(cbFn, reqDATA) {
        axios.put(`http://localhost:3000/inventoryData/${reqDATA.id}`, reqDATA)
            .then((respDATA) => {
                return cbFn(respDATA.data);
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

    static deleteProduct(cbFn, reqDATA) {
        axios.delete(`http://localhost:3000/inventoryData/${reqDATA}`)
            .then((respDATA) => {
                return cbFn(respDATA.data);
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
export default ProductDataService;