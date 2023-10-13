import { useRef } from 'react'
import { ListContainer } from './styles';

type DisplayedValue = {
  id: number;
  name: string;
}

type SlidingListProps = {
  displayedValues: DisplayedValue[]
  itemSize: number;
  selectedItemId: number | undefined;
  disablePreviousButton: boolean;
  disableNextButton: boolean;
  shouldSlideToNext: boolean;
  handleOnSelectItem: (id: number, name: string) => void;
  nextItem: () => void;
  previousItem: () => void;
}

export const SlidingList = ({
  displayedValues,
  itemSize,
  nextItem,
  previousItem,
  shouldSlideToNext,
  handleOnSelectItem,
  disablePreviousButton,
  disableNextButton,
  selectedItemId
}: SlidingListProps) => {
    const slidingListRef = useRef<HTMLDivElement>(null)

    function handlePreviousItem() {
      previousItem()

      if (slidingListRef.current?.scrollLeft !== 0) {
        slidingListRef.current?.scrollTo({ behavior: 'smooth', top: 0, left: slidingListRef.current.scrollLeft -= itemSize })
      }
    }

    function handleNextItem() {
      nextItem()

      if (shouldSlideToNext) {
        slidingListRef.current?.scrollTo({ behavior: 'smooth', top: 0, left: slidingListRef.current.scrollLeft += itemSize })
      }
    }

    return (
        <ListContainer>
            <button 
              className="list-btn" 
              onClick={handlePreviousItem}
              disabled={disablePreviousButton}
            >
              {'<'}
            </button>
            <div className="list" ref={slidingListRef}>
              {displayedValues && displayedValues.length > 0 && displayedValues.map(value => {
                return (
                  <div 
                    key={value.id} 
                    className={selectedItemId === value.id ? 'item-block active' : 'item-block'} 
                    onClick={() => handleOnSelectItem(value.id, value.name)}
                  >
                    <span>{value.name}</span>
                  </div>
                )
              })}
            </div>
            <button 
              className="list-btn" 
              onClick={handleNextItem} 
              disabled={disableNextButton}
            >
              {'>'}
            </button>
        </ListContainer>
    )
}