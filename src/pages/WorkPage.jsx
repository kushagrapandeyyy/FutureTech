import { lazy, Suspense } from 'react'
import OffMenuGallery from '../components/OffMenuGallery'

const WorkFigmaHero = lazy(() => import('../components/WorkFigmaHero'))

export default function WorkPage() {
  return (
    <>
      <Suspense fallback={null}>
        <WorkFigmaHero />
      </Suspense>
      <OffMenuGallery
        introEyebrow="Selected Work"
        introTitle="Work that ships, scales, and sticks."
        introLead="A focused look at recent engagements across fintech, infrastructure, AI products, and high-performance digital experiences."
      />
    </>
  )
}