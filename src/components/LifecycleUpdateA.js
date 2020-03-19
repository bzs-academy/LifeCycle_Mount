import React, { Component } from 'react'
import LifecycleUpdateB from './LifecycleUpdateB'


class LifecycleUpdateA extends Component {

    constructor(props) {
        super(props)
        this.state = {
             city: 'Istanbul'
        }
        console.log('LifecycleUpdateA constructor')
    }
    
    static getDerivedStateFromProps (props, state) {
        console.log('LifecycleUpdateA getDerivedStateFromProps')
        return null
    }

    shouldComponentUpdate () {
        console.log('LifecycleUpdateA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate (prevProps, prevState) {
        console.log('LifecycleUpdateA getSnapshotBeforeUpdate')
        return null 
    }

    componentDidUpdate() {
        console.log('LifecycleUpdateA componentDidUpdate')
    }

    componentDidMount () {
        console.log('LifecycleUpdateA componentDidMount')
        // this.setState({
        //     city: 'Hamburg - A'
        // })
    }

    changeState = () => {
        this.setState({
            city: 'Bonn -  A'
        })
    }

    render() {
        console.log('LifecycleUpdateA render')
        return (
            <div>
                Hello from LifecycleUpdateA - {this.state.city}
                <div>
                    <button style={{padding: '5px 15px', margin: '15px'}} onClick={this.changeState} >Change State - city A</button>
                </div>
                
                <LifecycleUpdateB />
            </div>
        )
    }
}

export default LifecycleUpdateA
