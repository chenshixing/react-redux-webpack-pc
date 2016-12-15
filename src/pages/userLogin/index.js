import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Button, Form, Input, Row, Col,Checkbox,message,Alert} from 'antd';
import classNames from 'classnames';
import { actionLogin} from 'ACTION';
import cookie from 'react-cookie';
const createForm = Form.create;
const FormItem = Form.Item;


class UserLogin extends React.Component{
    static defaultProps={
        loading:false,
        message:'',
        isLogined:false
    }
    static propTypes={}

    handleSubmit(e) {
        e.preventDefault();
        console.log('收到表单值：', this.props.form.getFieldsValue());
    }
    render(){
        const { getFieldProps } = this.props.form;
        let {message,loading} = this.props;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        const  usernameProps=getFieldProps('userName',{
            initialValue:this.state.userName,
            rules:[
                {
                    required:true,
                    message: '请输入账户名a'
                }
            ]
        });
        const passwordProps=getFieldProps('password',{
            rules:[
                {
                    required:true,
                    message:'请输入密码'
                }
            ]
        });
        const agreementProps=getFieldProps('agreement',{
            valuePropName: 'checked',
            initialValue:this.state.userName?true:false
        })

        return(
            <div>
                <div className="login-main">
                    <div className="login-title">
                        <h3>登录</h3>
                    </div>
                    <div className="login-cnt">
                        <div>
                            <Form horizontal onsubmit={this.handleSubmit}>
                                {this.message}
                                <FormItem
                                    {...formItemLayout}
                                    label="用户名"
                                >
                                    <Input placeholder="请输入用户名" {...usernameProps}/>
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="密码"
                                >
                                    <Input type="password" {...passwordProps} placeholder="请输入密码" />
                                </FormItem>
                                <FormItem wrapperCol={{ span: 14, offset: 6 }}>
                                    <Checkbox {...agreementProps}>记住我</Checkbox>
                                </FormItem>

                                <FormItem wrapperCol={{ span: 14, offset: 6 }} style={{ marginTop: 24 }}>
                                    <Button type="primary" htmlType="submit" loading={loading}>确定</Button>
                                </FormItem>


                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Form.create()(UserLogin);


/*class UserLogin extends React.Component {
    static defaultProps = {
        loading: false,
        message: '',
        isLogined: false,
    }
    static propTypes = {}

    constructor(props) {
        super(props)
        this.state = {
            userName: cookie.load('DRM_userName'),
        }
    }

    componentDidUpdate() {
        let {history,isLogined} = this.props;
        if(isLogined) {
            history.push("source");
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((errors, values) => {
            if(!!errors) {
            return;
        }
        if(values) {
            if(values.agreement) {
                cookie.save('DRM_userName', values.username, {maxAge: 7 * 24 * 3600});
            } else {
                cookie.remove('DRM_userName');
            }
            //发送请求
            this.props.action.fetchLogin(values.username, values.password);
        }
    });
    }

    render() {
        const {getFieldProps} = this.props.form;
        let {message,loading} = this.props;
        const usernameProps = getFieldProps('username', {
            initialValue: this.state.userName,
            rules: [
                {
                    required: true,
                    message: '请输入账户名'
                }
            ]
        });
        const passwordProps = getFieldProps('password', {
            rules: [
                {
                    required: true,
                    message: '请输入密码'
                }
            ]
        });
        const agreementProps = getFieldProps('agreement', {
            valuePropName: 'checked',
            initialValue: this.state.userName ? true : false
        });
        const formItemLayout = {
            labelCol: {
                span: 3
            },
            wrapperCol: {
                span: 21
            }
        };
        return (
            <div style={{overflow:'hidden',display:'none'}}>
    <div className="login-main">
            <div className="login-title">
            <h3>数由管理后台</h3>
            测试提交。
    </div>
        <div className="login-cnt">
            <div>
            <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
        {this.message}
    <FormItem
        label="">
            <Input {...usernameProps}
        placeholder="请输入账户名"/>
            </FormItem>
            <FormItem label="">
            <Input
        {...passwordProps}
        type="password"
        placeholder="请输入密码"/>
            </FormItem>
            <FormItem
        id="control-input"
            >
            <Input id="control-input" placeholder="Please enter..." />
            </FormItem>
            <FormItem>
            <Checkbox {...agreementProps}>记住账号</Checkbox>
        </FormItem>
        <FormItem wrapperCol={{ span: 17, offset: 7 }}>
    <Button style={{width:165}}
        loading={loading}
        type="primary"
        htmlType="submit">登录</Button>
            </FormItem>
            </Form>
            </div>
            </div>
            </div>
            </div>
    )
    }

    get message() {
        let {message,loading} = this.props;
        if(message && message != null && message != '') {
            return (<Alert showIcon message={this.props.message} type="error"/>)
        } else {
            return;
        }
    }
}*/
//将state.counter绑定到props的counter
/*function mapStateToProps(state, props) {
    return {
        message: state.loginReducer.message,
        loading: state.loginReducer.loading,
        isLogined: state.loginReducer.isLogined,
    }
}*/
//将action的所有方法绑定到props上
//去掉action会好爽，但代码不好看。等于直接掉方法
/*
function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(actionLogin, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(createForm()(UserLogin));*/
