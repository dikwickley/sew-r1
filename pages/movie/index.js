import { Layout } from "../../components/Layout";
import Image from "next/image";
const InfoBox = ({ info, data }) => {
  return (
    <div className="w-[300px] flex flex-col items-center p-4 text-center">
      <span className="text-2xl">{info} </span>
      <span className="text-sm font-semibold">{data}</span>
    </div>
  );
};

const Epbox = ({ title, data }) => {
  return (
    <div className="flex flex-col p-3 font-thin">
      <div className="font-serif text-4xl">{title}</div> {data}
    </div>
  );
};

export default function Movie() {
  return (
    <Layout title={"Lucifer"}>
      <div className="flex flex-col items-center justify-center text-white bg">
        <div>
          <Image alt="img" src={"/bg.jpg"} className=" w-[100vw]" />
        </div>

        <div className="flex flex-row">
          <div className="p-4">Rotten Tomatoes :88%</div>
          <div className="p-4">IMDb :8.2/10</div>
          <div className="p-4">Ratings Graph :8.5/10</div>
        </div>
        <div className="flex flex-row">
          <div className="p-10 text-5xl text-center">
            Seasons <br /> <span className="text-9xl">6</span>
          </div>

          <div className="flex flex-row w-[70%] flex-wrap justify-center items-center">
            <InfoBox
              info={"Genre"}
              data={
                "Mystery Occult detective fiction Urban fantasy Police procedural Comedy drama"
              }
            />
            <InfoBox info={"Release Data"} data={"January 25, 2016 "} />
            <InfoBox
              info={"Original Network"}
              data={"Fox (seasons 1-3)  Netflix (seasons 4-6)"}
            />
            <InfoBox
              info={"Editors"}
              data={`	
              Marc Pattavina
              Ray Daniels III
              Fred Peterson
              Hector Carrillo
              Matt Coleshill
              Jill D'Agnenica`}
            />
            <InfoBox
              info={"Producers"}
              data={`
              Alex Katsnelson
              Michael Azzolino
              Erik Holmberg
              Karen Gaviola`}
            />
            <InfoBox
              info={"Cinematography"}
              data={`Glen Keenan
              Ryan McMaster
              Tico Poulakakis
              Stefan von Bjorn
              Barry Donlevy
              Christian Sebaldt`}
            />
            <InfoBox
              info={"Production locations"}
              data={`	
              Vancouver, British Columbia 
              Los Angeles, California `}
            />
          </div>
          <div className="p-10 text-5xl text-center">
            Episodes <br /> <span className="text-9xl">93</span>
          </div>
        </div>
        <div>
          <div className="self-start my-20 text-7xl">Episodes</div>
          <div className="flex flex-col w-[70%] mb-20">
            <Epbox
              title={"1. Pilot"}
              data={`After leaving hell, Lucifer Morningstar seeks a more exciting life in Los Angeles; when a murder connects Lucifer to Detective Chloe Decker, he becomes interested in the idea of punishing criminals.`}
            />
            <Epbox
              title={"2. Lucifer, Stay. Good Devil"}
              data={`Lucifer helps Chloe investigate when a movie star's son is killed after being pursued by the paparazzi; Maze and Amenadiel try to persuade Lucifer to come back to hell.`}
            />
            <Epbox
              title={"3. The Would-Be Prince of Darkness"}
              data={`An up-and-coming quarterback calls Lucifer after finding a corpse in his pool; Lucifer asks Chloe to help investigate, which leads them into the world of big-money sports.`}
            />
            <Epbox
              title={"4. Manly Whatnots"}
              data={`Lucifer decides he must seduce Chloe to get over his infatuation with her; a girl goes missing; Amenadiel and Maze discuss Lucifer.`}
            />
            <Epbox
              title={"5. Sweet Kicks"}
              data={`Lucifer wants Chloe to investigate a shooting at a fashion show, which resulted in a young woman's death; Amenadiel targets Dr. Linda Martin.`}
            />
            <Epbox
              title={"6. Favorite Son"}
              data={`When Lucifer bails on a murder investigation that bores him, he must persuade Chloe to let him back on the case after realizing that something very personal to him was stolen during the crime.`}
            />
            <Epbox
              title={"7. Wingman"}
              data={`Lucifer gets help from an unlikely source while trying to find the contents of his stolen container; Chloe uncovers a vital clue.`}
            />
            <Epbox
              title={"8. Et Tu, Doctor?"}
              data={`The murder of a therapist prompts Lucifer and Chloe to enlist the help of Dr. Linda in their search for a suspect; Chloe is confronted by Malcolm about the night he was shot; Lucifer becomes jealous.`}
            />
            <Epbox
              title={"9. A Priest Walks into a Bar"}
              data={`A priest turns to Lucifer for help when he believes a drug operation has set up shop at a youth center in the neighborhood; Malcolm finds a way to watch Dan.`}
            />
            <Epbox
              title={"10. Pops"}
              data={`Lucifer and Chloe suspect a restaurateur's son played a part in his death; the return of Chloe's mother sends her life into upheaval.`}
            />
            <Epbox
              title={"11. St. Lucifer"}
              data={`After a philanthropist is found dead, Lucifer explores his better nature by becoming a benefactor for Tim's charity.`}
            />
            <Epbox
              title={"12. TeamLucifer"}
              data={`The investigation into the death of a woman whose body was left on the Hollywood Walk of Fame and twisted into the shape of a pentagram leads the team into the world of Satanists, where their preconceived notions are challenged.`}
            />
            <Epbox
              title={"13. Take Me Back to Hell"}
              data={`When Lucifer is framed for murder, he and Chloe team up to clear his name and identify the real killer.`}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
