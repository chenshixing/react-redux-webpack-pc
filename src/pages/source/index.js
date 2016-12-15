/**
 * Created by Ethan on 2016/11/2.
 */
import React,{Component} from 'react';
import { Router,History } from 'react-router';
import { Row,Col,Menu,Icon,Breadcrumb } from 'antd';
const SubMenu = Menu.SubMenu;
export default class Source extends Component {
    constructor(props) {
        super(props);
        this.state = {current: 'search'};
    }
    handleClick(e) {
        this.setState({
            current: e.key,
        });
        //跳转
        let url = e.keyPath[1] ? "warning/" + e.keyPath[1] + "/" + e.key : "warning/" + e.key;
        this.props.history.push(url);
    }
    render() {
        return (
            <div className="fn-pa-10">
                <div className="panel">
                    <div style={{height:700}}>
                        <h1>Source</h1>
                    </div>
                </div>
            </div>
        );
    }
}
