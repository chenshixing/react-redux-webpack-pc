/**
 * Created by Ethan on 2016/11/2.
 */
import React,{Component} from 'react';
import { Router,History } from 'react-router';
import { Row,Col,Menu,Icon,Breadcrumb } from 'antd';
export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleClick(e) {
      
    }

    render() {
        return (
            <div className="fn-pa-10">
                <div className="panel">
                    <div style={{height:700}}>
                       <h1>Product</h1> 
                    </div>
                  
                </div>
            </div>
        );
    }
}
