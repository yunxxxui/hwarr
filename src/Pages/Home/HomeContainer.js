import { useEffect, useState } from "react";

//컴포넌트
import LocalNav from "Components/LocalNav"
import Loader from "Components/Loader";
import HomePresenter from "./HomePresenter";

//훅스
import useScroll from "Components/Hooks/useScroll";
import useResize from "Components/Hooks/useResize";
import useDelay from "Components/Hooks/useDelay";


//한 씬 길이
const sceneHeight = 5;

//비디오 정보
const videoInfo = {
    video1: {
        folder: "video1",
        videoImages: [],
        videoImageCount:475,
        imageSequence:[0, 474, {start:0, end:1}]
    },
    video2: {
        folder: "video2",
        videoImages: [],
        videoImageCount:481,
        imageSequence: [0, 480, {start:0, end:1}]
    }
}


//비디오 로딩
const useImages = () => {
    const[loading, setLoading] = useState(true);

    useEffect(()=>{
        let imgElem
        try {
            
            for (let i = 0; i < videoInfo.video1.videoImageCount; i++) {
                imgElem = document.createElement('img');
                imgElem.src = `${require(`img/${videoInfo.video1.folder}/IMG_${1000 + i}.webp`).default}`;
                videoInfo.video1.videoImages.[i] = imgElem;
            }
            for (let i = 0; i < videoInfo.video2.videoImageCount; i++) {
                imgElem = document.createElement('img');
                imgElem.src = `${require(`img/${videoInfo.video2.folder}/IMG_${1000 + i}.webp`).default}`;
                videoInfo.video2.videoImages.[i] = imgElem;
            }
        } catch (error) {
            console.log("이미지 로드 실패")
        } finally {
            setLoading(false);
        }
    },[])

    return loading
};

let rafId = 0;
let delayY = 0;

const HomeContainer = () => {

    const loading = useImages();

    const { scrollY } = useScroll();
    const { delayY } = useDelay(scrollY);
    const { windowHeight } = useResize();
    const totalHeight =  windowHeight*sceneHeight - 104;
    const totlaRatioY = scrollY / totalHeight;
    const currentScene = parseInt(totlaRatioY + 1);
    const currentRatioY = delayY / totalHeight - (currentScene - 1);
    
    return(
        <>
            <LocalNav scrollY={scrollY}/>
            {loading ? <Loader/> :
                <HomePresenter
                    sceneHeight = {sceneHeight}
                    currentScene = {currentScene}
                    videoInfo = {videoInfo}
                    currentRatioY = {currentRatioY}
                />
            }
        </>
    )

}

export default HomeContainer;