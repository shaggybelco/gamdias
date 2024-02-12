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
import { useSignup } from '../hooks/useSignup'
import { FcGoogle } from 'react-icons/fc'
import { useState } from 'react'

const Signup = () => {
  const { signup, error, isLoading } = useSignup()
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
    console.log({ form })
    await signup(email, password)
  }

  return (
    <ContainerFluid>
      <FormContainer>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <TextWrapp>
          <TextDesc style={{ color: '#FBFFF1' }}>REGISTRATION</TextDesc>
          <Devider>/</Devider>
          <TextDesc>LOGIN</TextDesc>
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
            Signup
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
          Signup with Google
        </IconButton> */}
        <TermParagraph style={{marginTop: '2em'}}>
          Have an account? {' '}
          <SpanLink to='/login'>Login</SpanLink>
        </TermParagraph>
      </FormContainer>
      <ImageWrapper>
        <Image src='https://wallpaperaccess.com/full/682082.jpg' alt='watchdogs2' />
      </ImageWrapper>
    </ContainerFluid>
  )
}

export default Signup