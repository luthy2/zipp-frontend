import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './login.css';
import LoginForm from '../../src/components/LoginForm';
import Page from '../../src/components/Page'
import store from '../../store'

export default () => <Page pageName="Login" store={store} hideNav={true}><LoginForm store={store}/></Page>
