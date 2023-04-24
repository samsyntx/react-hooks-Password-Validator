In this project, let's build a **Password Validator** by applying the concepts we have learned till now.

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js-hooks/password-validator-output-v0.gif" alt="password validator output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js-hooks/password-validator-sm-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Empty Password](https://assets.ccbp.in/frontend/content/react-js-hooks/password-validator-empty-password-lg-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Invalid Password](https://assets.ccbp.in/frontend/content/react-js-hooks/password-validator-invalid-password-lg-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Valid Password](https://assets.ccbp.in/frontend/content/react-js-hooks/password-validator-valid-password-lg-output.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- When the app is opened,
  - Error message should be displayed
- When a non-empty value is provided in the input,
  - If provided value length is **less than eight characters**, then the error message should be displayed
  - If provided value length is **greater than or equal to eight characters**, then the error message should not be displayed

</details>

<details>
<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/components/PasswordValidator/index.js`
- `src/components/PasswordValidator/styledComponents.js`
</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- **Styled Components** should be used for styling purposes
- **Roboto** should be applied as `font-family` for **Password Validator** heading

</details>

### Resources

<details>
<summary>Colors</summary>
<br/>

**Background Colors**:

<div style="background-color: #24263c; width: 150px; padding: 10px; color: white">Hex: #24263c</div>
<div style="background-color: #edeeff; width: 150px; padding: 10px; color: black">Hex: #edeeff</div>
<div style="background-color: #383a4e; width: 150px; padding: 10px; color: white">Hex: #383a4e</div>
<div style="background-color: #475569; width: 150px; padding: 10px; color: white">Hex: #475569</div>
<br/>

**Box Shadow Color**:

<div style="background-color: #434451; width: 150px; padding: 10px; color: white">Hex: #434451</div>
<br/>

**Text Colors**:

<div style="background-color: #ef4444; width: 150px; padding: 10px; color: black">Hex: #ef4444</div>
<div style="background-color: #f8fafc; width: 150px; padding: 10px; color: black">Hex: #f8fafc</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<br/>

</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
