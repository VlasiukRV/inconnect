import React, { Component } from 'react'
 
export default class Spinner extends Component {

    render(){
      const {
        width,
        height
      } = this.props
      const viewBox = '0 0 '+(100)+' '+(100)
      /*const rotateXY = '' +(width/2)+' '+(height/2)*/
        return <div>
        {/*style={{backgroundColor:none}}*/}

          <svg className='lds-spinner' width={width} height={height} xmlns='http://www.w3.org/2000/svg' viewBox={viewBox} preserveAspectRatio='xMidYMid' >
           <rect x='47' y='24' rx='9.4' ry='4.8' width='6' height='12' fill='#dd1d21'>
             <animate attributeName='opacity' values='1;0' dur='1s' begin='-0.9166666666666666s' repeatCount='indefinite'/>
            </rect>
            <rect x='47' y='24' rx='9.4' ry='4.8' width='6' height='12' fill='#dd1d21' transform='rotate(30 50 50)'>
              <animate attributeName='opacity' values='1;0' dur='1s' begin='-0.8333333333333334s' repeatCount='indefinite'/>
            </rect>
            <rect x='47' y='24' rx='9.4' ry='4.8' width='6' height='12' fill='#dd1d21' transform='rotate(60 50 50)'>
              <animate attributeName='opacity' values='1;0' dur='1s' begin='-0.75s' repeatCount='indefinite'/>
            </rect>
            <rect x='47' y='24' rx='9.4' ry='4.8' width='6' height='12' fill='#dd1d21' transform='rotate(90 50 50)'>
              <animate attributeName='opacity' values='1;0' dur='1s' begin='-0.6666666666666666s' repeatCount='indefinite'/>
            </rect>
            <rect x='47' y='24' rx='9.4' ry='4.8' width='6' height='12' fill='#dd1d21' transform='rotate(120 50 50)'>
              <animate attributeName='opacity' values='1;0' dur='1s' begin='-0.5833333333333334s' repeatCount='indefinite'/>
            </rect>
            <rect x='47' y='24' rx='9.4' ry='4.8' width='6' height='12' fill='#dd1d21' transform='rotate(150 50 50)'>
              <animate attributeName='opacity' values='1;0' dur='1s' begin='-0.5s' repeatCount='indefinite'/>
            </rect>
            <rect x='47' y='24' rx='9.4' ry='4.8' width='6' height='12' fill='#dd1d21' transform='rotate(180 50 50)'>
              <animate attributeName='opacity' values='1;0' dur='1s' begin='-0.4166666666666667s' repeatCount='indefinite'/>
            </rect>
            <rect x='47' y='24' rx='9.4' ry='4.8' width='6' height='12' fill='#dd1d21' transform='rotate(210 50 50)'>
              <animate attributeName='opacity' values='1;0' dur='1s' begin='-0.3333333333333333s' repeatCount='indefinite'/>
            </rect>
            <rect x='47' y='24' rx='9.4' ry='4.8' width='6' height='12' fill='#dd1d21' transform='rotate(240 50 50)'>
              <animate attributeName='opacity' values='1;0' dur='1s' begin='-0.25s' repeatCount='indefinite'/>
            </rect>
            <rect x='47' y='24' rx='9.4' ry='4.8' width='6' height='12' fill='#dd1d21' transform='rotate(270 50 50)'>
              <animate attributeName='opacity' values='1;0' dur='1s' begin='-0.16666666666666666s' repeatCount='indefinite'/>
            </rect>
            <rect x='47' y='24' rx='9.4' ry='4.8' width='6' height='12' fill='#dd1d21' transform='rotate(300 50 50)'>
              <animate attributeName='opacity' values='1;0' dur='1s' begin='-0.08333333333333333s' repeatCount='indefinite'/>
            </rect>
            <rect x='47' y='24' rx='9.4' ry='4.8' width='6' height='12' fill='#dd1d21' transform='rotate(330 50 50)'>
              <animate attributeName='opacity' values='1;0' dur='1s' begin='0s' repeatCount='indefinite'/>
            </rect>
            </svg>
        </div>
    }

}