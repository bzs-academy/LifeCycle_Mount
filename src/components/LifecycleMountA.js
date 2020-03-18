import React, { Component } from 'react'
import LifecycleMountB from './LifecycleMountB'
import LifecycleMountC from './LifecycleMountC'




class LifecycleMountA extends Component {

    constructor(props) {
        super(props)
        this.state = {
             name: 'Ayse'
        }
        console.log('LifecycleMountA constructor')
    }
    
    static getDerivedStateFromProps (props, state) {
        console.log('LifecycleMountA getDerivedStateFromProps')
        return null
    }


    componentDidMount () {
        console.log('LifecycleMountA componentDidMount')
    }


    render() {
        console.log('LifecycleMountA render')
        return (
            <div>
                Hello from LifecycleMountA
                <LifecycleMountC />
                <LifecycleMountB />
                
            </div>
        )
    }
}

export default LifecycleMountA
