interface InputProps{
    type: string
    title: string
    placehold: string
    className?: string
}

export default function FormInput(props: InputProps){
        {
            if(props.type !== 'textarea'){
                return(
                    <div className="flex flex-col gap-y-2">
                        <label>{props.title}</label>
                        <input 
                            type={props.type} 
                            name={props.title.toLowerCase()}
                            placeholder={props.placehold}
                            className={`border-b-2 border-gray-300 h-9 text-md p-3 outline-blue-400 rounded-sm ${props.className}`}
                        />
                    </div>
                )
            }else{
                return(
                    <div className="flex flex-col gap-y-2">
                        <label>{props.title}</label>
                        <textarea 
                            name={props.title.toLowerCase()} 
                            rows={5}
                            placeholder={props.placehold}
                            className={`rounded-sm border-b-2 border-gray-300 p-2 text-md outline-blue-400 ${props.className}`}
                        >
                        </textarea> 
                    </div>
                )
            }
        }
}