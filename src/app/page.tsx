import Image from "next/image";

export default function Home() {
  return (
        <div className={'container'}>
            <h2 className={'title'}>Cars</h2>
            <div className={'mt-2.5'}>
                <p>
                    A car, or an automobile, is a motor vehicle with wheels. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people, not cargo.
                </p>
                <p className={'mt-1'}>
                    Cars have been around for over 100 years, and they have revolutionized the way we live. They have made it possible for us to travel long distances quickly and easily, and they have given us a greater sense of freedom. Cars have also had a major impact on the environment, and there is a growing movement to develop more fuel-efficient and environmentally friendly cars.
                </p>
            </div>
            <div className={'relative w-[800px] h-[450px] mx-auto'}>
                <Image src="/old-car.png" alt="" fill/>
            </div>
        </div>
  )
}
