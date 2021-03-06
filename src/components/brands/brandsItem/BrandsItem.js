import { Link } from 'react-router-dom'
import './items.css'

const BrandsItem = ({ item }) => {
  return (
    <div className="group flex items-center flex-col pad hover:cursor-pointer">
      <div
        className="max-w-full w-32 h-32 imgRad bg-center bg-cover bg-clip-padding border border-solid border-transparent group-hover:border-orange-700"
        style={{ backgroundImage: `url(${item.image})` }}
        alt="bezzzee"
      />

      <Link
        to={`${item.id}`}
        className=" text-center mt-2.5 font-bold text-base group-hover:underline maxWidth"
      >
        {item.title}
      </Link>
    </div>
  )
}

export default BrandsItem
