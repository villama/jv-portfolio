import Router from 'next/router'
import { useEffect } from 'react'

export default function ResumeRedirectPage() {
  useEffect(() => {
    Router.push('/jv-resume.pdf')
  })

  return <div></div>
}
