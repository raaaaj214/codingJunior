import React, {
    ComponentPropsWithRef,
    useCallback,
    useEffect,
    useState
  } from 'react'
  import { EmblaCarouselType } from 'embla-carousel'
import { ChevronLeft, ChevronRight } from 'lucide-react'
  
  type UsePrevNextButtonsType = {
    prevBtnDisabled: boolean
    nextBtnDisabled: boolean
    onPrevButtonClick: () => void
    onNextButtonClick: () => void
  }
  
  export const usePrevNextButtons = (
    emblaApi: EmblaCarouselType | undefined
  ): UsePrevNextButtonsType => {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  
    const onPrevButtonClick = useCallback(() => {
      if (!emblaApi) return
      emblaApi.scrollPrev()
    }, [emblaApi])
  
    const onNextButtonClick = useCallback(() => {
      if (!emblaApi) return
      emblaApi.scrollNext()
    }, [emblaApi])
  
    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
      setPrevBtnDisabled(!emblaApi.canScrollPrev())
      setNextBtnDisabled(!emblaApi.canScrollNext())
    }, [])
  
    useEffect(() => {
      if (!emblaApi) return
  
      onSelect(emblaApi)
      emblaApi.on('reInit', onSelect).on('select', onSelect)
    }, [emblaApi, onSelect])
  
    return {
      prevBtnDisabled,
      nextBtnDisabled,
      onPrevButtonClick,
      onNextButtonClick
    }
  }
  
  type PropType = ComponentPropsWithRef<'button'>
  
  export const PrevButton: React.FC<PropType> = (props) => {
    const { children, ...restProps } = props
  
    return (
      <button
        className="embla__button embla__button--prev"
        type="button"
        {...restProps}
      >
        <div className='border border-white p-2 shadow-lg rounded-full text-white'>
          <ChevronLeft size={30}/>
        </div>
      </button>
    )
  }
  
  export const NextButton: React.FC<PropType> = (props) => {
    const { children, ...restProps } = props
  
    return (
      <button
        className="embla__button embla__button--next"
        type="button"
        {...restProps}
      >
       <div className='border border-white p-2 shadow-lg rounded-full text-white'>
          <ChevronRight size={30}/>
        </div>
      </button>
    )
  }
  