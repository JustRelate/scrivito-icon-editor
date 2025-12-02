import type { Widget, Obj } from 'scrivito'
import { uiContext, canEdit, connect, isInPlaceEditingActive } from 'scrivito'
import { BootstrapIconPicker } from './BootstrapIconPicker.js'

export const ScrivitoBootstrapIconEditor = connect(
  function ScrivitoBootstrapIconEditor({
    attribute,
    description,
    obj,
    page,
    previewTitle,
    widget,
    ...props
  }: {
    attribute?: string
    defaultValue?: string
    description?: string
    previewTitle?: string
    searchLabel?: string
    showClearButton?: boolean
  } & (
    | { obj: Obj; page?: Obj; widget?: never }
    | { obj?: Obj; page: Obj; widget?: never }
    | { obj?: never; page?: never; widget: Widget }
  )): JSX.Element | null {
    const attributeName = attribute || 'icon'
    const content = obj || page || widget
    const value = content.get(attributeName)
    const theme = uiContext()?.theme
    const isEditable =
      isInPlaceEditingActive() && canEdit(obj || page || widget.obj())

    return theme ? (
      <div className={`scrivito_${theme} scrivito-icon-editor`}>
        <div className="description">{description}</div>
        <div className="preview-title">{previewTitle ?? 'Preview'}</div>
        <BootstrapIconPicker
          disabled={!isEditable}
          onChange={(name) =>
            content.update({ [attributeName]: name ? `bi-${name}` : '' })
          }
          value={
            typeof value === 'string' ? value.replace(/^bi-/, '') : undefined
          }
          {...props}
        />
      </div>
    ) : null
  },
)
