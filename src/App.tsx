import { ThemeProvider } from './theme/ThemeProvider';
import { Button } from './components/Button';
import { Card } from './components/Card';

function App(): JSX.Element {
  return (
    <ThemeProvider defaultTheme="my-brand">
      <div className="min-h-screen bg-background p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold text-foreground">
            My Custom Branded App
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Primary Actions</h2>
              <div className="space-y-3">
                <Button variant="primary" size="md">
                  Primary Button
                </Button>
                <Button variant="secondary" size="md">
                  Secondary Button
                </Button>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Status Actions</h2>
              <div className="space-y-3">
                <Button variant="success" size="md">
                  Success Button
                </Button>
                <Button variant="warning" size="md">
                  Warning Button
                </Button>
                <Button variant="error" size="md">
                  Error Button
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
