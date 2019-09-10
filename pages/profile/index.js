import React from 'react';
import ReactDOM from 'react-dom';
import Page from '../../src/components/Page'
import Profile from '../../src/components/Profile'
import store from '../../store'


export default () => <Page pageName="Profile" store={store}><Profile/></Page>
