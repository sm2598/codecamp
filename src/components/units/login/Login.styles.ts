import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  height: 100vh;
  z-index: 5;
`
export const BackgroundIMG = styled.img`
  z-index: 0;
  opacity: 0.3;
  width: 100%;
  height: 100vh;
  position: absolute;
  user-select: none;
`
export const WrapperColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: 384px;
  width: 100%;

  height: 510px;

  z-index: 1;
`
export const WrapperRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
export const WrapperRowRemember = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;

  margin-bottom: 40px;
`
export const Label = styled.div`
  font-weight: normal;
  font-size: 16px;
  /* identical to box height, or 150% */

  display: flex;
  align-items: center;

  /* White */

  color: #FFFFFF;

  margin-left: 12px;
`
export const Title = styled.div`
  font-size: 24px;
  color: #FFFFFF;
  margin-bottom: 20px;
`
export const InputUserEmailPassword = styled.input`
  background: rgba(255, 255, 255, 0.05);
  /* White */

  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 16px;

  /* White */
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: #FFFFFF;


  max-width: 384px;
  width: 100%;

  height: 64px;

  opacity: 0.6;

  padding-left: 16px;
  margin-bottom: 20px;

  outline: none;
`
export const InputUserRememberMe = styled.input`
`
export const ButtonUserLogin = styled.button`
  
  border-radius: 16px;
  border: none;

  font-style: normal;
  font-weight: bold;
  font-size: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* Gray 4 */

  color: black;
  background: #FFD600;

  max-width: 384px;
  width: 100%;

  height: 64px;

  margin-bottom: 40px;

  cursor: pointer;
  &:active {
    background: grey;
  }
  &:disabled {
    background: #4F4F4F;
    color: #BDBDBD;
  }
`
export const Linebreak = styled.hr`
  width: 384px;
  height: 1px;

  margin-bottom: 30px;

  background: #FFFFFF;
`
export const VerticalLinebreak = styled.div`
  background: #FFFFFF;
  width: 1px;
  height: 20px;
`
export const ButtonMap = styled.button`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  /* identical to box height, or 143% */

  display: flex;
  align-items: center;
  justify-content: center;

  /* White */

  color: #FFFFFF;
  background: none;
  border: none;

  max-width: 82px;
  width: 100%;

  height: 20px;

  cursor: pointer;
  &:active {
    color: grey;
  }
`