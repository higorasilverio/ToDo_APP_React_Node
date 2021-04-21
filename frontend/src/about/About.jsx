import React, { Component } from 'react'
import PageHeader from '../template/PageHeader'

import './About.css'

export default class About extends Component {
    render() {
        return (
            <div className="about">
                <PageHeader name="About" small="That is our history...">
                    <div className="content">
                        <h2>Our history</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dignissimos nesciunt eligendi quam ipsum. Fugiat quo, recusandae suscipit necessitatibus ipsa placeat! Eos sint explicabo similique nulla optio, autem iste veniam.</p>
                        <h2>Our mission</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas optio adipisci nulla est quo cupiditate accusantium expedita autem praesentium dolorem, aspernatur tempore dolor illo at corporis nemo natus veniam ab?</p>
                        <h2>Contact</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ipsam tempore quas recusandae dolor voluptatum laboriosam, quae incidunt. Amet, cupiditate? Quibusdam, odio? Minima magnam in sunt facere vel modi non.</p>
                    </div>
                </PageHeader>
            </div>
        )
    }
}