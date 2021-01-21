import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import { AppRouter } from './router/AppRouter';
import './styles/style.css';

export const ResumeApp = () => {
    return ( 
        <Provider store={ store }>
            <AppRouter /> 
        </Provider>
    )
}
