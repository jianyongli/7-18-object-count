import React from 'react';

export let LoadAsyncCom = (loadAble,Loading)=>{
    return class LoadAble extends React.Component{
        constructor(props){
            super(props);
            this.state={
                Load:Loading
            }
        }
        render(){
            let {Load} = this.state;
            return <Load/>
        }
        componentDidMount(){
            loadAble().then(com=>{
                this.setState({Load:com.default})
            })
        }
    }
}

export function Loading(){
    return <div>
        loading
    </div>
}