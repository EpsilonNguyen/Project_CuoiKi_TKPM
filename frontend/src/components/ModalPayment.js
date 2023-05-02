import Modal from 'react-modal';
import { useState } from 'react';
import TabPayment from './TabPayment';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const ModalPayment = (props) => {
    const { modalIsOpen, closeModal } = props;

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                style={customStyles}
            >
                <div className="flex flex-col gap-5">
                    <div className="mt-5 mx-8 text-blue-500">
                        <span onClick={() => { }}><i className="fa fa-arrow-left cursor-pointer text-2xl" aria-hidden="true"></i></span>
                        <span onClick={() => { closeModal() }} className="float-right"><i className="fa fa-times cursor-pointer text-2xl" aria-hidden="true"></i></span>
                    </div>
                    <div className="text-center text-blue-500 text-3xl">Make Payment</div>
                    <div className="flex gap-12 justify-center text-white">
                        <TabPayment />
                    </div>

                </div>
            </Modal>
        </div>
    );
}

export default ModalPayment;