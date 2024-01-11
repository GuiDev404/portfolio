import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const ImgZoomeable = ({children}) => {
  return <Zoom>
    {children}
  </Zoom>
}

export default ImgZoomeable