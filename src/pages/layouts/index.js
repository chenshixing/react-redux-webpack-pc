import React,{Component} from 'react';
import Header from './common/header';
import Footer from './common/footer';
import Leftbar from './common/leftbar';
import './style.less'
export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            systemAsideState: true
        }
    }

    handleSystemAside(e) {
        this.setState({
            systemAsideState: !this.state.systemAsideState
        })
    }

    render() {
        let style = this.state.systemAsideState ? "system-container fold-for-aside" : "system-container";
        return (
            <div className="main-frm">
                <Header />
                <div className={style}>
                    <div className="system-content-wrap">
                        <div className="system-content">
                            <div className="frame-wrap-bg">
                                {/* 左边容区 */}
                                <Leftbar handleStateCur={this.props.location.pathname}
                                         callback={this.handleSystemAside.bind(this)}/>
                                <div className="frame-wrap">
                                    {/* 主内容区 */}
                                    {this.props.children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
