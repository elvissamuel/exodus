import DashboardLayout from '../../components/layouts/dashboardLayout';

const Profile =()=>{

    return (
        

    <div className='pl-[2%] ' >
            <div>
            <h1 className='text-[32px] font-semibold '>Profile</h1>
            </div>
            <div className='grid grid-cols-2 pt-6 bg-white mt-10 rounded-lg'> 
                        <div className='pl-12 pt-2'>
                            <form action="">
                                <div>

                                <h1 className= 'text-[#555555]' >Name</h1>
                            <input
                            type="text"
                        
                            name="Name "
                            id="name"
                            placeholder="Name"
                            className=" w-full lg:w-[80%] rounded-md border border-black-200 mt-1 bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                                </div>
                                
                                <div className='pt-5'>

                                <h1 className= 'text-[#555555]' >Email</h1>
                            <input
                            type="text"
                        
                            name="Name "
                            id="name"
                            placeholder="Name"
                            className=" w-full lg:w-[80%] rounded-md border border-black-200 mt-1 bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                                </div>

                                <div className='pt-5'>

                                <h1 className= 'text-[#555555]' >Phone Number</h1>
                            <input
                            type="text"
                        
                            name="Name "
                            id="name"
                            placeholder="Name"
                            className=" w-full lg:w-[80%] rounded-md border border-black-200 mt-1 bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                                </div>

                                <div className='pt-5 '>

                                <h1 className= 'text-[#555555]' >City</h1>
                            <input
                            type="text"
                        
                            name="Name "
                            id="name"
                            placeholder="Name"
                            className=" w-full lg:w-[80%] rounded-md border border-black-200 mt-1 bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />

                            
                                </div>
                                <div className='pt-10 pb-12'>

                            <button  className='bg-[#3E4095] hover:bg-[#5b5ca0] w-[40%] h-[45px] text-white rounded-3xl'> 
                                Save Changes 
                            </button>
                            </div>
                            

                            </form>

                        </div>
                    <div>
                    <div>
                        <h1 className='text-[#555555] text-base pt-6'>Profile Image</h1>
                    </div>
                    <div className='flex'>
                        <h1 className='border  border-black-200  rounded-full w-[100px] h-[100px] pt-8 text-center font-semibold text-2xl mt-3'>EA</h1><h1 href='#' className='mt-3 pt-8 pl-3 text-sm text-[#3E4095] font-semibold hover:underline' >Upload Image</h1>
                    </div>
                    </div>
                </div>
            </div>
        
    )
}

export default Profile