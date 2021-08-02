import Image from 'next/image'
import staticImg from 'public/static.png'

export default function Static() {
  return (
    <div className='absolute items-center h-screen w-screen animate-jumble opacity-5'>
      <Image src={staticImg} layout='fill' objectFit='cover' />
    </div>
  )
}
