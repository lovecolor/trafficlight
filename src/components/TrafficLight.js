// eslint-disable-next-line
import './TrafficLight.scss';
import React, { Component } from 'react';
import className from 'classnames';

const RED=0
const YELLOW=1
const GREEN=2
export default class TrafficLight extends Component {
    render() {
        const {color}=this.props
        return (
            <div className='Trafficlight'>
                <div className={className('bulb','red',{active:color===RED})}></div>
                <div className={className('bulb','yellow',{active:color===YELLOW})}></div>
                <div className={className('bulb','green',{active:color===GREEN})}></div>
            </div>
        )
    }
}

