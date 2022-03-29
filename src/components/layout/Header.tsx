import Button from '../Button'
import logo from '../../assets/images/logo.png'
import banner from '../../assets/images/banner.jpg'
import { SearchIcon } from '../Icons'
import FormInput from '../FormInput'
import { Link } from 'react-router-dom'

interface HeaderProps {
    hiddenBanner?: boolean
}

export default function Header(props: HeaderProps) {
    return (
        <header className={`grid grid-cols-12 gap-x-2 overflow-hidden`}>
            <section className='col-span-4 md:col-span-3 flex items-center pl-4 xl:pl-36 xl:h-24'>
                <Link to="/">
                    <img src={logo} alt="Logo do site" className={`h-8 md:h-10 xl:h-12`} />
                </Link>
            </section>
            <section className={`flex md:flex-row-reverse justify-around 
            items-center p-4 md:p-3 col-span-8 md:col-span-9 md:justify-between xl:pr-36`
            }>
                <Link to="login">
                    <Button title='Login' type="outline" className='md:mr-6' />
                </Link>
                <form className='flex'>
                    <FormInput
                        title=''
                        placehold='O que deseja encontrar?'
                        type='text'
                        className='border-none bg-gray-100 rounded-full text-sm p-3 w-72 xl:w-96 hidden md:flex'
                    />
                    <Button
                        type="icon"
                        className='md:-ml-12 z-10 md:mt-3.5 text-gray-400'>
                        {SearchIcon}
                    </Button>
                </form>

            </section>
            <section className={`col-span-12 overflow-hidden xl:h-72 ${props.hiddenBanner ? 'hidden' : ''}`}>
                <section className='flex-col gap-y-3 mt-56 absolute hidden md:flex xl:hidden text-white px-6'>
                    <h1 className='text-5xl font-bold'>Dezembro Promocional</h1>
                    <h2 className='font-semibold text-xl'>Produtos selecionados com 33% de descontos</h2>
                    <Button title='Ver Consoles' type='primary' className='w-36 h-12' />
                </section>
                <img src={banner} alt="Banner do Site" className='w-full xl:-mt-48' />
            </section>
        </header>
    )
}