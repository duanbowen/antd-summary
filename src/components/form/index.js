import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import styles from './style/index.less';
// import './style'
const FormItem = Form.Item;
class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  // reset fields
  onReset = () => {
    this.props.form.resetFields();
  }
  // set one field
  onSetField = () => {
    this.props.form.setFieldsValue({ userName: 'cooper'});
  }
  onValidateFields = (e) => {
    this.props.form.validateFields(['password'], (err) => {
      if (!err) {
        console.log('Received values of form: ');
      }
    });
  }
  render() {
    console.log(styles);

    // 解决方式一 在less文件中加上global
    // `:local` 与 `:global` 的区别是 CSS Modules 只会对 `:local` 块的 class 样式做 `localIdentName` 规则处理，`:global` 的样式编译后不变。

    // 使用 react-css-module
    const { getFieldDecorator } = this.props.form;
    return (
      // <Form onSubmit={this.handleSubmit} className="myForm">
      <Form onSubmit={this.handleSubmit} className={styles.myForm} >
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
          <Button onClick={this.onReset}> Reset</Button>
          <Button onClick={this.onSetField}> setField</Button>
          <Button onClick={this.onValidateFields}> get ValidateField status</Button>
        </FormItem>
      </Form>
    );
  }
}

const myForm = Form.create()(NormalLoginForm);
export default myForm;

