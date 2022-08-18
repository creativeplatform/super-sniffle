import React from "react";

function Partnerships() {
  const styles = {
    partnershipsLogos: `h-5 mx-auto lg:h-9 grayscale hover:grayscale-0 transition-all ease-in duration-300`,
  };
  return (
    <>
      <section className="">
        <div className=" my-7">
          <div className="mx-auto text-center">
            <div className="grid grid-cols-5 gap-4 mx-auto ">
              <div>
                <img
                  className={styles.partnershipsLogos}
                  src="../partnerships/Creative.png"
                  alt="Inner-CityArts"
                />
              </div>
              <div>
                <img
                  className={styles.partnershipsLogos}
                  src="../partnerships/Crossmint.png"
                  alt="Rarible"
                />
              </div>
              <div>
                <img
                  className={styles.partnershipsLogos}
                  src="../partnerships/Stageverse.png"
                  alt="Inner-CityArts"
                />
              </div>
              <div>
                <img
                  className={styles.partnershipsLogos}
                  src="../partnerships/Polygon.png"
                  alt="Inner-CityArts"
                />
              </div>
              <div>
                <img
                  className={styles.partnershipsLogos}
                  src="../partnerships/rarible.png"
                  alt="Rarible"
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
