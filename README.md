# Scrivito Icon Editor

The `scrivito-icon-editor` is a versatile icon picker designed for seamless integration with [Scrivito](https://www.scrivito.com) and React applications. It supports [Bootstrap Icons](https://icons.getbootstrap.com) out of the box but can work with any icon set. Easily integrate it into your projects to add icons with custom styling and functionality.

## Installation

```sh
npm install scrivito-icon-editor
```

## Usage

### Bootstrap Icons in a Scrivito application

```ts
// IconWidgetEditingConfig.ts
import { ScrivitoBootstrapIconEditor } from 'scrivito-icon-editor'

provideEditingConfig(IconWidget, {
  propertiesGroups: [
    {
      component: ScrivitoBootstrapIconEditor,
      key: 'icon-group',
      properties: ['icon'],
      title: 'Icon',
    },
  ],
})
```

#### Importing styles

The `ScrivitoBootstrapIconEditor` includes built-in styles for easy integration. To apply these styles, import the following CSS files in your project:

```scss
// scrivitoExtensions.scss
@import 'bootstrap-icons/font/bootstrap-icons.css';
@import 'scrivito-icon-editor/ScrivitoIconEditor.css';
```

#### Using the icon editor with options

```tsx
// defaultPageEditingConfig.tsx
import { ScrivitoBootstrapIconEditor } from 'scrivito-icon-editor'

export const defaultPagePropertiesGroups = [
  {
    component: (props: { page: Obj }) => (
      <ScrivitoBootstrapIconEditor
        attribute="linkIcon"
        description="This icon may appear in a vertical navigation widget, for example."
        showClearButton
        {...props}
      />
    ),
    key: 'icon-group',
    properties: ['linkIcon'],
    title: 'Icon',
  },
]
```

#### Available options

- **attribute**: (string) The attribute where the icon is stored. Default: icon
- **defaultValue**: (string) The fallback icon displayed when no icon is set. When this option is enabled, the clear button is disabled. Default: undefined
- **description**: (string) A description for the icon picker field.
- **obj**: (Obj) The CMS object where the icon attribute is stored.
- **page**: (Obj) The page where the icon attribute is stored.
- **previewTitle**: (string) Title of the icon preview element. Default: Preview
- **searchLabel**: (string) Accessibility label for icon search inputs. Default: Search
- **showClearButton**: (boolean) If true, shows a button to clear the selected icon. Default: false
- **widget**: (Widget) The widget where the icon attribute is stored.

### Standalone Bootstrap icon picker

The Bootstrap icon picker features built-in support for Bootstrap Icons, making it easy to integrate into your React application. To customize its appearance, simply include the necessary CSS in your project. This allows you to quickly enhance your app with the rich selection of Bootstrap Icons available while tailoring the design to fit your app’s aesthetic.

```tsx
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BootstrapIconPicker } from 'scrivito-icon-editor'

function BoostrapIconPickerDemo() {
  const [icon, setIcon] = useState<string | undefined>('rocket-takeoff')
  return (
    <BootstrapIconPicker
      disabled={false}
      onChange={setIcon}
      showClearButton
      value={icon}
    />
  )
}
```

#### Available options

- **defaultValue**: (string) The fallback icon displayed when no icon is set. When this option is enabled, the clear button is disabled. Default: undefined
- **disabled**: (boolean) Disables the icon picker if set to true. Default: false
- **onChange**: (function) A callback function triggered when the selected icon changes. Receives the new icon as an argument.
- **searchLabel**: (string) Accessibility label for icon search inputs. Default: Search
- **showClearButton**: (boolean) If true, shows a button to clear the selected icon. Default: false
- **value**: (string | undefined) The currently selected icon.

### Standalone generic icon picker

The generic icon picker is designed to work seamlessly with any React application and any icon set, providing you with the flexibility to choose icons that best suit your project’s needs. For optimal styling, ensure to include the relevant CSS to adjust the picker’s appearance according to your design requirements.

```tsx
import { IconPicker } from 'scrivito-icon-editor'

function IconPickerDemo() {
  const [icon, setIcon] = useState<string | undefined>('rocket')
  return (
    <IconPicker
      disabled={false}
      icons={['face-laugh', 'heart', 'rocket', 'thumbs-up']}
      onChange={setIcon}
      renderFunc={(icon) => <i className={`fa-solid fa-${icon}`} />}
      showClearButton
      value={icon}
    />
  )
}
```

#### Available options

- **defaultValue**: (string) The fallback icon displayed when no icon is set. When this option is enabled, the clear button is disabled. Default: undefined
- **disabled**: (boolean) Disables the icon picker if set to true. Default: false
- **icons**: (string[]) An array of available icons to pick from.
- **onChange**: (function) A callback function triggered when the selected icon changes. Receives the new icon as an argument.
- **renderFunc**: (function) A custom render function to display an icon.
- **searchLabel**: (string) Accessibility label for icon search inputs. Default: Search
- **showClearButton**: (boolean) If true, shows a button to clear the selected icon. Default: false
- **value**: (string | undefined) The currently selected icon.

## License

This project is licensed under the MIT License.
