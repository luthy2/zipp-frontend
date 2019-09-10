import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import LinkList from '../../src/components/LinkList';
import Page from '../../src/components/Page'
import './inbox.css';

// import {validateToken} from "../../actions/index";
import store from '../../store'

export default () => <Page pageName="Inbox" store={store} hideNav={false}><LinkList store={store}/></Page>
