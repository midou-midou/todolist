import React, { Component, Fragment } from 'react';
import ListItem from './ListItem.jsx'
import TDTitle from './TDTitle.jsx'
import { Button, Input, message } from 'antd';
import store from './store'
import { handlemessage } from './store/actionCreate'
import propTypes from 'prop-types' 

import 'antd/dist/antd.css'
import './static/list.css'

class ToDoList extends Component{
	constructor(props){
		super(props);
		this.state={
			inputContent: "",
			list: store.getState().list
		}
		this.changeinput=this.changeinput.bind(this);
		this.updatestate=this.updatestate.bind(this);
		this.submit=this.submit.bind(this);
		store.subscribe(this.updatestate);
	}

	componentDidUpdate(){
		if(!window.localStorage){
            alert("浏览器不支持localstorage");
        }else{
			window.localStorage.setItem("todolist", JSON.stringify(this.state.list));
        }
	}

	render(){
		return (
			<Fragment>
				<div>
					<TDTitle />
				</div>
				<div id="inputBackground" className="inputBackgroundStyle">
					<Input  size="middle" maxLength={100} onChange={this.changeinput} value={this.state.inputContent} onPressEnter={this.submit}/>
					<Button id="submitBtn" className="submitBtnStyle" type="primary" onClick={this.submit}>提交</Button>
				</div>
				<div>
					<h3><span id="listSpan">WORK LIST</span></h3>
					<ul>
						{this.state.list.map((item, index) => {
								return <div key={index}><ListItem data={item}></ListItem></div>
						})}
					</ul>
				</div>
			</Fragment>
		);
	}

	updatestate(){
		this.setState({list: store.getState().list})
	}

	changeinput(event){
		this.setState({
			inputContent: event.target.value
		})
	}

	submit(){ 
		if(this.state.inputContent.length === 0){
			message.error("填写点你想做的事情吧");
		}else{
			const action = handlemessage({id: this.state.list.length, content: this.state.inputContent, isFinished: false});
			store.dispatch(action);
			this.setState({
				inputContent: ""
			})
		}
	}
	
}

ToDoList.protoType = {
	inputContent: propTypes.string,
	list: propTypes.array
}

export default ToDoList;
