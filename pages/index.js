import Head from 'next/head'
import Image from 'next/image'
import { NavBar } from '../components/elements/navbar'
import MainLayout from '../components/layouts/mainLayout'
import styles from '../styles/Home.module.css'
import { MenuIcon } from '../components/svg'
import { ContainerFlex, Container, ContainerGrid } from '../components/elements/containers';
import Link from 'next/link'
import { Button } from '../components/elements/button'
import { useEffect, useState } from 'react'
import store from 'store'
import { useRouter } from 'next/router'
import { useMutation } from 'react-query'
import { pingUser } from '../apicalls/auth'
export default function Home() {

  const [currentUser, setCurrentUser]= useState('')
  // const setCurrentUser = UserStore((state)=>state.setCurrentUser)
  const user = store.get('currentUser')

  const{mutate} = useMutation(pingUser , {
    onError:(e)=>{
      console.log('error', e)
      store.remove('currentUser')
    },
    onSuccess: (data)=>{
      // console.log('success', data)
      
      setCurrentUser(user)
    }
  })
  // const confirmUser = useQuery('pingUser',ping)
  useEffect( ()=>{
if(user){  
 mutate(user.access_token)}else{
  mutate('xxx')
 }
  }, [])





  useEffect(()=>{
    store.set('readyToPrint', {})
  })
  return (
    <div className={styles.container}>
      <Head>
        <title>Books By MagicWand</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
       
      </Head>

    <>
    <Container classes='mt-[100px] md:mt-[40px] lg:mt-[60px]'>

         <h1 className='text-white text-center mediumText' >What will you like to print?</h1>
    </Container>

    <ContainerGrid gridGap='gap-3' gridCols='md:grid-cols-2 lg:grid-cols-3' classes='mt-[10px] md:mt-[50px] lg:mt-[100px] '  width='80%'>
     
<div className='bg-white rounded-lg h-[30vh] md:h-[280px] p-5 relative hover:bg-blue-100 mb-8 md:mb-[0px]'>
<Link href='/project_readiness/#book' >
  <img src='/img/book.png' className='mx-auto ' />
  </Link>
     <Link href='/project_readiness/#book' >
  <h1 className='text-blue block absolute bottom-[10%] left-[50%] translate-x-[-50%] font-bold w-[60%] text-center'>Books</h1>
</Link>
</div>
   
<div className='bg-white rounded-lg h-[280px] p-5 relative hover:bg-blue-100 mb-8 md:mb-[0px]'>
<Link href='/project_readiness/#magazine' >
  <img src='/img/magazine.png'className='mx-auto '  />
  </Link>
     <Link href='/project_readiness/#magazine' >
  <h1 className='text-blue block absolute bottom-[10%] left-[50%] translate-x-[-50%] font-bold w-[60%] text-center'>Magazines</h1>
</Link>
</div>
<div className='bg-white rounded-lg h-[280px] p-5 relative hover:bg-blue-100 mb-8 md:mb-[0px]'>
  <Link href='/project_readiness/#stationary' >
  <img src='/img/stationery.png' className='mx-auto ' />
     </Link>
     <Link href='/project_readiness/#stationary' >
  <h1 className='text-blue block absolute bottom-[10%] left-[50%] translate-x-[-50%] font-bold w-[60%] text-center'>Office Stationaries</h1>
</Link>
</div>

    </ContainerGrid>
   
    </>

        
    </div>
  )
}