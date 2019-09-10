import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RegisterForm from '../../src/components/RegisterForm';
import Page from '../../src/components/Page'
import store from '../../store'

export default () => <Page pageName="Sign Up" store={store} hideNav={true}><RegisterForm store={store}/></Page>
