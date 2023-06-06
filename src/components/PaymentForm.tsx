import {useForm} from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import { supabase } from '../supabaseClient';
import * as yup from "yup";


const schema = yup.object({
    FullName: yup.string().required(),
    Email: yup.string().email().required(),
    StreetAddress:yup.string().required(),
    City:yup.string().required(),
    PostCode:yup.string().min(6).max(6).required(),
    CardNo:yup.number().min(16).max(16).required(),
    CVC: yup.number().min(3).max(3).required(),
    CardExp: yup.number().min(4).max(4).required()
  }).required();
  type FormData = yup.InferType<typeof schema>;

export const PaymentForm = ()=>{

    
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
        resolver: yupResolver(schema)
      });
      

      const onSubmit = (dataForm: FormData)=>{
        console.log(dataForm);
      }
    return(
        <>
        <form onSubmit={handleSubmit(onSubmit)} className="w-[200px] mx-auto mt-10">
                <label htmlFor="FullName" className="font-semibold text-[#444444]">FullName:</label>
                <input {...register("FullName")} placeholder="John Doe" className="border-b-2 border-b-gray-200 mt-[5px] font-semibold focus:outline-none"/>
                <p className="text-red-500">{errors.FullName?.message}</p>


                <button>Submit</button>
        </form>
        </>
    )
}