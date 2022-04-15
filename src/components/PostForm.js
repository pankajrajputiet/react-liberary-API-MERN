import React,{Component} from 'react';
import axios from 'axios'

class PostList extends Component {
    constructor(props){
        super(props)
        this.state = {
            auther:'',
            title:'',
            ISBN:''
        }
    }
 
    changeHandler = (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    submitHandler = (e)=>{
        e.preventDefault()
        console.log(this.state)
        axios.post("http://localhost:3000/liberary/api/v1/books/",this.state)
        .then((response)=>{
            console.log(response)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    render() {
        const {auther,title,ISBN} = this.state;
        return(
            <div>
                <form onSubmit={this.submitHandler}> 
                    <div>
                        <input type = "text" 
                        name="auther" 
                        value={auther}
                        onChange = {this.changeHandler}
                        />
                    </div>
                    <div>
                        <input type = "text" name="title" value={title} onChange = {this.changeHandler}/>
                    </div>
                    <div>
                        <input type = "text" name="ISBN" value={ISBN} onChange = {this.changeHandler}/>
                    </div>
                    <button type = "sumbit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostList