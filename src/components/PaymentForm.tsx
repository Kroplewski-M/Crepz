import {useForm} from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import { supabase } from '../supabaseClient';
import * as yup from "yup";


const schema = yup.object({
    FullName: yup.string().required(),
    Email: yup.string().email().required(),
    StreetNumber:yup.number().required(),
    StreetName:yup.string().required(),
    City:yup.string().required(),
    PostCode:yup.string().test('len', 'Must be exactly 6 number', val => val!=undefined? val.length === 6: val).required(),
    CardNo:yup.number().test('len', 'Must be exactly 16 numbers', val => val!=undefined? val.toString().length === 16: val).required(),
    CVC: yup.number().test('len', 'Must be exactly 3 numbers', val => val!=undefined? val.toString().length === 3: val).required(),
    CardExpMonth: yup.number().test('len', 'Must be exactly 2 numbers', val => val!=undefined? val.toString().length === 2: val).required(),
    CardExpYear: yup.number().test('len', 'Must be exactly 2 numbers', val => val!=undefined? val.toString().length === 2: val).required()

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
        <section className="pb-16">
        <form onSubmit={handleSubmit(onSubmit)} className="w-[200px] mx-auto mt-10">
                <label htmlFor="FullName" className="font-semibold text-[#444444]">FullName:</label>
                <input {...register("FullName")} placeholder="John Doe" className="border-b-2 border-b-gray-200 mt-[5px] font-semibold focus:outline-none"/>
                <p className="text-red-500 mb-5">{errors.FullName?.message}</p>

                <label htmlFor="Email" className="font-semibold text-[#444444]">Email:</label>
                <input {...register("Email")} placeholder="JohnDoe@gmail.com" className="border-b-2 border-b-gray-200 mt-[5px] font-semibold focus:outline-none"/>
                <p className="text-red-500 mb-5">{errors.Email?.message}</p>
                
                <label htmlFor="StreetNumber" className="font-semibold text-[#444444]">Street Number:</label>
                <input {...register("StreetNumber")} placeholder="58" className="border-b-2 border-b-gray-200 mt-[5px] font-semibold focus:outline-none"/>
                <p className="text-red-500 mb-5">{errors.StreetNumber?.message}</p>
                
                <label htmlFor="StreetName" className="font-semibold text-[#444444]">Street Name:</label>
                <input {...register("StreetName")} placeholder="Gerald Road" className="border-b-2 border-b-gray-200 mt-[5px] font-semibold focus:outline-none"/>
                <p className="text-red-500 mb-5">{errors.StreetName?.message}</p>

                <label htmlFor="City" className="font-semibold text-[#444444]">City:</label>
                <input {...register("City")} placeholder="London" className="border-b-2 border-b-gray-200 mt-[5px] font-semibold focus:outline-none"/>
                <p className="text-red-500 mb-5">{errors.City?.message}</p>

                <label htmlFor="PostCode" className="font-semibold text-[#444444]">Post Code:</label>
                <input {...register("PostCode")} placeholder="S764HG" className="border-b-2 border-b-gray-200 mt-[5px] font-semibold focus:outline-none"/>
                <p className="text-red-500 mb-5">{errors.PostCode?.message}</p>


                <label htmlFor="CardNo" className="font-semibold text-[#444444]">Card Number:</label>
                <input {...register("CardNo")} placeholder="1234567891011121" className="border-b-2 border-b-gray-200 mt-[5px] font-semibold focus:outline-none"/>
                <p className="text-red-500 mb-5">{errors.CardNo?.message}</p>

                <label htmlFor="CVC" className="font-semibold text-[#444444]">CVC:</label>
                <input {...register("CVC")} placeholder="567" className="border-b-2 border-b-gray-200 mt-[5px] font-semibold focus:outline-none"/>
                <p className="text-red-500 mb-5">{errors.CVC?.message}</p>

                <div className="flex space-x-5">
                    <div className="w-[45%]">
                        <label htmlFor="CardExpMonth" className="font-semibold text-[#444444]">Card Expiry Month:</label>
                        <input {...register("CardExpMonth")} placeholder="13" className="border-b-2 border-b-gray-200 mt-[5px] font-semibold focus:outline-none w-[80px]"/>
                        <p className="text-red-500 mb-5">{errors.CardExpMonth?.message}</p>

                    </div>
                    <div className="w-[45%]">
                        <label htmlFor="CardExpYear" className="font-semibold text-[#444444]">Card Expiry Year:</label>
                        <input {...register("CardExpYear")} placeholder="26" className="border-b-2 border-b-gray-200 mt-[5px] font-semibold focus:outline-none w-[80px]"/>
                        <p className="text-red-500 mb-5">{errors.CardExpYear?.message}</p>
                    </div>

                </div>
                
                <button className="font-bold w-[200px] h-[35px] bg-[#333333] text-gray-200 mt-[10px]">Complete Order</button>
        </form>
        </section>
    )
}