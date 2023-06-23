import axios from 'axios'

const url = 'http://localhost:3000/tasks/find/all';

class TaskService {
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

    static createTask(task) {
        // const { title, description, priority } = task;
        // console.log('Title:', title);
        // console.log('Description:', description);
        // console.log('Priority:', priority);
        axios.post('http://localhost:3000/tasks/create', {
            title: task.title,
            description: task.description
        })
        .then(res => {
            console.log(res)
        })
        .catch(req => {
            console.log(req)
        })
    }

    static deleteTask(task){
        return new Promise((resolve, reject) => {
            console.log("przed usuniecem")
            axios.delete('http://localhost:3000/tasks/delete/' + task._id)
                .then(res => {
                    console.log("po usunieciu")
                    resolve()
                })
                .catch(req => {
                    console.log(req)
                })
        })
        
    }

    static getOne(id){
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:3000/tasks/' + id)
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err)
            })
        })
    }

    static updateTask(task){
        console.log(task.description)
        return new Promise((resolve, reject) => {
            axios.patch('http://localhost:3000/tasks/edit/' + task.id, {
                title: task.title,
                description: task.description
            })
            .then(res => {
                console.log("then:" + res)
                resolve()
            })
            .catch(err => {
                console.log("err: " + err)
                reject()
            })
        })
    }

    static test(){
        return new Promise((resolve, reject) => {
            //method 1
            axios.get(url)
                .then(data => {
                    console.log(data.data)
                    resolve(data.data)
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

export default TaskService;