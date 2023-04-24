import {useState} from 'react'

import {
  CompleteValidatorContainer,
  InsideValidateContainer,
  ValidateHeading,
  ValidatorParagraph,
  InputPasswordContainer,
  PasswordErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [userInput, newInput] = useState('')

  return (
    <CompleteValidatorContainer>
      <InsideValidateContainer>
        <ValidateHeading>Password Validator</ValidateHeading>
        <ValidatorParagraph>
          Check how strong and secure is your password
        </ValidatorParagraph>

        <InputPasswordContainer type="password" value={userInput} />
        <PasswordErrorMsg>
          Your Password must be at least 8 character
        </PasswordErrorMsg>
      </InsideValidateContainer>
    </CompleteValidatorContainer>
  )
}

export default PasswordValidator
