import logo from '../../assets/images/logo.png'
import Button from '../Button'
import FormInput from '../FormInput'

export default function (props: any) {
    return (
        <footer className={`grid grid-cols-12 bg-indigo-50 xl:pt-10 `}>
            <section className='flex flex-col xl:flex-row items-center md:items-start font-medium p-8 xl:pl-36 gap-4 xl:gap-24 md:col-span-5 col-span-12 xl:col-span-6'>
                <img src={logo} alt="Logo do site" className={`w-56`} />
                <div className='flex flex-col gap-y-8 items-center md:items-start'>
                    <a href="#">Quem somos nós</a>
                    <a href="#">Política de privacidade</a>
                    <a href="#">Programa de fidelidade</a>
                    <a href="#">Nossas lojas</a>
                    <a href="#">Quero ser franqueado</a>
                    <a href="#">Anuncie aqui</a>
                </div>
            </section>
            <section className='md:col-span-7 xl:col-span-6 col-span-12 flex flex-col gap-2  p-5 pt-10 xl:pt-5 md:pr-8 xl:pr-36 xl:pb-20'>
                <h2 className='font-bold text-xl'>Fale conosco</h2>
                <form className='flex flex-col gap-y-2'>
                    <FormInput title='Nome' placehold='Escreva seu nome...' type='text' />
                    <FormInput title='Mensagem' placehold='Escreva sua mensagem...' type='textarea' />
                    <div>
                        <Button title='Enviar mensagem' type='primary' className='h-10' />
                    </div>
                </form>
            </section>
            <section className='col-span-12 bg-white p-6 flex items-center justify-center'>
                <p>&copy; Desenvolvido por <span className='font-bold text-blue-500'>Henrique Alves</span> 2022</p>
            </section>
        </footer>
    )
}