import React from 'react'
const Plans = () => {

    return (
        <div className=''>
            <p className='flex justify-center text-blue-800 font-bold'>Pricing</p>
            <p className='font-bold text-4xl flex justify-center'>Pricing plans for teams of all sizes</p>
            <p className='w-[600px] ml-[400px]  mt-[20px] text-center leading-8' > distinctio et nulla eum soluta  et  neque labore quibusaam. saepe et quasi iusto modiveli ut non voluptasin.
                explicadom id ut laborm</p>

            {/* 1 */}
            <div className='h-[500px] w-[400px] border-b border-l border-t ml-[50px] p-[40px]  rounded-b-md rounded-t-lg mt-[180px]'>
                <p className='font-bold leading-10'>Freelancer</p>
                <p className='leading-5'>the essentials to provide your  best work for clients</p>
                <p className='font-bold text-5xl leading-relaxed'>$24</p>
                <p className='mt-[-40px] ml-[90px] font-semibold'>/month</p>
                <div className='flex gap-2 mt-[20px] leading-10'>
                    <p className='mt-[15px] text-blue-800'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </p>
                    <p>5 products</p>
                </div>

                <div className='flex gap-2 leading-10'>
                    <p className=' mt-[15px] text-blue-800'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </p>
                    <p className=''>Up to 1,000 subscribers</p>
                </div>


                <div className='flex gap-2 leading-10'>
                    <p className=' mt-[15px] text-blue-800'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </p>
                    <p>Basic analytics</p>
                </div>


                <div className='flex gap-2 leading-10'>
                    <p className=' mt-[10px] text-blue-800'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </p>
                    <p>48-hour support response time</p>
                </div>


                <div className=' '>
                    <button className='h-[40px] w-[300px] border border-blue-200 mt-[30px]  rounded-xl text-blue font-semibold'>Buy plan</button>
                </div>
            </div>


            {/* 2 */}

            <div className='h-[550px] w-[400px]  border-l border-r  border-t  border-b ml-[450px] mt-[-550px] rounded-t-xl ml-[310px] p-[40px]'>
                <div className='flex justify-between mt-[10px] ' >
                    <p className='text-violet-700 font-bold'>Startup</p>
                    <p className='text-violet-700 font-bold h-[30px] w-[120px] border-2 rounded-2xl bg-blue-100 text-center'>Most popular</p>
                </div>
                <p className='w-[350px] mt-[20px]'>A plan that scales with your rapidy growing busines </p>
                <p className=' font-bold text-5xl mt-[20px] '>$32</p>
                <p className='mt-[-20px] ml-[90px] font-semibold'>/month</p>

                {/* 1 */}
                <div className='flex gap-2 leading-10 mt-[20px]'>
                    <p className=' mt-[15px] text-blue-800'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </p>
                    <p>25products</p>
                </div>
                {/* 2 */}
                <div className='flex gap-2 leading-10'>
                    <p className=' mt-[15px] text-blue-800'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </p>
                    <p>Up to 10,000 subscribers</p>
                </div>


                {/* 3 */}

                <div className='flex gap-2 leading-10'>
                    <p className=' mt-[15px] text-blue-800'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </p>
                    <p>Advanced analytics</p>
                </div>

                {/* 4    */}

                <div className='flex gap-2 leading-10'>
                    <p className=' mt-[15px] text-blue-800'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </p>
                    <p>24-hour support response time</p>
                </div>

                {/* 5 */}

                <div className='flex gap-2 leading-10'>
                    <p className=' mt-[15px] text-blue-800'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </p>
                    <p>Marketing automations</p>
                </div>


                <div>
                    <button className='h-[40px] w-[320px] border border-blue-200 mt-[20px] bg-blue-800 rounded-xl text-white font-semibold'>Buy plan</button>
                </div>


            </div>

            {/* 3 */}
            <div className='h-[500px] w-[400px]  ml-[850px] mt-[-500px]  border-r border-t border-b  rounded-r-xl p-[40px]'>
                <p className='font-bold'>Enterprise</p>
                <p className='mt-[20px]'>Dedicated support and infrastructure for your company.</p>
                <p className='font-bold text-5xl mt-[20px]'>$48</p>
                <p className='mt-[-20px] ml-[90px] font-semibold'>/month</p>

                {/* 1     */}
                <div className='flex gap-2 mt-[20px] '>
                    <p className=' mt-[10px] text-blue-800'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </p>
                    <p>Unlimited products</p>
                </div>

                {/* 2 */}
                <div className='flex gap-2 leading-10'>
                    <p className=' mt-[15px] text-blue-800'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </p>
                    <p>Unlimited subscribers</p>
                </div>
                {/* 3 */}
                <div className='flex gap-2 leading-10'>
                    <p className=' mt-[15px] text-blue-800'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </p>
                    <p>Advanced analytics</p>
                </div>
                {/* 4 */}
                <div className='flex gap-2 leading-10'>
                    <p className=' mt-[15px] text-blue-800'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </p>
                    <p className='w-[380px]'>1-hour,dedicated support response time</p>

                </div>
                {/* 5 */}
                <div className='flex gap-2 leading-10'>
                    <p className=' mt-[15px] text-blue-800'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </p>
                    <p>Marketing automations</p>
                </div>


                <div>
                    <button className='h-[40px] w-[300px] border border-blue-200 mt-[30px] ml-[20px] rounded-xl text-blue font-semibold'>Buy plan</button>
                </div>
            </div>















        </div >



    )
}
export default Plans