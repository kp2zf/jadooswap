import Head from 'next/head'
import Header from '../components/Header'

const style = {
  wrapper: `h-screen max-h h-min-screen w-screen bg-[#2D242F] text-white select-none flex flex-col justify-between`,
}

export default function Home() {
  return <div className={ style.wrapper }>
  <Header />
    <h2>hello</h2>
  <h2>hello</h2>

  </div>

  
}
