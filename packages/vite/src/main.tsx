import { MswProvider } from '@/context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import reactDom from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  const queryClient = new QueryClient();
  reactDom.createRoot(rootElement).render(
    <MswProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </MswProvider>,
  );
}
