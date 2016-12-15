import React from 'react';
import { Menu,Icon,Button } from 'antd';
import { Link} from 'react-router';
const SubMenu = Menu.SubMenu;
export default class Leftbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            systemAsideState: true
        }
    }

    systemAside() {
        this.props.callback && this.props.callback();
        this.setState({
            systemAsideState: !this.state.systemAsideState
        })
    }

    onClickHandler(e) {
        //console.log(e)
    }

    render() {
        let style = this.state.systemAsideState ? "system-aside fold" : "system-aside";
        return (
            <aside className={style} id="systemAside">
                <div className="system-aside-container">
                    <a onClick={this.systemAside.bind(this)}
                       className="system-aside-switch"
                       href="javascript:void(0);">
                        <span></span>
                    </a>
                    <ul className="aside-list-1" data-toggle="navigator" onClick={this.onClickHandler}>
                        <li>
                            <Link to="source" ref="source"  className="system-manage"  activeClassName="current">
                                <span className="sa">A页</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="product" ref="product"  className="service-manage"  activeClassName="current">
                                <span className="sa">B页</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        );
    }
}
