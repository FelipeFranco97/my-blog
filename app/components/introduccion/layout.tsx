import { heroBannerIntroduccion } from '@/assets/texts'
import { midText } from '@/assets/texts'
import HeroBanner from './heroBanner/heroBanner'
import MidText from './midText/MidText'

export default function IntroduccionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const heroBannerIntroduccionData = heroBannerIntroduccion[0]
  const midTextData = midText[0]
  return (
    <div>
      <HeroBanner {...heroBannerIntroduccionData} />
      <MidText {...midTextData}/>
      {children}
    </div>
  )
}
