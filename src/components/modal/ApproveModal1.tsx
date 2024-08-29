import Image from "next/image";
export default function ApproveModal1() {
  return (
    <>
      <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center z-40">
        <div className="w-[627px] h-[462px] relative bg-[#121212] border-[1px] border-[#272727] rounded-[30px] flex items-center justify-center">
          <div>
            <div className="w-full text-center inline-flex justify-center">
              <p className="text-[20px]">STEP 1/2</p>
              <p className="bg-gradient-to-r from-[#3242F5] to-[#63D8EC] bg-clip-text text-transparent text-[20px] ml-[10px]">
                APPROVE
              </p>
            </div>
            <div className="w-full flex justify-center mt-[40px]">
              <Image
                alt="loading"
                width={0}
                height={0}
                src={"/icon/loading.svg"}
                className="w-[100px] h-[100px]"
              />
            </div>
            <div className="w-full text-center mt-[20px]">
              <p className="text-[16px]">
                Please press "Approve" button in metamask
                <br />
                extension
              </p>
            </div>
            <p className="w-full text-center mt-[20px] text-[16px] text-[#707070]">
              BEP-20 tokens are deployed with functionality that allows other
              smart
              <br />
              contracts to move tokens. By approving the smart contracts, it now
              has
              <br /> permission to execute the peer to peer swapping behavior on
              your
              <br /> behalf. The Spend Limit permission is the total amount of
              tokens that are <br /> able to move when using MetaMask Swap.
            </p>
          </div>
          <button className="absolute top-[30px] right-[30px]">
            <Image
              className="w-[16px] h-[16px]"
              alt="close"
              src={"/icon/close.svg"}
              width={0}
              height={0}
            />
          </button>
        </div>
      </div>
    </>
  );
}
