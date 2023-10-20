import SimpleView from '@/components/SimpleView'
import DesktopView from '../components/DesktopView'
import MobileView from '../components/MobileView'
import SimpleMobileView from '../components/SimpleMobileView'

export default function Home() {
  return (
    <>
      <div className="block md:hidden">
        {/* Mobile View */}
        <SimpleMobileView />
      </div>

      <div className="hidden md:block">
        {/* Desktop View */}
        <SimpleView />
      </div>
    </>
  )
}
