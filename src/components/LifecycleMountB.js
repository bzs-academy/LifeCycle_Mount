import React, { Component } from 'react'




class LifecycleMountB extends Component {

    constructor(props) {
        super(props)
        this.state = {
             name: 'Ayse'
        }
        console.log('LifecycleMountB constructor')
    }
    
    static getDerivedStateFromProps (props, state) {
        console.log('LifecycleMountB getDerivedStateFromProps')
        return null
    }


    componentDidMount () {
        console.log('LifecycleMountB componentDidMount')
    }


    render() {
        console.log('LifecycleMountB render')
        return (
            <div>
                Hello from LifecycleMountB
            </div>
        )
    }
}

export default LifecycleMountB
