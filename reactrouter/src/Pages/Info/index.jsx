import { useParams } from 'react-router-dom'
import './index.css'

const Info = () => {
  const { prdtId } = useParams()
  return (
    <div>Mais informações sobre o produto: {prdtId}</div>
  )
}

export default Info