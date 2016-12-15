import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import fetch from 'isomorphic-fetch';
import {Button, Form, Input, Row, Col,message,Modal} from 'antd';
import classNames from 'classnames';
const createForm = Form.create;
const FormItem = Form.Item;
import ruleType from 'UTILS/ruleType';
class resetPassword extends React.Component {
    constructor(props) {
        super(props)
    }

    handleSubmit() {
    }

    checkPass(rule, value, callback) {
        const form = this.props.form;
        this.getPassStrenth(value, 'password');
        if(form.getFieldValue('password')) {
            form.validateFields(['retryPassword'], {force: true});
        }
        callback();
    }

    checkPassAgain(rule, value, callback) {
        const form = this.props.form;
        this.getPassStrenth(value, 'retryPassword');
        if(value && value !== form.getFieldValue('password')) {
            callback('两次输入密码不一致！');
        } else {
            callback();
        }
    }

    render() {
        const {getFieldProps} = this.props.form;
        const oldLoginPwd = getFieldProps('oldPassword', { //原登录密码
            rules: [{
                required: true,
                whitespace: true,
                min: 8,
                max: 20,
                message: '请输入8-20个字符的原登录密码'
            }, ruleType('any')],
            onChange: (e) => {
                this.setState({
                    oldPassword: e.target.value
                })
            }
        });
        const passProps = getFieldProps('password', {
            rules: [{
                required: true,
                min: 8,
                max: 20,
                message: '请输入8-20个字符'
            }, {
                validator: this.checkPass.bind(this)
            },
                ruleType('any')
            ],
            onChange: (e) => {
                this.setState({
                    password: e.target.value
                })
            }
        });
        const rePassProps = getFieldProps('retryPassword', {
            rules: [{
                required: true,
                message: '请再次输入密码'
            }, {
                validator: this.checkPassAgain.bind(this)
            }, ruleType('any')],
            onChange: (e) => {
                this.setState({
                    retryPassword: e.target.value
                })
            }
        });
        const formItemLayout = {
            labelCol: {
                span: 6
            },
            wrapperCol: {
                span: 18
            }
        };
        return (
            <div>
                <div className="login-main">
                    <div className="login-title">
                        <span>改密码</span>
                    </div>
                    <div className="login-cnt">
                        <div>
                            <Form horizontal>
                                <Row>
                                    <Col span="22">
                                        <FormItem
                                            {...formItemLayout}
                                            label="原密码">
                                            <Input {...oldLoginPwd}
                                                type="password"
                                                autoComplete="off"
                                                id="oldPassword"
                                            />
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span="22">
                                        <FormItem
                                            {...formItemLayout}
                                            label="新密码">
                                            <Input {...passProps}
                                                type="password"
                                                autoComplete="off"
                                                id="password"
                                            />
                                        </FormItem>

                                    </Col>
                                </Row>

                                <Row>
                                    <Col span="22">
                                        <FormItem
                                            {...formItemLayout}
                                            label="确认密码">
                                            <Input
                                                {...rePassProps}
                                                type="password"
                                                autoComplete="off"
                                                id="retryPassword"
                                            />
                                        </FormItem>

                                    </Col>
                                </Row>
                                <Row>
                                    <Col span="22">
                                        <Col span="2" offset="20">
                                            <Button
                                                type="primary"
                                                onClick={this.handleSubmit.bind(this)}>
                                                提交
                                            </Button>
                                        </Col>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
    
    getPassStrenth(value, type) {
        if(value) {
            let strength;
            // 密码强度的校验规则自定义，这里只是做个简单的示例
            if(value.length < 6) {
                strength = 'L';
            } else if(value.length <= 9) {
                strength = 'M';
            } else {
                strength = 'H';
            }
            if(type === 'password') {
                this.setState({passBarShow: true, passStrength: strength});
            } else {
                this.setState({rePassBarShow: true, rePassStrength: strength});
            }
        } else {
            if(type === 'password') {
                this.setState({passBarShow: false});
            } else {
                this.setState({rePassBarShow: false});
            }
        }
    }
}
export default createForm()(resetPassword)
