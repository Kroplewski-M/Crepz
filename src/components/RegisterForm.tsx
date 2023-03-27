import {useForm} from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import { supabase } from '../supabaseClient';
import * as yup from "yup";

const schema = yup.object({
    FullName: yup.string().required(),
    Email: yup.string().email().required(),
    Password: yup.string().required(),
    ConfirmPassword: yup.string().oneOf([yup.ref('Password')], 'Passwords must match')
  }).required();
  type FormData = yup.InferType<typeof schema>;

export const RegisterForm = ()=>{
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
        resolver: yupResolver(schema)
      });

      async function onSubmit(dataForm: FormData){
        try{
          const { data, error } = await supabase.auth.signUp({
            email: dataForm.Email,
            password: dataForm.Password,
          });
          if(error)throw error;
          else{
            console.log("user created!");
            addUserToTable(dataForm, data!.user!.id);
          } 
        }catch(error){ 
          console.log(error);
        }finally{
          reset();
        }
      }
      //TO DO ADD USER TO TABLE
      //CREATE USER CONTEXT
      async function addUserToTable(userInfo: FormData, userID: string){
        console.log(userID);
          try{
            const {data,error} = await supabase.from('users')
            .insert({ userID: userID, email: userInfo.Email, fullName: userInfo.FullName });
            if(error) throw error;
            else{
              console.log('user added to table');
            }
          }catch(error){
            console.log(error);
          }
    }
      return (
        <section className="bg-[#444444] w-[100%] rounded-md pb-5">
            <h1 className="text-center font-bold text-[30px]">Register</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="w-[200px] mx-auto mt-10">
                <label htmlFor="FullName" className="text-gray-400">FullName:</label>
                <input {...register("FullName")} placeholder="John Doe" 
                className={`bg-transparent border-b-2 border-b-solid  ${errors.FullName? 'border-b-red-600': 'border-b-gray-400'} mt-[5px] text-[18px] focus:outline-0 mb-5`}/>
                <p className="text-red-500 -mt-[15px]">{errors.FullName?.message}</p>
                
                <label htmlFor="Email" className="text-gray-400">Email:</label>
                <input {...register("Email")} placeholder="JohnDoe@gmail.com" 
                className={`bg-transparent border-b-2 border-b-solid  ${errors.Email? 'border-b-red-600': 'border-b-gray-400'} mt-[5px] text-[18px] focus:outline-0 mb-5`}/>
                <p className="text-red-500 -mt-[15px]">{errors.Email?.message}</p>
                
                <label htmlFor="Password" className="text-gray-400">Password:</label>
                <input {...register("Password")} type="password"
                className={`bg-transparent border-b-2 border-b-solid  ${errors.Password? 'border-b-red-600': 'border-b-gray-400'} mt-[5px] text-[18px] focus:outline-0 mb-5`}/>
                <p className="text-red-500 -mt-[15px]">{errors.Password?.message}</p>

                <label htmlFor="ConfirmPassword" className="text-gray-400">Confirm Password:</label>
                <input {...register("ConfirmPassword")} type="password" 
                className={`bg-transparent border-b-2 border-b-solid  ${errors.ConfirmPassword? 'border-b-red-600': 'border-b-gray-400'} mt-[5px] text-[18px] focus:outline-0 mb-5`} />
                <p className="text-red-500 -mt-[15px]">{errors.ConfirmPassword?.message}</p>
                <input type="submit" className="w-[100px] h-[30px] rounded-md bg-gray-300 hover:bg-gray-500 hover:cursor-pointer text-[#333333] font-bold mt-5"/>
            </form>
        </section>
      );
}