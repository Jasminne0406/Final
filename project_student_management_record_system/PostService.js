import axios from 'axios';
const url = 'http://localhost:3000/';

class PostService{
    //Get Posts
    static getPosts(){
        return new Promise(async (resolve, reject)=>{
            try {
                const res = await axios.get(url);
                const data = res.data ;
                resolve(
                    data.map(post => ({
                        ...post,
                    }))
                );
            }catch(err){
                reject(err)
            }
        })
    }
    static insertPost(text){
        return axios.post(url,{text});
    }
}
export default PostService;