import { useState } from 'react'
import { FormEvent } from "react";
import { Car } from "../../pages/Home/Home"
import { Separator } from '../Separator/Separator';
import { InfoSectionContainer, FormContainer, InfoBlock, ActionBlock } from './styles';

type InfoSectionProps = {
  car: Car | null
  closeSection: () => void
  updateCarsList: (newCar: Car) => void
}

export const InfoSection = ({ car, closeSection, updateCarsList }: InfoSectionProps) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData)
    const payload = {
      id: new Date().getTime(),
      created_at: new Date().getTime(),
      year: +data.year, 
      gas_type: data.gas_type.toString().toUpperCase(), 
      door_count : +data.door_count,
      color: data.color.toString().toUpperCase(),
      image_url: data.image_url,
      model_name : data.model_name.toString().toUpperCase(),
      price : +data.price,
      brand: data.brand.toString().toUpperCase()
    } as Car

    updateCarsList(payload)
    setIsLoading(false)
  }

  return car ? (
    <InfoSectionContainer>
        <InfoBlock>
          <span>Ano</span>
          <p>{car.year}</p>
        </InfoBlock>
        <Separator />
        <InfoBlock>
          <span>Combustível</span>
          <p>{car.gas_type}</p>
        </InfoBlock>
        <Separator />
        <InfoBlock>
          <span>Número de Portas</span>
          <p>{car.door_count}</p>
        </InfoBlock>
        <Separator />
        <InfoBlock>
          <span>Cor</span>
          <p>{car.color}</p>
        </InfoBlock>
        <Separator />
        <InfoBlock>
          <span>Valor</span>
          <p>R${car.price}</p>
        </InfoBlock>
    </InfoSectionContainer>
  ) : (
    <FormContainer onSubmit={handleSubmit}>
      <InfoBlock>
        <span>Marca</span>
        <input type="text" name="brand" required />
      </InfoBlock>
      <Separator />
      <InfoBlock>
        <span>Nome</span>
        <input type="text" name="model_name" required />
      </InfoBlock>
      <Separator />
      <InfoBlock>
        <span>Ano</span>
        <input type="number" name="year" required />
      </InfoBlock>
      <Separator />
      <InfoBlock>
        <span>Combustível</span>
        <input type="text" name="gas_type" required />
      </InfoBlock>
      <Separator />
      <InfoBlock>
        <span>Número de Portas</span>
        <input type="number" name="door_count" required />
      </InfoBlock>
      <Separator />
      <InfoBlock>
        <span>Cor</span>
        <input type="text" name="color" required />
      </InfoBlock>
      <Separator />
      <InfoBlock>
        <span>Imagem</span>
        <input type="text" name="image_url" required />
      </InfoBlock>
      <Separator />
      <InfoBlock>
        <span>Valor</span>
        <input type="number" name="price" required />
      </InfoBlock>
      <Separator />
      <ActionBlock>
        <button 
          className="action-btn submit-btn" 
          type="submit"
          disabled={isLoading}
        >
          PUBLICAR
        </button>
        <button 
          className="action-btn cancel-btn"
          type="button"
          onClick={() => {
              closeSection()
          }}
          disabled={isLoading}
        >
          CANCELAR
        </button>
      </ActionBlock>
    </FormContainer>
  )
}