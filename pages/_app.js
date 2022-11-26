import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import {Hydrate, QueryClient, QueryClientProvider} from '@tanstack/react-query'

function MyApp({Component, pageProps}) {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
