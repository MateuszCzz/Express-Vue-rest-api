import axios from 'axios'

const url = 'http://localhost:3000/users/find/all';

class PostService {
    static getNotes() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data
                console.log(data)
                resolve(
                    data.map(post => {
                        
                        return {
                            ...post,
                            id: post.id,
                            message: post.message,
                        }
                        
                        
                    })
                    
                );
            } catch(err) {
                reject(err);
            } 
        })
    }

    static test(){
        return new Promise((resolve, reject) => {
            //method 1
            axios.get(url)
                .then(data => {
                    console.log(data)
                    resolve(data)
                })
                .catch(err => {
                    reject(err)
                })
            // method 2
            // try{
            //     const data = await axios.get(url)
            //     resolve(data)
            //     console.log(data)
            // }catch(err){
            //     reject(err)
            // }
        })
        
    }
}

// data.map(({ id }) => ({ id }))

export default PostService;