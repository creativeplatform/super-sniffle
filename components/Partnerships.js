import React from "react";

function Partnerships() {
  const styles = {
    partnershipsLogos: `h-5 mx-auto md:h-7 sm:h-7 lg:h-9 grayscale hover:grayscale-0 transition-all ease-in duration-300`,
  };
  return (
    <>
      <section className="">
        <div className=" my-7">
          <div className="mx-auto text-center">
            <div className="grid grid-cols-6 gap-4 mx-auto ">
              <div>
                <img
                  className={styles.partnershipsLogos}
                  src="../partnerships/Creative.png"
                  alt="CreativeDAO"
                />
              </div>
              <div>
                <img
                  className={styles.partnershipsLogos}
                  src="../partnerships/Crossmint.png"
                  alt="Crossmint"
                />
              </div>
              <div>
                <img
                  className={styles.partnershipsLogos}
                  src="../partnerships/Stageverse.png"
                  alt="Stageverse"
                />
              </div>
              <div>
                <img
                  className={styles.partnershipsLogos}
                  src="../partnerships/Polygon.png"
                  alt="Polygon"
                />
              </div>
              <div>
                <img
                  className={styles.partnershipsLogos}
                  src="../partnerships/ThirdWeb.png"
                  alt="ThirdWeb"
                />
              </div>
              <div>
                <img
                  className={styles.partnershipsLogos}
                  src="../partnerships/Chainlink.png"
                  alt="Chainlink"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Partnerships;
