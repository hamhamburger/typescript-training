
import SingleForm from './SingleForm'
import FormWithOriginalComponent from './FormWithOriginalComponent'


const FormWithOriginalComponentPage = ():JSX.Element => {
  
  return (
    <div>
      <p>MUIコンポーネント</p>
      <SingleForm />
      <p>オリジナルコンポーネント</p>
      <FormWithOriginalComponent />
    </div>
  )

}

export default FormWithOriginalComponentPage