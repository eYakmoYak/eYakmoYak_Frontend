import TakeMediCard from "./components/TakeMediCard";
import WarnMediList from "./components/WarnMediList";
import HeaderSearchMedi from "./components/HeaderSearchMedi";
import HeaderAutoMediInput from "./components/HeaderAutoMediInput";

type Props = {};

const WarnMedi = (props: Props) => {
  return (
    <div className="flex items-end justify-center rounded-t-xl">
      <div className="flex w-10/12 flex-col justify-end rounded-t-xl pb-14">
        <main className="flex flex-col">
          {/* <HeaderSearchMedi /> */}
          <HeaderAutoMediInput/>
          <TakeMediCard />
          <WarnMediList />
        </main>
      </div>
    </div>
  );
};

export default WarnMedi;
