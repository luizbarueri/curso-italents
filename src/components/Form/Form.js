import Button from '../Button/Button';
import FormInput from '../FormInout/FormInput';
import './form.css';

const Form = () => {
    return (
        <form className='form'>
            <FormInput inputName="Nome" id="nome" type="text"/>
            <FormInput inputName="Email" id="email" type="email"/>

            <Button type="submit" text="Enviar"/>
            <Button type="input" text="cancelar"/>
        </form>
    )
}

export default Form;
