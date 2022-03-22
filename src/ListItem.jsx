import React, { Component, Fragment } from 'react'
import { message } from 'antd';
import { deleteitem, edititem, finishwork } from './store/actionCreate'
import store from './store'
import propTypes from 'prop-types' 
import 'antd/dist/antd.css'
import './static/listitem.css'
import './static/iconfont/iconfont.js'
import { GlobalStyled } from './static/iconfont/iconfont.js'

class ListItem extends Component{
    constructor(props){
        super(props);
        this.state={
            changeValue: "",
            isFinished: false
        }
        this.changeinput=this.changeinput.bind(this);
        this.deleteItem=this.deleteItem.bind(this);
        this.editItem=this.editItem.bind(this);
        this.blurFocus=this.blurFocus.bind(this);
        this.itemFinish=this.itemFinish.bind(this);
    }

    componentDidMount(){
        var spanDOM=document.getElementById('itemContent' + this.props.data.id);
        var divDOM=document.getElementById('itemBcakground' + this.props.data.id);
        store.subscribe(() => {
            if(this.state.isFinished){
                spanDOM.style.textDecoration="line-through";
                divDOM.style.backgroundColor="#e9e7ef";
            }else{
                spanDOM.style.textDecoration="none";
                divDOM.style.backgroundColor="white";
            }
        })
    }

    componentDidUpdate(preProps, preState){
        if(this.state.isFinished !== preState.isFinished){
            const action = finishwork(this.props.data.id, this.state.isFinished)
            store.dispatch(action)
        }
    }

    render(){
        return (
            <Fragment>
                <GlobalStyled />
                <div id={"itemBcakground"+this.props.data.id} className="itemBcakground">
                    <span id={"itemContent"+this.props.data.id} className="itemContent">{this.props.data.content}</span>
                    <input id={"itemInput"+this.props.data.id} className="itemInput" value={this.state.changeValue} onChange={this.changeinput} onBlur={this.blurFocus}/>
                    <input type='checkbox' id="itemCheckBox" onClick={this.itemFinish}/>
                    <button id="editBtn" onClick={this.editItem}>
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-bianji2"></use>
                        </svg>
                    </button>
                    <button id="deleteBtn" onClick={this.deleteItem}>
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-shanchu4"></use>
                        </svg>
                    </button>
                </div>
            </Fragment>
        );
    }

    changeinput(event){
        this.setState({
            changeValue: event.target.value
        })
    }

    blurFocus(){
        if(this.state.changeValue.length === 0){
            message.error("填写点你想做的事情吧");
        }else{
            const action = edititem(this.props.data.id, this.state.changeValue);
            store.dispatch(action);
            var inputDOM=document.getElementById('itemInput' + this.props.data.id);
            inputDOM.style.display="none";
        }
    }

    deleteItem(){
        const action = deleteitem(this.props.data.id);
        store.dispatch(action);
    }

    editItem(){
        var inputDOM=document.getElementById('itemInput' + this.props.data.id);
        var spanDOM=document.getElementById('itemContent' + this.props.data.id);
        inputDOM.style.display="block";
        this.setState({
            changeValue: spanDOM.innerHTML
        })
    }

    itemFinish(){
        this.setState({
            isFinished: !this.state.isFinished
        })
    }

}

ListItem.propTypes = {
    data: propTypes.object,
    key: propTypes.number
}

export default ListItem;