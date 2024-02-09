import './App.css'
import { Box } from './Styled/Box'
import { Img } from './Styled/Img'
import { Div } from './Styled/Div'
import { BStyle } from './Styled/Btn'
import { Div2 } from './Styled/Div2'
import { DivMini } from './Styled/Div'

function App() {

  return (
    <center><div>
      <Box>
        <Img><img src="https://i.artfile.ru/1920x1200_1104701_[www.ArtFile.ru].jpg" width={'100%'} height={'100%'} /></Img>

        <Div>
          <h4>Crypto Currency</h4>

          <DivMini><h6>Cryptography is a method of protecting information and communications through the.</h6></DivMini>
          <Div2>
            <BStyle>See more</BStyle>
            <BStyle btnType ="Another">Save</BStyle>
          </Div2>
        </Div>

      </Box>
    </div></center>
  )
}

export default App

// type ImgPropsType = {
//   title:string
// }
// function Img(_props:ImgPropsType) {
//   console.log("Img rendering")
//   return <ImgStyle>{_props.title}</ImgStyle>
// }
