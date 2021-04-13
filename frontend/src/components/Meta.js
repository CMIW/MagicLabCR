import React from 'react'
import {Helmet} from 'react-helmet'

const Meta = ({title,description,keywords}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description}/>
            <meta name='keyword' content={keywords}></meta>
        </Helmet>
    )
}

Meta.defaultProps = {
    title: 'Bienvenido a Magic Lab CR',
    description:'',
    keywords: ''
}

export default Meta
