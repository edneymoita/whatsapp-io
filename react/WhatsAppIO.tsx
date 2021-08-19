import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = ['whatsapp'] as const

interface WhatsAppIOProps {
  icon: string
  url: string
  altText: string
}

const WhatsAppIO: StorefrontFunctionComponent<WhatsAppIOProps> = ({ icon, url, altText }) => {
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <>
        <div className={handles.whatsapp}>
          <a href={url} target="_blank">
            <img src={icon} alt={altText}/>
          </a>
        </div>
    </>
  )
}

WhatsAppIO.schema = {
  title: 'WhatsApp',
  description: 'Comunicação via WhatsApp',
  type: 'object',
  properties: {
    whatsappId: {
      title: 'link',
      description: 'Link de chamada do WhatsApp',
      type: 'string',
      default: null,
    },
  },
}

export default WhatsAppIO