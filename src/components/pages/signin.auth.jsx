import {
  ContainerFluid,
  ErrorMessage,
  Devider,
  Form,
  FormContainer,
  IconButton,
  Image,
  Input,
  InputContainer,
  Label,
  TextDesc,
  TextWrapp,
  ImageWrapper,
  ButtonDevider,
  Line,
  DeviderText,
  AnimateIcon,
  TermParagraph,
  SpanLink
} from '../../styled-elements/user.elements'
import { useSignin } from '../hooks/useSignin'
import { FcGoogle } from 'react-icons/fc'
import { useState } from 'react'

const Login = () => {
  const { signin, error, isLoading } = useSignin()
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleFormChange = (event) => {
    const updatedForm = { ...form }
    updatedForm[event.target.name] = event.target.value;

    setForm(updatedForm)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let { email, password } = form
    console.log({form})
    await signin(email, password)
  }

  return (
    <ContainerFluid>
      <ImageWrapper>
        <Image src='https://wallpaperaccess.com/full/1895228.jpg' alt='CODMW' />
      </ImageWrapper>
      <FormContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
        <TextWrapp>
          <TextDesc>REGISTRATION</TextDesc>
          <Devider>/</Devider>
          <TextDesc style={{color: '#FBFFF1'}}>LOGIN</TextDesc>
        </TextWrapp>
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <Label>Email</Label>
            <Input
              autoComplete='off'
              name='email'
              placeholder='Enter your email'
              onChange={handleFormChange}
              type='email'
              value={form.email}
            />
          </InputContainer>
          <InputContainer>
            <Label>Password</Label>
            <Input
              name='password'
              placeholder='password'
              onChange={handleFormChange}
              type='password'
              value={form.password}
            />
          </InputContainer>
          <IconButton
            type='submit'
            disabled={isLoading}
            primary
          >
            <AnimateIcon loading={isLoading} />
            Login
          </IconButton>
        </Form>
        {/* <ButtonDevider>
          <Line />
          <DeviderText>
            OR
          </DeviderText>
          <Line />
        </ButtonDevider> */}
        {/* <IconButton>
          <FcGoogle />
          Login with Google
        </IconButton> */}
        <TermParagraph style={{marginTop: '2em'}}>
          Don't have an account? {' '}
          <SpanLink to='/signup'>Signup Here</SpanLink>
        </TermParagraph>
      </FormContainer>
    </ContainerFluid>
  )
}

export default Login