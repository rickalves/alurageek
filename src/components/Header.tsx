import Button from './Button'
import logo from '../assets/images/logo.png'
import banner from '../assets/images/banner.jpg'
import { SearchIcon } from './Icons'
import FormInput from './FormInput'

export default function Header(props: any) {
    return (
        <header className={`grid grid-cols-12 gap-x-2`}>
            <section className='col-span-4 md:col-span-3 flex items-center pl-4'>
                <img src={logo} alt="Logo do site" className={`h-8 md:h-10`} />
            </section>
            <section className={`flex md:flex-row-reverse justify-around 
             items-center p-4 md:p-3 col-span-8 md:col-span-9 md:justify-between`
            }>
                <Button title='Login' type="outline" className='md:mr-6' />
                <Button
                    type="icon"
                    className='md:-ml-44 z-10 md:mt-2 text-gray-400'>
                    {SearchIcon}
                </Button>
                <form className='hidden md:flex'>
                    <FormInput
                        title=''
                        placehold='O que deseja encontrar?'
                        type='text'
                        className='border-none bg-gray-100 rounded-full text-sm p-3 w-72'
                    />

                </form>
            </section>
            <section className='col-span-12'>
                <section className='flex-col gap-y-3 mt-56 absolute hidden md:flex text-white px-6'>
                    <h1 className='text-5xl font-bold'>Dezembro Promocional</h1>
                    <h2 className='font-semibold text-xl'>Produtos selecionados com 33% de descontos</h2>
                    <Button title='Ver Consoles' type='primary' className='w-36 h-12' />
                </section>
                <img src={banner} alt="Banner do Site" />
            </section>
        </header>
    )
}