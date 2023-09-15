import { heroBannerIntroduccion } from '@/assets/texts'
import { midText } from '@/assets/texts'
import { information } from '@/assets/texts'
import { socialMedia } from '@/assets/texts'
import HeroBanner from './heroBanner/heroBanner'
import MidText from './midText/MidText'
import Information from './information/Information'
import SocialMedia from './socialMedia/socialMedia'

export default function IntroduccionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const heroBannerIntroduccionData = heroBannerIntroduccion[0]
  const midTextData = midText[0]
  const socialMediaData = socialMedia[0]
  
  return (
    <div>
      <HeroBanner {...heroBannerIntroduccionData} />
      <MidText {...midTextData}/>
      {information.map((info, index) => (
        <Information key={index} {...info} className={index % 2 ? 'reverse' : ''}/>
      ))}
      <SocialMedia {...socialMediaData}/>
      {children}
    </div>
  )
}
