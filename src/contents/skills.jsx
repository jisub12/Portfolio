import { Wrapper, Heading } from '../components/common'
import { DiJavascript, DiNodejs, DiGithubBadge, DiAws } from 'react-icons/di'
import { SiNextdotjs, SiTypescript, SiJavascript, SiExpress, SiReact, SiSolidity, SiRemix, SiCloudfoundry } from 'react-icons/si'

const Skills = () => {
    return (
        <Wrapper>
            <Heading>기술 스택</Heading>
            <ul className="flex flex-col divide-y divide-gray-400">
                <li className="flex flex-row gap-[32px] py-[32px">
                    <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold w-[20%] basisc-[25%]">
                        언어
                    </h3>
                    <ul className="flex flex-col gap-[16px] text-[16px] pb-[32px] font-medium w-full items-start">
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <SiJavascript />
                                <span className="md:w-[120px]">Javascript</span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>아는 게 적을수록 코드가 길어지고, 지식이 늘어날수록 코드가 짧아진다는 것을 개인 프로젝트를 진행하며 몸으로 깨달았습니다.</li>
                                <li>무수한 오류들을 겪어내며 코드의 순서가 매우매우 중요하다는 것을 느꼈습니다.</li>
                            </ul>
                        </li>

                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <SiTypescript />
                                <span className="md:w-[120px]">Typescript</span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>interface를 작성하고 적용해보며 여러가지 type들을 다루는 방법을 익혔습니다.</li>
                                <li>type 오류들을 겪으며 타입들의 생김새에 대해 자세히 알게 되었습니다.</li>
                            </ul>
                        </li>
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <SiSolidity />
                                <span className="md:w-[120px]">Solidity</span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>왜 Remix와 hardhat을 함께 사용해야하는 지에 대해 알게 되었습니다.</li>
                                <li>toWei를 쓰는 이유와 솔리디티 코드 안에서 값을 다루는 방법에 대해 익혔습니다.</li>
                                <li>프론트와 어떻게 상호작용하며 값을 주고 받는 지에 대해 깨달았습니다.</li>
                                <li>DEX거래소를 공부하며 CA간 유기적인 아키텍쳐 설계 방법을 익혔습니다.</li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li className="flex flex-row gap-[32px] py-[32px]">
                    <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold w-[20%] basisc-[25%]">
                        블록체인
                    </h3>
                    <ul className="flex flex-col gap-[16px] text-[16px] pb-[32px] font-medium w-full items-start">
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <SiRemix />
                                <span className="md:w-[120px]">Remix</span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>라이브러리를 왜 사용하는 지에 대해 깨닫게 되었습니다.</li>
                                <li>Remix의 장점과 단점을 몸으로 느꼈습니다.</li>
                                <li>질문 받고 싶은 것 위주로 적자.. 공부해서 최대한 많이 채워넣어보자..</li>
                            </ul>
                        </li>
                        {/* <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <SiCloudfoundry />
                                <span className="md:w-[120px]">Remix</span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>Remix를 활용한 개인 & 팀 프로젝트 경험</li>
                            </ul>
                        </li> */}
                    </ul>
                </li>

                <li className="flex flex-row gap-[32px] py-[32px]">
                    <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold w-[20%] basisc-[25%]">
                        프론트 앤드
                    </h3>
                    <ul className="flex flex-col gap-[16px] text-[16px] pb-[32px] font-medium w-full items-start">
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <SiReact />
                                <span className="md:w-[120px]">React</span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>React에 web3,contract를 가져와 Staking기능을 화면에 입혀본 경험이 있습니다.</li>
                                <li>React 디렉토리 구조를 설계해본 경험이 있습니다.</li>
                                <li>React의 장점에 대해 이해하고 있습니다.</li>
                            </ul>
                        </li>

                    </ul>
                </li>

                {/* <li className="flex flex-row gap-[32px] py-[32px]">
                    <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold w-[20%] basisc-[25%]">
                        백앤드
                    </h3>
                    <ul className="flex flex-col gap-[16px] text-[16px] pb-[32px] font-medium w-full items-start">
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <SiExpress />
                                <span className="md:w-[120px]">Express</span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>채워넣겠습니다..</li>
                            </ul>
                        </li>
                    </ul>
                </li> */}
                <li className="flex flex-row gap-[32px] py-[32px]">
                    <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold w-[20%] basisc-[25%]">
                        etc
                    </h3>
                    <ul className="flex flex-col gap-[16px] text-[16px] pb-[32px] font-medium w-full items-start">
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <DiAws />
                                <span className="md:w-[120px]">배포</span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>Lotto, crossfit 파운드 계산기 원페이지 사이트 배포 및 운영 경험</li>
                                <li>SEO에 관해 공부했으며, 카카오 에드핏을 통한 수익 창출 경험</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </Wrapper>
    )
}

export default Skills
