import { Metadata } from 'next'

export const dynamic = 'force-static' // force static generation (this occurs by default if there is no data fetching but we are explicit here for documentation purposes)

export const metadata: Metadata = {
  title: 'About us',
  description: 'About NextSpace',
}

export default async function About() {
  return (
    <main>
      <h1>About us</h1>
      <p>We are a social media company that wants to bring people together!</p>
    </main>
  )
}
