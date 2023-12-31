import { TextareaAutosize } from "@mui/material";


const Textarea= ({
id,
label,
disabled,
formatPrice,
register,
errors,
}) => {

  
  return (
    <div
    className="w-full relative"
    >
        <TextareaAutosize minRows={5} maxRows={9} id={id} disabled={disabled} required {...register(id)} placeholder=" " className={`
        resize-none
        bg-second-bg dark:bg-second-dark-bg
        peer w-full p-4 pt-6 font-normal border-2 rounded-md outline-none focus:outline-none transition disabled:opacity-70 disabled:cursor-not-allowed pl-4 
        ${errors[id]? "border-rose-500":"border-neutral-300"}
        ${errors[id]? "focus:border-rose-500":"focus:border-neutral-400"}
        `} />

        <label className={`
        absolute
        text-md
        duration-150
        transform
        -translate-y-3.5
        top-5
        z-10
        origin-[0]
        ${formatPrice? "left-9":"left-4"}
        peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0
        peer-focus:scale-75
        peer-focus:-translate-y-4
        ${errors[id]?"text-rose-500":"text-zinc-400"}
        `}>
            {label}
        </label>
    </div>
  )
}

export default Textarea