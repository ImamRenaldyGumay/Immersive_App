import { FC } from 'react'
interface DetailFeedbackProps {
    // id: string,
    status: string,
    notes: string,
}

const DetailFeedback: FC<DetailFeedbackProps> = ({ status, notes }) => {
    return (
        <>
            <div className='bg-slate-200 ml-10 mb-4 border-4 pb-5 p-4'>
                <div className='flex'>
                    <div className='md:w-2/12'>
                        <div>
                            <p id='status' className='font-bold'>{status}</p>
                        </div>
                        <div>
                            <p id='user' className='font-bold'>Bagas</p>
                        </div>
                        <div>
                            <p id='date'>29-oktober-2019</p>
                        </div>
                    </div>
                    <div className='md:w-10/12'>
                        <div>
                            {notes}
                        </div>
                        <div>
                            <p className='font-bold'>Continue to Section 2</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default DetailFeedback