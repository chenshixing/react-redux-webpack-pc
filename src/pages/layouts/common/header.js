/*
 公用头部
 */
import React,{Component} from 'react';
import { Menu, Icon } from 'antd';
import {Link} from 'react-router';
import systemLogo from 'ASSETS/images/eplus.png';
import userHead from 'ASSETS/images/avatar/userHead.png';
export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="system-top-nav">
                <Link to="/" className="system-logo">
                    <img src={systemLogo} alt=""/>
                </Link>
                <div className="stn-dropdown-wrap pull-left">
                    <a href="javaScript:void(0);" className="stn-btn">
                        管理后台
                    </a>
                </div>
                <div className="stn-dropdown-wrap pull-right user">
                    <a className="stn-btn">
                        <img src={userHead} alt=""/>
                        admin
                    </a>
                    <div className="stn-dropdown-menu">
                        <ul className="stn-user-menu">
                            <li>
                                <Link to="/resetPassword">修改密码</Link>
                            </li>
                            <li>
                                <a href="javaScript:void(0);">退出</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
