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
  const [isError, errorUpdate] = useState(true)

  const passwordInputChanged = event => {
    const userInputLength = userInput.length
    if (userInputLength < 8) {
      errorUpdate(true)
      newInput(event.target.value)
    } else {
      errorUpdate(false)
      newInput(event.target.value)
    }
  }

  return (
    <CompleteValidatorContainer>
      <InsideValidateContainer>
        <ValidateHeading>Password Validator</ValidateHeading>
        <ValidatorParagraph>
          Check how strong and secure is your password
        </ValidatorParagraph>

        <InputPasswordContainer
          onChange={passwordInputChanged}
          type="password"
          value={userInput}
        />
        {isError && (
          <PasswordErrorMsg>
            Your password must be at least 8 characters
          </PasswordErrorMsg>
        )}
      </InsideValidateContainer>
    </CompleteValidatorContainer>
  )
}

export default PasswordValidator
