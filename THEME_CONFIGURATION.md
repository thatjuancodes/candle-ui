# 🎨 Candle UI Theme Configuration

## **Primary Theme (Default)**

Your library uses **`light`** as the primary theme by default.

**Location**: `src/theme/config.ts` → `DEFAULT_THEME = 'light'`

## **Available Themes**

### Built-in Themes
- **`light`** - Clean, bright interface (DEFAULT)
- **`dark`** - Easy on the eyes for low-light environments  
- **`brand`** - Custom branded color scheme

### Your Custom Themes
- **`my-brand`** - Your custom light theme
- **`my-brand-dark`** - Your custom dark theme
- **`my-accent`** - Your custom accent theme

## **Theme Cycle Order**

When users toggle themes, they cycle through in this order:
1. `light` → `dark` → `brand` → `light` (repeat)

**Location**: `src/theme/config.ts` → `THEME_CYCLE_ORDER`

## **How to Change the Primary Theme**

### Option 1: Change the Default (Recommended)
Edit `src/theme/config.ts`:

```typescript
// Change this line to set your primary theme
export const DEFAULT_THEME = 'my-brand' as const; // Instead of 'light'
```

### Option 2: Override in ThemeProvider
```tsx
<ThemeProvider defaultTheme="my-brand">
  <App />
</ThemeProvider>
```

## **How to Add More Themes**

1. **Create your theme** in `src/theme/myThemes.ts`:
```typescript
export const myCorporateTheme = createCustomTheme({
  primary: '#1e40af',
  secondary: '#64748b',
  // ... other colors
}, 'my-corporate');
```

2. **Add to config** in `src/theme/config.ts`:
```typescript
export const customThemes = {
  'my-brand': myLightTheme,
  'my-brand-dark': myDarkTheme,
  'my-accent': myAccentTheme,
  'my-corporate': myCorporateTheme, // Add here
};
```

3. **Update cycle order** (optional):
```typescript
export const THEME_CYCLE_ORDER = ['my-brand', 'light', 'dark', 'brand'] as const;
```

## **Current Configuration Summary**

```typescript
{
  defaultTheme: 'light',
  themeCycleOrder: ['light', 'dark', 'brand'],
  availableThemes: ['light', 'dark', 'brand', 'my-brand', 'my-brand-dark', 'my-accent'],
  builtInThemes: ['light', 'dark', 'brand'],
  customThemes: ['my-brand', 'my-brand-dark', 'my-accent']
}
```

## **Quick Commands**

```bash
# See your current theme config
yarn storybook  # Check "Theme/My Custom Themes" stories

# Test theme switching
# Use the theme toggle in Storybook or your app
```

---

**💡 Pro Tip**: Keep your primary theme simple and accessible. Use custom themes for specific use cases or client projects.
