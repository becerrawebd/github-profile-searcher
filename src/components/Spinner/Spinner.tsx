import { default as spinner } from '../../assets/spinner.svg'

export default function Spinner() {
  return (
    <div className='flex justify-center items-center py-8 px-8'>
      <img src={spinner} />
    </div>
  )
}
