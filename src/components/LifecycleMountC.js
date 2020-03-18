import React, { Component } from 'react'




class LifecycleMountC extends Component {

    constructor(props) {
        super(props)
        this.state = {
             name: 'Ayse'
        }
        console.log('LifecycleMountC constructor')
    }
    
    static getDerivedStateFromProps (props, state) {
        console.log('LifecycleMountC getDerivedStateFromProps')
        return null
    }


    componentDidMount () {
        console.log('LifecycleMountC componentDidMount')
    }


    render() {
        console.log('LifecycleMountC render')
        return (
            <div>
                Hello from LifecycleMountC
            </div>
        )
    }
}

export default LifecycleMountC
