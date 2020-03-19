import React, { Component } from 'react'


class LifecycleUpdateB extends Component {

    constructor(props) {
        super(props)
        this.state = {
             city: 'Bursa'
        }
        console.log('LifecycleUpdateB constructor')
    }
    
    static getDerivedStateFromProps (props, state) {
        console.log('LifecycleUpdateB getDerivedStateFromProps')
        return null
    }

    shouldComponentUpdate () {
        console.log('LifecycleUpdateB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate (prevProps, prevState) {
        console.log('LifecycleUpdateB getSnapshotBeforeUpdate')
        return null 
    }

    componentDidUpdate() {
        console.log('LifecycleUpdateB componentDidUpdate')
    }

    componentDidMount () {
        console.log('LifecycleUpdateB componentDidMount')
        // this.setState({
        //     city: 'Hamburg - B'
        // })
    }

    changeState = () => {
        this.setState({
            city: 'Bonn -  B'
        })
    }

    render() {
        console.log('LifecycleUpdateB render')
        return (
            <div>
                Hello from LifecycleUpdateB - {this.state.city}
                <div>
                    <button style={{padding: '5px 15px', margin: '15px'}} onClick={this.changeState} >Change State - city B</button>
                </div>
                
            </div>
        )
    }
}

export default LifecycleUpdateB
