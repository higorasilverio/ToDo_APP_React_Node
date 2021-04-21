import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import If from './If'

const IconButton = props => {
    return (
        <If test={!props.hide}>
            <button className={'btn btn-'+ props.buttonStyle} onClick={props.onClick}>
                    <FontAwesomeIcon icon={props.icon} />
                </button>
        </If>
    )
}

export default IconButton