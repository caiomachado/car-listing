import { useMemo, useState } from 'react'
import { carsData } from '../../utils/data'

import { InfoSection } from '../../components/InfoSection/InfoSection'
import { SlidingList } from '../../components/SlidingList/SlidingList'

import { HomeContainer } from "./styles"

export type Collection = Record<string, Car[]>

export type Car = {
  id: number
  created_at: number
  year: number
  gas_type: string 
  door_count: number
  color: string
  image_url: string
  model_name: string
  price: number
  brand: string
}

export const Home = () => {
    const [cars, setCars] = useState<Car[]>(() => {
        const data = window.localStorage.getItem('carsList')
        if (data) {
            return JSON.parse(data)
        } else {
            return carsData
        }
    })
    const [selectedCar, setSelectedCar] = useState<Car | null>(null)
    const [selectedBrand, setSelectedBrand] = useState('')
    const [isShowingExtra, setIsShowingExtra] = useState(false)

    const carsCollection = useMemo(() => {
        return cars.reduce((acc: Collection, cur: Car) => {
            if (acc[cur.brand]) {
                acc[cur.brand].push(cur)
            } else {
                acc[cur.brand] = [cur]
            }
            return acc
        }, {})
    }, [cars])

    const selectedBrandCars = carsCollection?.[selectedBrand]
    const foundSelectedCarIndex = selectedBrandCars?.findIndex((car) => car.id === selectedCar?.id)
    const shouldSlideToNext = foundSelectedCarIndex > 5 && selectedBrandCars[foundSelectedCarIndex] !== selectedBrandCars[selectedBrandCars.length - 1]

    function handleUpdateCarsList(newCar: Car) {
        return setCars(prevState => {
            const updatedList = [...prevState, newCar]
            window.localStorage.setItem('carsList', JSON.stringify(updatedList))
            return updatedList
        })
    }

    function handleSelectCar(carId: number, carName: string) {
        if (carId === selectedCar?.id) {
            setIsShowingExtra(false)
            setSelectedCar(null)
        } else {
            const foundItem = selectedBrandCars.find(item => item.model_name === carName)!
            setSelectedCar(foundItem)
            setIsShowingExtra(true)
        }
    }

    return (
        <HomeContainer>
            <h1>ENCONTRE O SEU CARRO PERFEITO</h1>
            <div className="display-wrapper">
                <aside>
                    {carsCollection && Object.keys(carsCollection).map(brand => {
                        return (
                            <div 
                                key={brand} 
                                className={selectedBrand === brand ? "brand-wrapper active" : 'brand-wrapper'}
                                onClick={() => {
                                    if (selectedBrand === brand) {
                                        setSelectedBrand('')
                                        setSelectedCar(null)
                                        setIsShowingExtra(false)
                                    } else {
                                        setSelectedBrand(brand)
                                        setSelectedCar(carsCollection[brand][0])
                                        setIsShowingExtra(true)
                                    }
                                }}
                            >
                            <div className="dash" />
                                <span>{brand}</span>
                            </div>
                        )
                    })}
                </aside>
                <section className="image-block">
                    {selectedCar ? (
                        <img src={selectedCar?.image_url} alt={selectedCar?.model_name} />
                    ) : (
                        <h2>NENHUM CARRO SELECIONADO</h2>
                    )}
                </section>
            </div>
            <section className="list-section">
                <SlidingList
                    itemSize={150}
                    disablePreviousButton={!selectedBrand || selectedBrandCars?.[0].id === selectedCar?.id}
                    disableNextButton={!selectedBrand || selectedBrandCars[selectedBrandCars.length - 1].id === selectedCar?.id}
                    displayedValues={selectedBrandCars?.map(car => {
                        return {
                            id: car.id,
                            name: car.model_name
                        }
                    })}
                    shouldSlideToNext={shouldSlideToNext}
                    selectedItemId={selectedCar?.id}
                    handleOnSelectItem={handleSelectCar}
                    previousItem={() => setSelectedCar(selectedBrandCars[foundSelectedCarIndex - 1])}
                    nextItem={() => setSelectedCar(selectedBrandCars[foundSelectedCarIndex + 1])}
                />
                <button 
                    className="add-block" 
                    type="button"
                    disabled={!selectedCar && isShowingExtra}
                    onClick={() => {
                    setSelectedCar(null)
                    setIsShowingExtra(true)
                    }}
                >
                    PUBLIQUE SEU CARRO +
                </button>
            </section>
            {isShowingExtra ? (
                <InfoSection 
                    car={selectedCar} 
                    closeSection={() => setIsShowingExtra(false)}
                    updateCarsList={(newCar) => handleUpdateCarsList(newCar)}
                />
            ) : null}
        </HomeContainer>
    )
}