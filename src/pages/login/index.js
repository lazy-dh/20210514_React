import React, { Component } from 'react'
import './index.less';
import logo from './images/1.png'
import { Form, Input, Button} from 'antd';
import 'antd/dist/antd.css';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const Item = Form.Item


//登录的路由组建
export default class Login extends Component {
    //用validator对密码进行验证
    validator = (rule, value,callback) =>{
        if(!value){
            return Promise.reject(new Error('密码不能为空'));
        }else{
            return Promise.resolve();
        }
    
    }
    onFinisha = (values) => {
        console.log('Received values of form: ', values);
      };
    render() {
        return (
            <div className="login">
               <header className="login-header">
                   <img src={logo} />
                   <h1>后台管理系统</h1>
               </header>
               <section className="login-content">
                   <h2>用户登录</h2>
                   <Form
                    name="normal_login" 
                    className="login-form"
                    onFinish={this.onFinisha}
                    >
                    <Item
                        name="username"
                        //声明式验证（直接使用别人定义好的规则进行验证）
                        rules={
                            [
                                { required: true, whitespace: true, message: '用户名不能为空!' },
                                { min:4, message:'用户名至少4位' },
                                { max:10, message:'用户名最多10位' },
                                { pattern:/^[a-zA-z0-9_]+$/ , message:'用户名必须是英文、数字护着下划线组成'}//^代表以什么开头，$代表以什么结尾
                            ]
                        }
                    >
                       <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Item>
                    <Item
                        name="password"
                        rules={[{ validator:this.validator}]}
                    >
                        <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                        />
                    </Item>
                   

                    <Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" >
                        Log in
                        </Button>
                     
                    </Item>
                    </Form>
               </section>
            </div>
        )
    }
}

    

