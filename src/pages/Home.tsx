import Header from '../components/main/Header'
import MainContent from '../components/main/MainContent'
import CompassFunction from '../components/main/CompassFunction'
import RDNavigationFunction from '../components/main/RDNavigationFunction'
import PosterAudioFunction from '../components/main/PosterAudioFunction'
import AvatarGuideFunction from '../components/main/AvatarGuideFunction'
import Footer from '../components/main/Footer'

const home = () => {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <CompassFunction />
      <RDNavigationFunction />
      <PosterAudioFunction />
      <AvatarGuideFunction />
      <Footer />
    </div>
  )
}

export default home
