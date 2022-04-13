interface InputProps{
    type: string
    title: string
    placehold: string
    className?: string
    name?:string
    formGroup?: string
    hiddenLabel?: boolean
    children?: any
}

export default function FormInput(props: InputProps){
        {
            if(props.type !== 'textarea'){
                return(
                    <div className={`w-full bg-white mt-2 px-2 py-2 rounded-sm ${props.formGroup}`}>
                        <label aria-readonly className={`text-gray-400 text-sm px-2 flex flex-col 
                        ${props.type === 'file' ? 'items-center' : ''}`} htmlFor={props.name}>
                            {props.hiddenLabel ? '': props.title}
                            <input 
                                id={props.name}
                                type={props.type} 
                                name={props.name}
                                placeholder={props.placehold}
                                className={`h-9 px-2 text-md outline-blue-400 rounded-sm ${props.className}`}
                            />
                            {props.children}
                        </label>
                    </div>
                    
                )
            }else{
                return(
                    <div className={`form__group flex flex-col bg-white mt-2 px-2 py-2 rounded-sm border-b-2 border-solid border-gray-400`}>
                        <label className="text-gray-400 text-sm px-2" htmlFor={props.name}>{props.title}</label>
                        <textarea 
                            name={props.name} 
                            rows={5}
                            placeholder={props.placehold}
                            className={`rounded-sm text-md px-2 pt-2 outline-blue-400 resize-none ${props.className}`}
                            
                        >
                        </textarea> 
                    </div>
                )
            }
        }
}