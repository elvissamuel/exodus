import MainLayout from '../components/layouts/mainLayout'
import Layout from '../components/layouts/layout'
import '../styles/globals.css'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'


const queryClient = new QueryClient()


function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
  
  <Layout>

      <Component {...pageProps} />
  </Layout>


    </QueryClientProvider>
   
  
  )
}

export default MyApp
