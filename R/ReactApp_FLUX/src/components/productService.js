import axios from 'axios';

let _baseURL = `http://localhost:3000/inventoryData`;

class ProductService {

    static getAllProducts(cbFn) {
        axios.get(`${_baseURL}`)
            .then((resp)=> {
                return cbFn(resp.data);
            })
            .catch((err)=> {
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
            .then(()=> {
                console.log(`CALL TO GET ALL PRODUCTS COMPLETED`);
            });
    }

    static getProduct(cbFn, reqDATA) {
        axios.get(`${_baseURL}/${reqDATA}`)
            .then((resp)=> {
                return cbFn(resp.data);
            })
            .catch((err)=> {
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
            .then(()=> {
                console.log(`CALL TO GET PRODUCT COMPLETED`);
            });
    }

    static addProduct(cbFn, reqDATA) {
        axios.post(`${_baseURL}`, reqDATA)
            .then((resp)=> {
                return cbFn(resp.data);
            })
            .catch((err)=> {
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
            .then(()=> {
                console.log(`CALL TO ADD PRODUCT COMPLETED`);
            });
    }

    static deleteProduct(cbFn, reqDATA) {
        axios.delete(`${_baseURL}/${reqDATA}`)
            .then((resp)=> {
                return cbFn(resp.data);
            })
            .catch((err)=> {
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
            .then(()=> {
                console.log(`CALL TO DELETE PRODUCT COMPLETED`);
            });
    }
}
export default ProductService;