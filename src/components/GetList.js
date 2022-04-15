
import React ,{Component} from "react"
import axios from "axios";

class GetList extends Component{
// constructoe rconst
constructor(props){
    super(props)
    this.state={
        list:[],
        errorMsg:[]
    }
}
componentDidMount(){
    axios.get("http://localhost:3000/liberary/api/v1/books/")
    .then((response)=>{
        console.log(response);
        this.setState({list:response.data});
    })
    .catch((error)=>{
        console.log(error);
        this.setState({errorMsg:"Geetting error"})
    })
}


    render(){
        const {list,errorMsg} = this.state
        return(
            <div>Get List
                {
                    list.length ?
                list.map(post=><div key = {post._id}>{post.auther}{post.title}{post.ISBN}</div>):null   
                }
                {
                    errorMsg.length ?
                    <div>errorMsg</div> : null
                }
            </div>
        )
    }
}

export default GetList