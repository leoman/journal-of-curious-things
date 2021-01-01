import React from "react"
import Loader from "react-loader-spinner"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { LoadingWrapper } from './styles'

const Loading = () => {
  return (
    <LoadingWrapper>
      <Loader
        type="Grid"
        color="#fc416a"
        height={100}
        width={100}
      />
    </LoadingWrapper>
  )
}

export default Loading;
