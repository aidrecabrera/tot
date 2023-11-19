import MassacresList from "../components/Landing/Massacres";
import "../main.css";
import Counter from "../utils/Counter";
import Methods from "../utils/Methods";
export default function Hras() {
  const MartialLawStatistics = [
    {
      type: "Killing and Enforced Disappearance",
      count: 232,
    },
    {
      type: "Arbitrary Detention (For More Than Six Months)",
      count: 69,
    },
    {
      type: "Torture (Rape and Forcible Abduction)",
      count: 23,
    },
    {
      type: "Arbitrary Detention (Lasting Between 15 Days to Six Months)",
      count: 141,
    },
    {
      type: "Torture (Involving Children and Minors)",
      count: 21,
    },
    {
      type: "Arbitrary Detention (Lasting Between 36 Hours Up to 15 Days)",
      count: 123,
    },
    {
      type: "Torture (Involving Psychological, Mental, and Emotional Harm Other Than Insanity, Acts of Lasciviousness)",
      count: 146,
    },
    {
      type: "Involuntary Exile (Involving Violence and Illegal Takeover of Business)",
      count: 57,
    },
    {
      type: "Cruel, Inhumane, & Degrading Treatment",
      count: 18,
    },
    {
      type: "Involuntary Exile (Involving Intimidation and Physical Injuries)",
      count: 273,
    },
  ];
  return (
    <div>
      <div className="flex flex-col gap-16 ">
        <h1 className="text-7xl">
          Now try to comprehend these numbers.
          <br />
          One block represents 10 Filipino lives.
        </h1>
        <div className="flex flex-col gap-36">
          {MartialLawStatistics.map((stat, index) => (
            <div key={index}>
              <Counter peopleCount={stat.count} description={stat.type} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col h-screen gap-10 mt-16">
        <div className="text-7xl overflow-hidden">
          <MassacresList />
        </div>
      </div>
      <div>
        <Methods />
      </div>
    </div>
  );
}
