
export const ProductSummary = (props) => {
    const {data} = props;
  return (
    <div className="card mb-4">
        <img src={data.images[0]} alt={data.title} height='320'/>
        <div className="crad-body">
            <span>{data.title}</span>
            <span>${data.price}</span>
        </div>
    </div>
  )
}
