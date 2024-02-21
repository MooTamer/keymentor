import React from 'react'
import pp from "../../assets/pp.jpg"

const stats = () => {
    return (
        <div className="flex relative justify-center mx-8 my-4 items-center min-h-44 max-w-7xl">
            <div className="stats absolute shadow grid mx-auto w-3/4  shadow-[0_0_220px_-22px_rgba(184,80,66,1)]">

                <div className="stat w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title">Total Trainees</div>
                    <div className="stat-value text-primary">25.6K</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title ">Our Website Views</div>
                    <div className="stat-value text-primary">2.6M</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
                    <div className="stat-figure text-primary">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src={pp} />
                            </div>
                        </div>
                    </div>
                    <div className="stat-title ">Performance</div>
                    <div className="stat-value text-primary">86%</div>
                    <div className="stat-title">Rate Increase</div>
                    <div className="stat-desc text-secondary">31 tasks remaining</div>
                </div>
            </div>
        </div>
    )
}
export default stats