import { useMemo } from 'react'
import { IconPicker } from './IconPicker.js'
import codepoints from 'bootstrap-icons/font/bootstrap-icons.json' with { type: 'json' }

export function BootstrapIconPicker(props: {
  defaultValue?: string
  disabled?: boolean
  onChange: (value?: string) => void
  searchLabel?: string
  showClearButton?: boolean
  value?: string
}) {
  const icons = useMemo(() => Object.keys(codepoints).sort(), [])

  return (
    <IconPicker
      icons={icons}
      renderFunc={(icon) => <i className={`bi bi-${icon}`} />}
      {...props}
    />
  )
}
