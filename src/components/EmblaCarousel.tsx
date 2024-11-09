import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import quotePng from "../assets/quote.png"


interface SlideType {
  text : string,
  name : string,
  title : string,
  icon : string
}
type PropType = {
  slides: SlideType[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide,index) => (
            <div className="embla__slide pt-10" key={index}>
              <div className='relative w-full border px-10 py-4 pt-14 bg-white text-gray-800 rounded-lg flex flex-col justify-center items-center gap-4'>
                <img src={slide.icon} className='absolute -top-10 left-54 z-100  w-20' alt="" />
                <p className='relative text-center'>
                  <img src={quotePng} className='absolute top-0 left-0 w-6' alt="" />
                  {slide.text}
                  <img src={quotePng} className='absolute -bottom-4 right-0 w-8' alt="" />
                  </p>
                <div className='flex flex-col justify-center items-center'>
                  <h1 className='text-[#1C408E] text-xl font-medium'>{slide.name}</h1>
                  <h3 className='text-[#1C408E] text-xs font-medium'>{slide.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
