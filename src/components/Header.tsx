import Button from './Button'
import logo from '../assets/images/logo.png'
import banner from '../assets/images/banner.jpg'
import { SearchIcon } from './Icons'
import FormInput from './FormInput'

export default function Header(props: any) {
    return (
        <header className={`grid grid-cols-12 gap-x-2`}>
            <div className='col-span-4 md:col-span-3 flex items-center pl-4'>
             <img src={logo} alt="Logo do site" className={`h-8 md:h-10`} />
            </div>
            <div className={`flex md:flex-row-reverse justify-around 
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
            </div>
            <div className='col-span-12'>
                <img src={banner} alt="Banner do Site" />
            </div>
        </header>
    )
}