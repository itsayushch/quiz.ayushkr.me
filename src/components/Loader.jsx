import React, { Component } from 'react';
import '../styles/Loader.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner';

class LoaderComponent extends Component {
    render() {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: '20vh'
            }}>
                <Loader
                    type='Circles'
                    color='#00BFFF'
                    height={100}
                    width={100}
                    timeout={3000}
                />
            </div>
        );
    }
}

export default LoaderComponent;