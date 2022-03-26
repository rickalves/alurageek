import logo from '../assets/images/logo.png'
import Button from './Button'
import FormInput from './FormInput'

export default function(props:any){
    return(
        <footer className={`grid grid-cols-12 bg-indigo-50`}>
            <section className='flex flex-col items-center font-medium py-3 gap-y-5 md:col-span-6 col-span-12'>
                <img src={logo} alt="Logo do site" className={`w-56`} />
                <a href="#">Quem somos nós</a>
                <a href="#">Política de privacidade</a>
                <a href="#">Programa de fidelidade</a>
                <a href="#">Nossas lojas</a>
                <a href="#">Quero ser franqueado</a>
                <a href="#">Anuncie aqui</a>
            </section>
            <section className='md:col-span-6 col-span-12 flex flex-col gap-2 p-4'>
                <h2 className='font-bold text-xl'>Fale conosco</h2>
                <form className='flex flex-col gap-y-2'>
                    <FormInput title='Nome' placehold='Escreva seu nome...' type='text' />
                    <FormInput title='Mensagem' placehold='Escreva sua mensagem...' type='textarea' />
                    <div>
                        <Button title='Enviar mensagem' type='primary' className='h-10' />
                    </div>
                </form>
            </section>
            <section className='col-span-12 bg-white p-6'>
                <p>&copy; Desenvolvido por <span className='font-bold text-blue-500'>Henrique Alves</span> 2022</p>
            </section>
        </footer>
    )
}