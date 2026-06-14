import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

interface ReactQueryClientProvider extends React.PropsWithChildren {}

const ReactQueryClientProvider = ({ children }: ReactQueryClientProvider) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  })
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default ReactQueryClientProvider
