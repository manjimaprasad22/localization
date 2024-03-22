import React from 'react'
import { useTranslation } from 'react-i18next'

const Texts = () => {
    const {t}= useTranslation()
    return (
      <div>
  <p>{t('text')}</p>
      </div>
    )
}

export default Texts