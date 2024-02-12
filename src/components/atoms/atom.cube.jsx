import {
  WrappCube,
  InnerCubeOne,
  OuterCube,
  InnerCubeTwo
} from '../../styled-elements/loader.elements'

const CubeLoader = () => {
  return (
    <WrappCube>
      <OuterCube>
        <InnerCubeOne>
          <InnerCubeTwo />
        </InnerCubeOne>
      </OuterCube>
    </WrappCube>
  )
}

export default CubeLoader