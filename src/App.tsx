import { Suspense, ErrorBoundary } from 'solid-js'
import { Routes, Route } from '@solidjs/router'
import { QueryClient, QueryClientProvider } from '@tanstack/solid-query'

import Home from './pages/home'
import Fetching from './pages/fetching'

const queryClient = new QueryClient()

const App = () => {
  return (
    <Suspense>
      <ErrorBoundary fallback>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" component={Home} />
            <Route path="/fetching" component={Fetching} />
          </Routes>
        </QueryClientProvider>
      </ErrorBoundary>
    </Suspense>
  );
};

export default App;
