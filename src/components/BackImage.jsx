import headerImageDark from '../images/bg-mobile-dark.jpg'
// import '../styleSheets/BackImage.css'
import imageDesktop from '../images/bg-desktop-dark.jpg'

export const BackImage = () => {
  return (
    // <div className='background-image-container'>
    <picture>
      <source className='imgDesk' media='(min-width: 380px)' srcSet={imageDesktop} />
      <img
        className='header-image'
        src={headerImageDark}
        alt="background image"
      />
    </picture>
    // </div>
  )
}
