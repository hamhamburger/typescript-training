
import SingleForm from './SingleForm'
import FormWithOriginalComponent from './FormWithOriginalComponent'


const FormWithOriginalComponentPage = ():JSX.Element => {
  
  return (
    <div>
      <p>rhf v7+MUI v5でコンポーネントで作ったフォーム</p>
      <SingleForm />
      <p>オリジナルのinputコンポーネントで作ったフォーム</p>
      <FormWithOriginalComponent />
    </div>
  )

}

export default FormWithOriginalComponentPage