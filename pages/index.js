import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Loader from '../Components/Loader'
import toast from 'react-hot-toast'

export default function Home() {
  return (
  <>
    <button onClick={() => toast.success('hello toast!')}>Toast me!</button>
  </>
  )
}
