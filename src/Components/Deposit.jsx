import React from 'react';
import angleleft from '../assets/angle-left.svg';
import close from '../assets/close.svg';

const Deposit = ({ isDeposit, back, handleClose }) => {
  const RoutingNumber = '2274683589';
  const AccountNumber = '11235476857885';

  const handleCopy = () => {
    navigator.clipboard.writeText(RoutingNumber).then(() => {
      alert('Routing number copied');
    });
  };

  const CopyAccountNumber = () => {
    navigator.clipboard.writeText(AccountNumber).then(() => {
      alert('Account Number copied');
    });
  };

  return (
    <div className={isDeposit ? 'w-full h-[100vh] p-3 backG' : 'hidden'}>
        <div className='flex justify-center p-3'>
            <div className='fixed flex justify-between right-3 top-4 left-3'>
                <img src={angleleft} className='md:w-10 w-[2rem] bg-white shadow  rounded-xl' onClick={back} alt='Back' />
                <img src={close} className='md:w-10 w-[2rem] bg-white shadow  rounded-xl' onClick={handleClose} alt='Close' />
            </div>
            <h1 className='font-primaryBold text-2xl'>Set up Direct Deposit</h1>
        </div>


      <div className='w-full p-3 h-[7rem]'>
        <h1 className='text-2xl font-primaryBold'>Do it Yourself</h1>
        <p className='text-xl font-primaryRegular text-gray-400'>Just give this info to your employer</p>
      </div>

      <div className='flex'>
        
      </div>
    </div>
  );
};

export default Deposit;
