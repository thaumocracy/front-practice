import React, { Component } from 'react';

const asyncComponent = (importComponent) => {
    return class extends Component {
        state = {
            component: null
        }

        async componentDidMount () {
            // importComponent().then(cmp => {this.setState({component: cmp.default})});
            const { default : component } = await importComponent()
            this.setState({
              component:component
            })
        }
        
        render () {
            const C = this.state.component;
            return C ? <C {...this.props} /> : null;
        }
    }
}

export default asyncComponent;