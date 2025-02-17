import FloatingShape from '@/app/components/landing-view';
import Style from './style.module.css';
import LandingTitle from '@/app/components/landing-title';

export default function AboutPage() {
    return(
        <main>
          <div className={Style.nav}>
          </div>
          <div className={Style.viewMain}>
            <FloatingShape />
          </div>
          <div className={Style.title}><LandingTitle></LandingTitle></div>
      </main>
    )
}