import React from 'react'

const SelectionWrapper = (Component) => {
    return class Wrapper extends React.Component {
        constructor(props) {
            super(props)
            this.onSelect = this.onSelect.bind(this)
        }

        onSelect(e) {
            
        }

        render() {
            return super.render()
        }
    }
}

export default SelectionWrapper
