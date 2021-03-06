import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addItemToShoppingCart } from '../../features/dataSlice'
import { useNavigate } from 'react-router-dom'

const Deal = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const deals = useSelector((state) => state.starter.deals)

  const { id } = useParams()

  const deal = deals.find((x) => x.id === parseInt(id))

  return (
    <>
      <Link className="px-12 text-blue-600 text-xs	" to="/daily">
        Back to previous page
      </Link>
      <div className=" flex justify-center mt-4 ">
        <div className="w-3/5 divSize border border-gray-600 border-solid">
          <img src={`${deal.dealImage}`} alt="slika" />
        </div>

        <div className="w-2/5 flex flex-col pl-4 space-y-3 justify-center items-center">
          <p className="font-bold pt-2 text-center">{deal.dealName}</p>
          <p>Quantity: {deal.quantity}</p>
          <p>
            Price: <span className="font-bold">US ${deal.dealPrice}</span>
          </p>
          <button
            onClick={() => {
              dispatch(addItemToShoppingCart(deal))
              navigate('/shoppingcart')
            }}
            className="bg-blue-500 p-2 rounded-md text-white"
          >
            Buy it now
          </button>
        </div>
      </div>
    </>
  )
}

export default Deal
