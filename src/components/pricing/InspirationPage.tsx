
import React from 'react'
import InspirationComp from './inspirationComp'
import InspirationNo from './inspirationNo'

type Props = {}

const InspirationPage = (props: Props) => {
  return (
    <div className='w-full flex flex-col gap-5'>
          <div className='flex flex-col gap-10'>
            <p className='text-5xl text-zinc-800 text-center'>So many reasons to start</p>
            <div className='w-full flex justify-around'>
                <InspirationComp src='/value-prop-teach.jpg' title='Teach your way' para='Publish the course you want, in the way you want, and always have control of your own content.'/>
                <InspirationComp src='/value-prop-inspire.jpg' title='Inspire learners' para='Teach what you know and help learners explore their interests, gain new skills, and advance their careers.'/>
                <InspirationComp src='/value-prop-get-rewarded.jpg' title='Get rewarded' para='Expand your professional network, build your expertise, and earn money on each paid enrollment.'/>
            </div>
          </div>
          <div className='w-full flex justify-center items-center h-48 bg-indigo-500'>
          <div className='w-full flex justify-around gap-3'>
             <InspirationNo no='73M' text='Students'/>
             <InspirationNo no='75+' text='Languages'/>
             <InspirationNo no='1B' text='Enrollments'/>
             <InspirationNo no='180+' text='Countries'/>
             <InspirationNo no='16,000+' text='Enterprise customers'/>
          </div>
          </div>
    </div>
  )
}

export default InspirationPage