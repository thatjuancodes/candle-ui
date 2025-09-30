# Candle UI

A modern, flexible React + TypeScript component library built with TailwindCSS and Storybook.

## Features

- 🎨 **Modern Design System** - Built with TailwindCSS and custom theme tokens
- 🌙 **Multi-theme Support** - Light, dark, and brand themes with runtime switching
- 📱 **Responsive Components** - Mobile-first design approach
- ♿ **Accessibility First** - WCAG compliant components with proper ARIA attributes
- 🧪 **Fully Tested** - Comprehensive test coverage with Vitest and React Testing Library
- 📚 **Storybook Integration** - Interactive component documentation and playground
- 🔧 **TypeScript Native** - Full type safety and excellent developer experience
- 🎯 **Tree Shakeable** - Import only what you need

## Installation

```bash
# Using yarn (recommended)
yarn add candle-ui

# Using npm
npm install candle-ui

# Using pnpm
pnpm add candle-ui
```

## Quick Start

### 1. Wrap your app with ThemeProvider

```tsx
import { ThemeProvider } from 'candle-ui';
import 'candle-ui/dist/style.css';

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      {/* Your app content */}
    </ThemeProvider>
  );
}
```

### 2. Use components

```tsx
import { Button, Card, Input, StatWidget } from 'candle-ui';

function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatWidget
          title="Total Revenue"
          value="$45,231"
          change={{ value: '+20.1%', type: 'increase' }}
          variant="primary"
        />
        <StatWidget
          title="Active Users"
          value="2,350"
          change={{ value: '+180.1%', type: 'increase' }}
          variant="success"
        />
        <StatWidget
          title="Conversion Rate"
          value="3.2%"
          change={{ value: '-5.4%', type: 'decrease' }}
          variant="warning"
        />
      </div>

      <Card>
        <h2 className="text-xl font-semibold mb-4">User Settings</h2>
        <div className="space-y-4">
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            fullWidth
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            showPasswordToggle
            fullWidth
          />
          <Button variant="primary" size="lg" fullWidth>
            Save Changes
          </Button>
        </div>
      </Card>
    </div>
  );
}
```

## Components

### Button
Versatile button component with multiple variants, sizes, and states.

```tsx
<Button variant="primary" size="md" loading>
  Click me
</Button>
```

**Props:**
- `variant`: `'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'ghost' | 'outline'`
- `size`: `'xs' | 'sm' | 'md' | 'lg' | 'xl'`
- `fullWidth`: `boolean`
- `loading`: `boolean`
- `leftIcon`, `rightIcon`: `React.ReactNode`

### Card
Flexible container component for grouping related content.

```tsx
<Card variant="elevated" padding="lg" interactive>
  <h3>Card Title</h3>
  <p>Card content goes here...</p>
</Card>
```

**Props:**
- `variant`: `'default' | 'outlined' | 'elevated' | 'filled'`
- `padding`: `'none' | 'sm' | 'md' | 'lg' | 'xl'`
- `interactive`: `boolean`

### Input
Feature-rich input component with validation states and icons.

```tsx
<Input
  label="Email"
  type="email"
  placeholder="Enter email"
  startIcon={<EmailIcon />}
  errorText="Please enter a valid email"
  fullWidth
/>
```

**Props:**
- `size`: `'sm' | 'md' | 'lg'`
- `variant`: `'default' | 'error' | 'success'`
- `label`: `string`
- `helperText`: `string`
- `errorText`: `string`
- `startIcon`, `endIcon`: `React.ReactNode`
- `showPasswordToggle`: `boolean` (for password inputs)

### StatWidget
Display key metrics with optional change indicators and icons.

```tsx
<StatWidget
  title="Revenue"
  value="$45,231"
  change={{ value: '+20.1%', type: 'increase' }}
  icon={<RevenueIcon />}
  variant="primary"
/>
```

**Props:**
- `title`: `string`
- `value`: `string | number`
- `icon`: `React.ReactNode`
- `change`: `{ value: string | number; type: 'increase' | 'decrease' | 'neutral' }`
- `size`: `'sm' | 'md' | 'lg'`
- `variant`: `'default' | 'primary' | 'success' | 'warning' | 'error'`

## Theming

### Using Themes

```tsx
import { useTheme } from 'candle-ui';

function ThemeToggle() {
  const { themeName, setTheme, toggleTheme } = useTheme();

  return (
    <div>
      <p>Current theme: {themeName}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button onClick={() => setTheme('dark')}>Dark Theme</button>
    </div>
  );
}
```

### Available Themes

- **Light Theme** - Clean, bright interface
- **Dark Theme** - Easy on the eyes for low-light environments  
- **Brand Theme** - Custom branded color scheme

### Custom Themes

You can create custom themes by extending the base theme structure:

```tsx
import { Theme } from 'candle-ui';

const customTheme: Theme = {
  name: 'custom',
  colors: {
    primary: {
      // Your custom primary colors
      500: '#your-color',
      // ... other shades
    },
    // ... other color definitions
  },
  // ... other theme properties
};
```

## Development

### Prerequisites

- Node.js 18+ 
- Yarn package manager

### Setup

```bash
# Clone the repository
git clone <repository-url>
cd candle-ui

# Install dependencies
yarn install

# Start Storybook development server
yarn dev

# Run tests
yarn test

# Run tests with coverage
yarn test:coverage

# Lint code
yarn lint

# Build the library
yarn build
```

### Scripts

- `yarn dev` - Start Storybook development server
- `yarn build` - Build the library for production
- `yarn test` - Run tests in watch mode
- `yarn test:coverage` - Run tests with coverage report
- `yarn lint` - Lint and fix code
- `yarn storybook` - Start Storybook server
- `yarn build-storybook` - Build Storybook for deployment

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Add tests for your changes
5. Ensure all tests pass (`yarn test`)
6. Lint your code (`yarn lint`)
7. Commit your changes (`git commit -m 'Add amazing feature'`)
8. Push to the branch (`git push origin feature/amazing-feature`)
9. Open a Pull Request

### Component Development Guidelines

1. **TypeScript First** - All components must be written in TypeScript with proper type definitions
2. **Theme Integration** - Components should consume theme tokens, never hardcoded values
3. **Accessibility** - Follow WCAG guidelines and include proper ARIA attributes
4. **Testing** - Write comprehensive tests covering all component states and interactions
5. **Documentation** - Include Storybook stories with multiple variants and use cases
6. **Responsive Design** - Ensure components work well on all screen sizes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - see the [LICENSE](LICENSE) file for details.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a detailed list of changes.

---

Built with ❤️ using React, TypeScript, TailwindCSS, and Storybook.
