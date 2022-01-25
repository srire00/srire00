import  React from 'react';
class   Home    extends React.Component{
    constructor(){
        super();
        this.state={
            name: 'asdfghjk'
        }
    }
    handleUpdateState =()=>{
        this.setState({name:'erty'})
    }
    render(){
        return (
            <div>
                <h1>monster's rollodex</h1>
                <form> 
                    <input/>
                    <button>search</button>
                    <p>{this.state.name}</p>
                    <button onClick={this.handleUpdateState}>Change Name</button>
                </form>
                
            </div>
        )
    }
}

export  default Home