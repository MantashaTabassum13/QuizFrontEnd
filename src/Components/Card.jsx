import React from 'react'

const Card = (props) => {
    let data = props.data
    console.log(data);
    return (
        <div>
            {/* <div className='container grid grid-cols-5 gap-10 my-5'>
                <div className="max-w-sm rounded overflow-hidden shadow-lg ">
                    <img className="w-full h-50" src={data.img} alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <button> Play Quiz</button>
                    </div>
                </div>
            </div> */}
            <img src={data.img}></img>
            </div>
            )
}

export default Card;
