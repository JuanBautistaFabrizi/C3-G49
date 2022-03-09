const CartResume = ({product}) => {
    
    return (
        <>
            <table class="table">
                <tbody>
                    <tr>
                    <td>{product.artist}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="text-end">$ {product.price * product.quantity}</td>
                    </tr>
                </tbody>
            </table>    
        </>
    )
}
export default CartResume