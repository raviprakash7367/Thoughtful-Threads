import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to Explore more ?
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout these resources on Medium !!
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://medium.com/zee-palm/top-10-learning-resources-for-software-developers-673b147b7533" target='_blank' rel='noopener noreferrer'>
                    Go to external resources 
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://www.corporatevision-news.com/wp-content/uploads/2022/04/Software-Development.jpg
" />
        </div>
    </div>
  )
}