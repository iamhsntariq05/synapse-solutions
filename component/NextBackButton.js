import react from "react";

function NextBackButton({ onNext, onBack }) {
    return (
      <div className="mt-5 flex justify-center">
        <button
          type="button"
          className="bg-transparent hover:bg-[#550a4f] text-blue-700 
          font-semibold hover:text-white py-2 px-4 border border-blue-500 
          hover:border-transparent mr-[6rem] rounded-full transform transition-all duration-300
          ml-4 lg:ml-0"
          onClick={onBack}
          style={{ width: '200px' }}
        >
          Back
        </button>
        <button
          type="button"
          className="bg-transparent hover:bg-[#550a4f] text-blue-700 font-semibold
           hover:text-white border border-blue-500 hover:border-transparent 
           rounded-full transform transition-all duration-300 mr-14 md:mr-0"
          onClick={onNext}
          style={{ width: '200px' }}
        >
          Next
        </button>
      </div>
    );
  }

  export default NextBackButton;