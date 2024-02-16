import { LanguageHandle } from '@/components/provider/language-provider';
import Page from './page';
import { ThemeProvider } from '@/components/provider/theme-provider';
function App() {
  return (
    <LanguageHandle>
      <ThemeProvider defaultTheme='dark' storageKey="vite-ui-theme">
        <Page />
      </ThemeProvider>
    </LanguageHandle>
  )
}

export default App
