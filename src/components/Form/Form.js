import Button from '../Button/Button';
import FormInput from '../FormInout/FormInput';
import './form.css';

const Form = () => {
    function handleClickSubmit() {
        console.log('Clicou no botão do formulário')
    }
    function handleClickCancelar() {
        console.log('Cancelar formulário')
    }
    return (
        <form className='form'>
            <FormInput inputName="Nome" id="nome" type="text"/>
            <FormInput inputName="Email" id="email" type="email"/>

            <div className='div-botao'>
              <Button type="submit" text="Enviar" onClick={handleClickSubmit}/>
              <Button type="button" text="cancelar" onClick={handleClickCancelar}/>
            </div>
        </form>
    )
}

export default Form;
