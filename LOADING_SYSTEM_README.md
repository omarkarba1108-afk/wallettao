# WalletTao Loading System

A professional full-screen loading overlay with yin-yang inspired animations built with Next.js, Tailwind CSS, and Framer Motion.

## ✨ Features

### 🎨 Visual Design
- **Full Viewport Overlay**: Covers entire screen with z-index 9999
- **Vertical Split**: Left half black (#0B0B0C), right half white (#FFFFFF)
- **Yin-Yang Dots**: White dot on black half, black dot on white half
- **WalletTao Wordmark**: Centered at the split with subtle opacity

### 🎭 Animations
- **Stretch Morphing**: Dots smoothly transform between circle → horizontal oval → circle → vertical oval → circle
- **Mirrored Motion**: Left dot stretches horizontally when right dot stretches vertically (yin-yang mirror)
- **Glow Effects**: Soft pulsing halos around each dot (white glow on left, black glow on right)
- **Smooth Transitions**: 0.35s fade-in, 0.35s fade-out with easeOut timing

### ♿ Accessibility
- **Screen Reader Support**: `role="status"`, `aria-busy="true"`, `aria-live="polite"`
- **Reduced Motion**: Respects `prefers-reduced-motion` with static dots or gentle opacity pulse
- **Visually Hidden Label**: "Loading WalletTao…" for screen readers

### 🎛️ Behavior
- **First Visit Only**: Uses localStorage to show only on first visit
- **Auto-Hide**: Automatically hides after 1.5 seconds (configurable)
- **Programmatic Control**: Can be forced to show/hide via context

## 🏗️ Architecture

### Components

#### `LoadingScreen.tsx`
Main overlay component with animations:
```tsx
<LoadingScreen show={show} onFinish={hide} />
```

#### `LoaderProvider.tsx`
Context provider with hook:
```tsx
const { show, hide, forceShow } = useInitialLoader();
```

#### `LoaderDemo.tsx`
Development controls for testing (remove in production)

### Configuration

#### `tailwind.config.js`
Custom keyframes and animations:
- `glowPulse`: Subtle glow effect
- `stretchHorizontal`: Horizontal morphing
- `stretchVertical`: Vertical morphing
- `ink` color: Custom black (#0B0B0C)

## 🚀 Usage

### Basic Integration
```tsx
// app/layout.tsx
import { LoaderProvider, useInitialLoader } from "./components/LoaderProvider";
import { LoadingScreen } from "./components/LoadingScreen";

function LoaderMount() {
  const { show, hide } = useInitialLoader();
  return <LoadingScreen show={show} onFinish={hide} />;
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LoaderProvider>
          <LoaderMount />
          {children}
        </LoaderProvider>
      </body>
    </html>
  );
}
```

### Programmatic Control
```tsx
import { useInitialLoader } from "./components/LoaderProvider";

function MyComponent() {
  const { show, hide, forceShow } = useInitialLoader();
  
  return (
    <div>
      <button onClick={forceShow}>Show Loader</button>
      <button onClick={hide}>Hide Loader</button>
    </div>
  );
}
```

### Custom Configuration
```tsx
<LoaderProvider 
  firstVisitKey="my_custom_key"
  autoHideMs={2000}
>
  {children}
</LoaderProvider>
```

## 🎯 Props

### LoadingScreen
- `show: boolean` - Controls visibility
- `onFinish?: () => void` - Called after exit animation completes

### LoaderProvider
- `firstVisitKey?: string` - localStorage key (default: "wallettao_seen_loader")
- `autoHideMs?: number` - Auto-hide delay (default: 1500ms)

### useInitialLoader Hook
Returns:
- `show: boolean` - Current visibility state
- `hide: () => void` - Hide the loader
- `forceShow: () => void` - Force show the loader

## 🎨 Customization

### Colors
Update `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      ink: "#0B0B0C", // Custom black
    },
  },
}
```

### Animation Duration
Modify `DURATION` constant in `LoadingScreen.tsx`:
```tsx
const DURATION = 1.8; // seconds
```

### Dot Size
Change dot dimensions in `LoadingScreen.tsx`:
```tsx
className="absolute h-16 w-16 rounded-full" // Current: 64px
```

## 🧪 Testing

### Development Controls
The `LoaderDemo` component provides testing controls:
- Force show loader
- Hide loader
- View current status

### First Visit Testing
Clear localStorage to test first visit behavior:
```js
localStorage.removeItem('wallettao_seen_loader');
```

### Reduced Motion Testing
Test accessibility by enabling reduced motion in browser dev tools.

## 📱 Browser Support

- ✅ Chrome/Edge (Framer Motion + CSS Grid)
- ✅ Firefox (Framer Motion + CSS Grid)
- ✅ Safari (Framer Motion + CSS Grid)
- ✅ Mobile browsers (Touch-friendly)

## 🚀 Production Notes

1. **Remove Demo Component**: Delete `LoaderDemo` from main page
2. **Optimize Images**: Ensure any logo images are optimized
3. **Test Performance**: Verify smooth 60fps animations
4. **Accessibility Audit**: Test with screen readers

---

Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion

