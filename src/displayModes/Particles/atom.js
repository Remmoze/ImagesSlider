import { atom, useRecoilState } from "recoil";
import { setProperty, localStorageEffect } from "../atoms/helper";

import City from "../content/city.jpg";

const particlesAtom = atom({
    key: "Particles",
    default: {
        imageUrl: City,
        speed: 1,
        scale: true,
    },
    effects: [localStorageEffect("Particles")],
});

const useParticlesAtom = () => {
    const [particles, setParticles] = useRecoilState(particlesAtom);

    const setImageUrl = setProperty(setParticles, "imageUrl");
    const setSpeed = setProperty(setParticles, "speed");
    const setScale = setProperty(setParticles, "scale");

    return {
        particles,
        setImageUrl,
        setSpeed,
        setScale,
    };
};

export { particlesAtom };
export default useParticlesAtom;
