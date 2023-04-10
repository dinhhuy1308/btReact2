import React, { Component } from 'react'
import './style.css';

export default class Body extends Component {

    dataGlasses = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./img/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./img/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./img/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./img/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./img/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./img/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./img/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./img/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./img/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
    ]

    state = {dataGlasses: this.dataGlasses[0]}

    renderGlasses = () => {
        return this.dataGlasses.map((item, index) => {
            return (
                <button key={index} className="m-2 py-2 w-25" onClick={()=>{
                    const newState = {dataGlasses:item};
                    this.setState(newState);
                }}>
                    <img width={150} src={item.url} alt=''/>
                    <p>Name: {item.name}</p>
                    <p>Price: {item.price}$</p>
                </button>
            )
        })
    }


    render() {
        const {url,name,price,desc} = this.state.dataGlasses
        return (
            <div>
                <div>
                    <h4 className='text-white text-center py-4 bg-dark'>TRY GLASSES APP ONLINE</h4>
                </div>
                <div className="container-fluid">
                    <div className="row pt-4">
                        <div className="col-4">
                            <div className="card">
                                <img className='model-img' src="./img/model.jpg" alt='' />
                                <img className='glass-img' src={url} alt='' />
                                <div className="card-body text-white text-left bg-dark">
                                    <h4>Name: {name}.</h4>
                                    <p>Price: {price}$</p>
                                    <p>Description: {desc}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="row">
                                {this.renderGlasses()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
