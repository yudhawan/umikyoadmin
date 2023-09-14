import SVG from 'react-inlinesvg'
import React from 'react'
export type IconProps = {
    source: { src: string },
    title?: string,
    classname?: string
}
const IconComponent = ({ source, title, classname }: IconProps) => {
    return <SVG src={source.src} className={classname} title={title} />
}

export default IconComponent