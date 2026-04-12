    import React, { useEffect, useState } from 'react'
    import {useForm} from "react-hook-form"
    import { apiConnector } from '../../services/apiconnector';
    import { contactusEndpoint } from '../../services/apis';
    import CountryCode from "../../data/countrycode.json"

    const ContactUsForm = () => {

        const [loading, setLoading] = useState(false);
        const {
            register,
            handleSubmit,
            reset,
            formState: {errors, isSubmitSuccessful}
        } = useForm();

        const submitContactForm = async(data) => {
            console.log("Logging Data" , data);
            try{
                setLoading(true);
                // const response = await apiConnector("POST", contactusEndpoint.CONTACT_US_API, data);
                const response = {status:"OK"};
                console.log("Logging response", response);
                setLoading(false);
            }
            catch(error) {
                console.log("Error:" , error.message);
                setLoading(false);
            }
        }

        useEffect( () => {
            if(isSubmitSuccessful) {
                reset({
                    email:"",
                    firstname:"",
                    lastname:"",
                    message:"",
                    phoneNo:"",
                })
            }
        },[reset, isSubmitSuccessful] );


        return (
        <form onSubmit={handleSubmit(submitContactForm)}>
    <div className='flex flex-col gap-8'>

        {/* first + last name */}
        <div className='flex gap-5'>
        
        <div className='flex flex-col w-full'>
            <label className="text-sm text-gray-300 mb-1" htmlFor='firstname'>First Name</label>
            <input 
            type='text' 
            name='firstname' 
            id='firstname' 
            placeholder='Enter first name' 
            className='bg-[#1f2933] border border-gray-600 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400'
            {...register("firstname", {required:true})} 
            />
            { errors.firstname && ( <span className="text-red-400 text-sm mt-1">Please enter your name</span> ) }
        </div>

        <div className='flex flex-col w-full'>
            <label className="text-sm text-gray-300 mb-1" htmlFor='lastname'>Last Name</label>
            <input 
            type='text' 
            name='lastname' 
            id='lastname' 
            placeholder='Enter last name' 
            className='bg-[#1f2933] border border-gray-600 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400'
            {...register("lastname")} 
            />
        </div>

        </div>

        {/* email */}
        <div className='flex flex-col'>
        <label className="text-sm text-gray-300 mb-1" htmlFor='email'>Email Address</label>
        <input 
            type='email' 
            name='email' 
            id='email' 
            placeholder='Enter email address' 
            className='bg-[#1f2933] border border-gray-600 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400'
            {...register("email", {required:true})} 
        />
        { errors.email && ( <span className="text-red-400 text-sm mt-1">Please enter your email</span> ) }
        </div>

        {/* phone */}
        <div className='flex flex-col'>
        <label className="text-sm text-gray-300 mb-1" htmlFor='phonenumber'>Phone Number</label>

        <div className='flex rounded-md overflow-hidden border border-gray-600 bg-[#1f2933]'>

            {/* dropdown */}
            <select 
            name='dropdown' 
            id="dropdown" 
            className='bg-[#1f2933] w-[80px] text-white px-1 py-3 border-r border-gray-600 focus:outline-none'
            {...register("countrycode", {required:true})} 
            >
            { CountryCode.map( (element , index) => {
                return (
                <option key={index} value={element.code} className="bg-[#1f2933]">
                    {element.code}
                </option>
                )
            })}
            </select>

            {/* phone input */}
            <input 
            type='number' 
            name='phonenumber' 
            id='phonenumber' 
            placeholder='12345 67890' 
            className='flex-1 bg-[#1f2933] px-4 py-3 text-white placeholder-gray-400 focus:outline-none'
            {...register("phoneNo", { 
                required:{value:true, message:"Please enter Phone Number"}, 
                maxLength: {value:10, message:"Invalid Phone Number"}, 
                minLength:{value:8, message:"Invalid Phone Number"} 
            })} 
            />
        </div>

        { errors.phoneNo && ( <span className="text-red-400 text-sm mt-1">{errors.phoneNo.message}</span> ) }
        </div>

        {/* message */}
        <div className='flex flex-col'>
        <label className="text-sm text-gray-300 mb-1" htmlFor='message'>Message</label>
        <textarea 
            name='message' 
            id='message' 
            rows="7" 
            placeholder='Enter your message here' 
            className='bg-[#1f2933] border border-gray-600 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 resize-none'
            {...register("message", {required:true})} 
        />
        { errors.message && ( <span className="text-red-400 text-sm mt-1">Please enter your message</span> ) }
        </div>

        {/* button */}
        <button 
        type='submit' 
        className='mt-4 rounded-md bg-yellow-400 hover:bg-yellow-300 transition py-3 text-[16px] font-bold text-black'
        >
        Send Message
        </button>

    </div>
    </form>

    )
    }

    export default ContactUsForm
