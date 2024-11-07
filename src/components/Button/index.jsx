import {Button} from './styles'
import PropTypes from 'prop-types'

function DefaultButton({children, ...props}){

    return (
        <Button {...props}>{children}</Button>
    )
}

DefaultButton.prototype = {
    children: PropTypes.node.isRequired
}

export default DefaultButton